<template>
  <div>Test component (server rendered): {{ count }}</div>
</template>

<script setup lang="ts">
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
