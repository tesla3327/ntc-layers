<template>
  <div>
    <h1>Nuxt Server Components</h1>

    <p>
      This page has a series of demos of Nuxt server
      components.
    </p>
    <p>
      For the demos we're using a counter that increments
      every second. This is to show when the components are
      being hydrated and made interactive on the client.
    </p>
    <p>
      We can also render client- or server-side only pages:
    </p>
    <ul>
      <li>
        <NuxtLink to="/client-page">Client Page</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/server-page">Server Page</NuxtLink>
      </li>
    </ul>

    <h2>Rendering Server Components</h2>
    <h3>Isomorphic</h3>
    <p>
      This is a regular Nuxt component that renders on both
      server and client:
    </p>
    <Isomorphic class="bg-slate-100 py-2 px-3 rounded-md" />

    <h3>Server Rendered</h3>
    <p>
      This component is only rendered on the server, so it
      won't count up.
    </p>
    <TestComponent
      class="bg-slate-100 py-2 px-3 rounded-md"
    />

    <h3>Server Rendered with Interactive Child</h3>
    <p>
      This is a server rendered component, but we can stick
      interactive components inside that get hydrated on the
      client:
    </p>
    <JustServer class="bg-slate-100 py-2 px-3 rounded-md" />

    <h3>Paired server/client components</h3>
    <p>
      For more complex use cases, we can split functionality
      between two components: a
      <code>*.server.vue</code> component and a
      <code>*.client.vue</code> component.
    </p>
    <Paired class="bg-slate-100 py-2 px-3 rounded-md" />

    <h3>NestedClient</h3>
    <p>
      We can only put interactive components one level deep
      inside server components, so this doesn't work:
    </p>
    <pre><code>- NestedClient (server component)
- JustServer   (server component)
  - Isomorphic (interactive client component)</code></pre>

    <p>We can only go one level deep:</p>

    <pre><code>- JustServer (server component)
