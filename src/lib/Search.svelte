<script lang="ts">
  export let value = "";
</script>

<div>
  <label for="http-search">Search for HTTP codes & descriptions </label>
  <input id="http-search" type="numeric" bind:value />
</div>

<style>
  label {
    display: block;
    font-size: 1rem;
    margin-bottom: 10px;
  }
  input {
    display: block;
    width: 100%;
  }
</style>
