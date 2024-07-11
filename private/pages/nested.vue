<template>
  <div>
    <h1>Child Routes from Layers</h1>
    <p>Even though they are in different layers, the child routes of the <code>red</code> and <code>green</code> layers are still available.</p>
    <div class="flex w-full justify-center space-x-4 mb-4">
      <NuxtLink to="/nested/red">Red</NuxtLink>
      <NuxtLink to="/nested/green">Green</NuxtLink>
    </div>
    <NuxtPage class="p-4 border-2 border-gray-200 rounded" />
  </div>
</template>