- Isomorphic (interactive client component)</code></pre>

    <!-- Uncomment to see that it doesn't work correctly -->
    <!-- <NestedClient
        class="mt-4 bg-slate-100 p-2 rounded-md"
      /> -->

    <h2>Nuxt Island Component</h2>
    <p>
      Nuxt uses the <code>NuxtIsland</code> component
      internally when we use server components. We can use
      this directly ourselves, but the component we use
      <em>must</em> still have the
      <code>*.server.vue</code> naming convention.
    </p>
    <p>
      You'll notice these components do not count up — they
      are only rendered on the server, so they are not
      running in the browser:
    </p>
    <NuxtIsland
      name="TestComponent"
      :props="{
        class: 'bg-slate-100 py-2 px-3 rounded-md',
      }"
    />

    <p>
      The auto-import naming applies to these components as
      well, so folder names are prefixed by default:
    </p>
    <NuxtIsland
      name="FolderInAFolder"
      :props="{
        class: 'bg-slate-100 py-2 px-3 rounded-md',
      }"
    />

    <h2>Updating Props</h2>
    <p>
      When we update the props of a server component, Nuxt
      fetches the updated HTML from the server for just that
      component.
    </p>
    <p>
      (Open up the network tab in your dev tools to see
      these requests)
    </p>
    <p>
      Here, we can reactively update the
      <code>startingCount</code> with this button:
    </p>
    <!-- Button to test updating props -->
    <p>
      <button
        @click="increment()"
        type="button"
        class="border rounded-md py-2 px-4 font-medium bg-slate-50 hover:bg-slate-100 transition-colors"
      >
        Increment starting count
      </button>
    </p>

    <h3>A regular Nuxt component</h3>
    <Isomorphic
      class="bg-slate-100 py-2 px-3 rounded-md"
      :starting-count="startingCount"
    />

    <h3>Directly rendering a server component</h3>
    <p>Here we render a server component directly:</p>
    <TestComponent
      class="bg-slate-100 py-2 px-3 rounded-md"
      :starting-count="startingCount"
    />

    <h3>NuxtIsland Component</h3>
    <p>
      Using a <code>NuxtIsland</code> component with
      updating props.
    </p>
    <p>
      You also <em>must</em> put all attributes like
      <code>class</code> into the <code>props</code> prop so
      it will be correctly passed to the server component.
    </p>
    <NuxtIsland
      name="TestComponent"
      :props="{
        startingCount,
        class: 'bg-slate-100 py-2 px-3 rounded-md',
      }"
    />

    <p>
      A <code>NuxtIsland</code> component rendering a server
      component from a folder:
    </p>
    <NuxtIsland
      name="FolderInAFolder"
      :props="{
        startingCount,
        class: 'bg-slate-100 py-2 px-3 rounded-md',
      }"
    />

    <h3>Paired server/client components</h3>
    <p>
      You'll notice that this updates without the lag of the
      server components — this is because this component is
      also client-side rendered, so there is no network
      request needed to re-render the component.
    </p>
    <Paired
      class="bg-slate-100 py-2 px-3 rounded-md"
      :starting-count="startingCount"
    />

    <h2>Server Components and Slots</h2>
    <p>
      Let's take a look at how server component slots work,
      and how they work being put into slots.
    </p>
    <!-- Another button to test updating props -->
    <p>
      <button
        @click="increment()"
        type="button"
        class="border rounded-md py-2 px-4 font-medium bg-slate-50 hover:bg-slate-100 transition-colors"
      >
        Increment starting count
      </button>
    </p>

    <h3>Isomorphic Slot</h3>
    <p>
      Here, we're using the slot of a regular Nuxt
      component. These two components should work just like
      we'd expect.
    </p>
    <WithSlotIsomorphic
      class="bg-slate-100 py-2 px-3 rounded-md"
    >
      <Isomorphic :starting-count="startingCount" />
      <Paired :starting-count="startingCount" />
      <TestComponent :starting-count="startingCount" />
    </WithSlotIsomorphic>

    <h3>Server Component Slot</h3>
    <p>
      Here, we render the components inside the slot of a
      server component.
    </p>
    <p>
      Currently, there seems to be an issue with updating
      the props of components that are inside the slot of a
      server component. Remember, server components are
      still experimental and not yet stable.
    </p>
    <p>
      Rendering a server component, however, doesn't seem to
      work at all.
    </p>
    <WithSlot class="bg-slate-100 py-2 px-3 rounded-md">
      <Isomorphic :starting-count="startingCount" />
      <Paired :starting-count="startingCount" />
      <!-- Cannot render a server component in the slot -->
      <!-- <TestComponent :starting-count="startingCount" /> -->
    </WithSlot>

    <h3>Client Component Slot</h3>
    <p>
      This slot is rendered inside of a client-only
      component. Update the props here works correctly.
    </p>

    <WithSlotClient
      class="bg-slate-100 py-2 px-3 rounded-md"
    >
      <Isomorphic :starting-count="startingCount" />
      <Paired :starting-count="startingCount" />
      <TestComponent :starting-count="startingCount" />
    </WithSlotClient>

    <h3>Nesting Server Slots</h3>
    <p>
      Putting a server slot within a server slot creates a
      hydration error but seems to work otherwise (other
      than props not updating):
    </p>
    <p>Uncomment the code to see this sort of working.</p>
    <!-- <NestedSlots class="bg-slate-100 py-2 px-3 rounded-md">
      <Isomorphic :starting-count="startingCount" />
    </NestedSlots> -->

    <!-- Multiple levels of nesting doesn't work.
         Uncommenting this section breaks the page. -->
    <!-- <WithSlot>
      <WithSlot>
        <Isomorphic
          class="bg-slate-100 py-2 px-3 rounded-md"
          :starting-count="startingCount"
        />
        <Paired
          class="bg-slate-100 py-2 px-3 rounded-md"
          :starting-count="startingCount"
        />
      </WithSlot>
    </WithSlot> -->
  </div>
</template>

<script setup>
const startingCount = ref(5);
function increment() {
  startingCount.value += 10;
}
</script>
