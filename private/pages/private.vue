<template>
  <div>
    <h1>Private Layer</h1>
    <p>This is a page from the private layer.</p>
    <p>We can use the <code>PrivateComponent</code> component from this layer by manually importing.</p>
    <PrivateComponent />
  </div>
</template>

<script setup>
// We can import components from the current layer by using the ~ alias.
import PrivateComponent from '~/components/PrivateComponent.vue';
</script>