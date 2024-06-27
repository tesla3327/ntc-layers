<template>
  <div>
    <h1>Server Page</h1>
    <p>
      This is a server only page, with no client-side
      interactivity on it.
    </p>
    <p>
      Because server components must have only a single root
      node, server pages must also.
    </p>
    <p>Count: {{ count }}</p>

    <p>
      If we use the <code>nuxt-client</code> attribute we
      can partially hydrate this component to get
      client-side interactivity.
    </p>

    <!-- Interactive components don't work on pages unless set to 'deep'-->
    <Isomorphic nuxt-client :starting-count="17" />
  </div>
</template>

<script setup lang="ts">
const count = ref(6);

onMounted(() => {
  setInterval(() => {
    count.value++;
  }, 1000);
});
</script>
