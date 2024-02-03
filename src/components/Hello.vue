<script setup lang="ts">
import { ref } from 'vue';
import { GreeterService } from '../generated/hello_connect';
import { createGrpcWebTransport } from '@connectrpc/connect-web';
import { createPromiseClient } from '@connectrpc/connect';
// import * as patch from '../generated/patch_pb.js';
import { HelloRequest, HelloReply } from '../generated/hello_pb';

import alertTone1 from '../assets/sound/alert-1.wav';
import alertTone2 from '../assets/sound/alert-2.wav';
import alertTone3 from '../assets/sound/alert-3.wav';

const alert1 = new Audio(alertTone1);
alert1.loop = true;
const alert2 = new Audio(alertTone2);
alert2.loop = true;
const alert3 = new Audio(alertTone3);
alert3.loop = true;

const message = ref('');

async function sayHello() {
  try {
    const transport = createGrpcWebTransport({
      baseUrl: 'http://127.0.0.1:9088',
    });

    const client = createPromiseClient(GreeterService, transport);

    const request = new HelloRequest();
    request.name = 'Qi';

    const response = await client.sayHello(request);

    console.log(response.message);
    message.value = response.message;
  } catch (e) {
    console.log(e);
  }
}

// play a sound clip from assets folder
function playSound(num: number) {
  // Code to play a sound clip based on the button clicked
  const audio = num === 1 ? alert1 : num === 2 ? alert2 : alert3;

  // play the sound clip
  audio
    .play()
    .then(() => {
      console.log(` sound is playing`);
    })
    .catch((error) => {
      console.error('Error playing the sound:', error);
    });
}

// stop playing the sound clip
function stopSoundPlay() {
  // Code to stop playing the sound clip
  alert1.pause();
  alert2.pause();
  alert3.pause();
  alert1.currentTime = 0;
  alert2.currentTime = 0;
  alert3.currentTime = 0;
}
</script>

<template>
  <form class="row" @submit.prevent="sayHello">
    <button type="submit">Hello Server</button>
  </form>
  <row>
    <p>Play a sound clip from assets folder</p>
  </row>
  <row>
    <button @click="playSound(1)" class="button-spacing">Play Sound 1</button>
    <button @click="playSound(2)" class="button-spacing">Play Sound 2</button>
    <button @click="playSound(3)">Play Sound 3</button>
  </row>
  <row class="row">
    <button @click="stopSoundPlay">Stop Play</button>
  </row>

  <p>{{ message }}</p>
</template>

<style scoped>
.button-spacing {
  margin-right: 10px;
}
.row {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
