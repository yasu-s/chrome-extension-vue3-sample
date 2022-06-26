<script setup lang="ts">
import { ref } from 'vue'

const color = ref('#000000')

/*global chrome */
async function changeColor(color: string) {
  console.log('color: ' + color)
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  await chrome.scripting.executeScript({
    target: { tabId: tab.id || 0 },
    args: [color],
    func: (args) => {
      document.body.style.background = args
    },
  })
}
</script>

<template>
  <div class="HomeView">
    <h2>home</h2>
    <div>
      <input v-model="color" type="color" @update:model-value="changeColor($event)" />
    </div>
  </div>
</template>
