<template>
  <div>
    <h1>Nuxt Layers</h1>
    <p>Here are a collection of demos showing off Nuxt Layers.</p>

    <h2>Components From Different Layers</h2>
    <p>Here are some components auto-imported from different layers.</p>
    <p>This is a component from the <code>green</code> layer.</p>
    <Button>Click me</Button>

    <p>This is from the "current" layer.</p>
    <MyButton>Click me</MyButton>

    <h2>Naming Collisions Between Layers</h2>
    <p>If you have components with the same name in different layers, Nuxt will prefer the current layer over all others. Try renaming the <code>testButton</code> component in the current layer to <code>Button</code> and see what happens.</p>
    <Button>Click me</Button>

    <p>Now, try reordering the layers so that the <code>red</code> layer is before the <code>green</code> layer in the config.</p>

    <h2>Private Layers</h2>
    <p>Let's say you want to use the <code>pages</code> from a layer, but not the <code>components</code> from that layer. You can do this by creating a custom config in your private layer.</p>
    <p>This <code>privateComponent</code> component is only available in the <code>private</code> layer:</p>
    <PrivateComponent />

    <p>But we can still navigate to the pages from the <NuxtLink to="/private">private</NuxtLink> layer.</p>

    <h2>Pages From Different Layers</h2>
    <p>Even though they are in different layers, the child routes of the <code>red</code> and <code>green</code> layers are still available.</p>
    <div class="flex w-full justify-center space-x-4 mb-4">
      <NuxtLink to="/nested/red">Red</NuxtLink>
      <NuxtLink to="/nested/green">Green</NuxtLink>
    </div>

    <h2>Separate Config Per Layer</h2>
    <p>You can also create a separate config for each layer. This is useful if you want to use different plugins or modules for each layer, or better organize your <code>runtimeConfig</code>.</p>
    <p>In this demo we have a <code>blog</code> layer that uses <code>@nuxt/content</code>. With only a slight config change, we can have all of the content inside of <code>./blog/content</code> be available at the <code>/blog</code> route.</p>
    <p>Check out the first post <NuxtLink to="/blog/first">here</NuxtLink>.</p>

  </div>
</template>
