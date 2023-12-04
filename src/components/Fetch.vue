<script setup lang="ts">
import { ref } from 'vue';
import { Service } from '../generated/patch_connect';
import { createGrpcWebTransport } from '@connectrpc/connect-web';
import { createPromiseClient } from '@connectrpc/connect';
// import * as patch from '../generated/patch_pb.js';
import { PullRequest, PushResponse, Query, State } from '../generated/patch_pb';

const encoder = new TextEncoder();
const message = ref('no message');

async function fetchUnit() {
  try {
    const transport = createGrpcWebTransport({
      baseUrl: 'http://127.0.0.1:9087',
    });

    const client = createPromiseClient(Service, transport);

    const request = new PullRequest();
    const query = new Query();

    query.path = encoder.encode('unit');
    query.limit = 10;
    query.timeout = 5;

    request.query = query;

    const state = new State();
    state.opaque = new Uint8Array(0);
    request.state = state;

    const response = await client.pull(request);

    const listLength = response.list.length.toString();
    console.log(response);
    message.value = 'Got ' + listLength + ' units from server';
  } catch (e) {
    console.log(e);
  }

  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
}
</script>

<template>
  <form class="row" @submit.prevent="fetchUnit">
    <button type="submit">fetch</button>
  </form>

  <p>{{ message }}</p>
</template>
