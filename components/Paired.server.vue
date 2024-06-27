<template>
  <div>This is paired: {{ startingCount }}</div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ startingCount?: number }>(), {
  startingCount: 0,
});
</script>
