<script lang="ts">
  import Search from "./lib/Search.svelte";
  import StatusCodeResults from "./lib/StatusCodeResults.svelte";
  let searchCode = "";
</script>

<main>
  <h1>HTTP Status Codes</h1>
  <Search bind:value={searchCode} />
  <StatusCodeResults searchText={searchCode} />

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
</main>
