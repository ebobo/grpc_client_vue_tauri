<script setup lang="ts">
import { ref } from 'vue';
import { Greeter } from '../generated/hello_connect';
import { createGrpcWebTransport } from '@connectrpc/connect-web';
import { createPromiseClient } from '@connectrpc/connect';
// import * as patch from '../generated/patch_pb.js';
import { HelloRequest, HelloReply } from '../generated/hello_pb';

const message = ref('');

async function sayHello() {
  try {
    const transport = createGrpcWebTransport({
      baseUrl: 'http://127.0.0.1:9099',
    });

    const client = createPromiseClient(Greeter, transport);

    const request = new HelloRequest();
    request.name = 'Qi';

    const response = await client.sayHello(request);

    console.log(response.message);
    message.value = response.message;
  } catch (e) {
    console.log(e);
  }
}
</script>

<template>
  <form class="row" @submit.prevent="sayHello">
    <button type="submit">Hello Server</button>
  </form>

  <p>{{ message }}</p>
</template>
