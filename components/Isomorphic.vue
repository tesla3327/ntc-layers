<template>
  <div>This is an isomorphic component: {{ count }}</div>
</template>

<script setup lang="ts">
/**
 * This is a regular Nuxt component that renders on the server and client.
 * Used to demonstrate that the component is rehydrated on the client.
 */
const props = withDefaults(
  defineProps<{ startingCount?: number }>(),
  {
    startingCount: 0,
  }
);

const offset = ref(0);
const count = computed(
  () => props.startingCount + offset.value
);

onMounted(() => {
  setInterval(() => {
    offset.value++;
  }, 1000);
});
</script>
