<script lang="ts">
  import Search from "./lib/Search.svelte";
  import StatusCodeResults from "./lib/StatusCodeResults.svelte";
  let searchCode = "";

  // TODO: Debounce search typing. The transition is jarring.
  // Link: https://svelte.dev/repl/32550061c28f49169bc7a6d3a21dedd0?version=3.46.2
</script>

<main>
  <h1>HTTP Status Codes</h1>
  <Search bind:value={searchCode} />
  <StatusCodeResults searchText={searchCode} />
</main>
<footer>
  <p>
    HTTP Information provided by <a
      href="https://github.com/for-GET/know-your-http-well"
      >Know Your HTTP * Well</a
    >
  </p>
</footer>
