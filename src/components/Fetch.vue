<script setup lang="ts">
import { ref } from 'vue';
import { Service } from 'ams-protos-ts/lib/patch_connect';
import { createGrpcWebTransport } from '@connectrpc/connect-web';
import { createPromiseClient } from '@connectrpc/connect';
// import * as patch from '../generated/patch_pb.js';
import {
  PullRequest,
  PullResponse,
  Query,
  State,
  StatusCode,
} from 'ams-protos-ts/lib/patch_pb';

import { UnitId, Properties } from 'ams-protos-ts/lib/unit_pb';

// declare an unit item map
const unitItemMap: Map<string, UnitItem> = new Map();

// declare const TextEncoder;
const encoder = new TextEncoder();

// unit item from grpc server unit buckets
// key UnitId message / value Properties message from unit.proto in 'ams-app-pb'
export interface UnitItem {
  Key: string; // combine namespace and label
  Text: string;
  Type: string;
  Name: string;
  Function: string;
  Location: string[];
  Selected?: boolean;
}

// clientState
const clientState = {
  cursor: new Uint8Array(0),
  opaque: new Uint8Array(0),
  seq: 0,
};
// display message
const message = ref('no message');
// total length of the list
let totalLength = 0;
let pullStop: boolean = false;

// stop pull
function stopPull() {
  pullStop = true;
  console.log('stop pull');
}

// fetch data
async function fetchData() {
  pullStop = false;
  try {
    const transport = createGrpcWebTransport({
      baseUrl: 'http://10.0.0.118:9087',
      // baseUrl: 'http://localhost:9087',
    });

    const client = createPromiseClient(Service, transport);

    const request = new PullRequest();

    //define query
    const query = new Query();
    query.path = encoder.encode('unit');
    query.limit = 200; // default 100
    query.timeout = 12; // default 12
    request.query = query;

    //define state
    request.state = new State();
    request.state.cursor = clientState.cursor;

    while (!pullStop) {
      const response: PullResponse = await client.pull(request);
      handleResponse(response);
      // wait 1 second
      request.state.cursor = clientState.cursor;
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log(
        '-------------------------------------------------------------------------'
      );
    }
  } catch (e) {
    console.log(e);
  }
}

function handleResponse(response: PullResponse) {
  // Update cursor with the one from the response
  if (response.state) {
    clientState.cursor = response.state.cursor;
  }

  switch (response.status) {
    case StatusCode.DROP:
      // When the status code from the server is DROP, client should clean the cache (eg. message list)
      console.log('DROP');
      break;
    case StatusCode.INVALID_REQUEST:
      console.log('INVALID_REQUEST');
      break;
    case StatusCode.FULL_UPDATE:
      // FULL_UPDATE status code means the server still have undelivered data for client,
      // and these data are already exisited when client connected and first pull data from server.
      console.log('FULL_UPDATE');

      break;
    case StatusCode.INCREMENTAL_UPDATE:
      // INCREMENTAL_UPDATE status code means the data from server existed after client connected.
      // so when we get this status code, we should know that the exsiting data from server is transfed and we can start to update gui
      console.log('INCREMENTAL_UPDATE');
      break;
    case StatusCode.PENDING_UPDATE:
      // PENDING_UPDATE is for UPD protocol
      console.log('PENDING_UPDATE');
      break;
    case StatusCode.FINAL_UPDATE:
      // FINAL_UPDATE is when server has no more data to send to client, so client can stop pulling data from server
      // not implemented yet
      console.log('FINAL_UPDATE');
      break;

    default:
      console.log('UNKNOWN');
      break;
  }

  response.list.forEach((u) => {
    // get unit id
    const unitid = UnitId.fromBinary(u.key);

    const key = unitid.namespace + '-' + unitid.label;
    console.log('key :', key);

    const properties = Properties.fromBinary(u.value);

    const newItem = {
      Key: key,
      Text: properties.text,
      Type: properties.type,
      Name: properties.name,
      Function: properties.function,
      Location: properties.location,
      Selected: false,
    };

    // add to map
    if (unitItemMap.has(key)) {
      // update item
      const item = unitItemMap.get(key);
      if (item) {
        console.log('key exist, update item');
        item.Text = newItem.Text;
        item.Type = newItem.Type;
        item.Name = newItem.Name;
        item.Function = newItem.Function;
        item.Location = newItem.Location;
      }
    } else {
      // add new item
      unitItemMap.set(key, newItem);
    }
  });

  totalLength = unitItemMap.size;
  message.value = `Got ${totalLength} items from server`;
}

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
</script>

<template>
  <form class="row" @submit.prevent="fetchData">
    <button type="submit">pull data</button>
  </form>
  <br />
  <form class="row" @submit.prevent="stopPull">
    <button type="submit">stop</button>
  </form>
  <p>{{ message }}</p>
</template>
