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
