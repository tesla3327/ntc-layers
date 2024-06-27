<template>
  <h1>Client Page</h1>
  <p>
    This page is rendered entirely on the client. It is
    wrapped in a <code>ClientOnly</code> component.
  </p>
  <p>Count: {{ count }}</p>
  <JustServer />
</template>

<script setup lang="ts">
const count = ref(0);

onMounted(() => {
  setInterval(() => {
    count.value++;
  }, 1000);
});
</script>
