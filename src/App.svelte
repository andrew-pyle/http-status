<script lang="ts">
  import Search from "./lib/Search.svelte";
  import StatusCodeResults from "./lib/StatusCodeResults.svelte";
  let searchCode = "";
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
