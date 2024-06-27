<template>
  <div>In a folder: {{ count }}</div>
</template>

<script setup lang="ts">
// await new Promise((resolve) => setTimeout(resolve, 5000));

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
