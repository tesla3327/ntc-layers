<template>
  <div>
    <!-- This component is only rendered on the server. -->
    <div>This is on the server</div>

    <!-- But if we add the `nuxt-client` attribute to this component
         we can make it interactive and run on the client. -->
    <Isomorphic nuxt-client :starting-count="39" />
  </div>
</template>
