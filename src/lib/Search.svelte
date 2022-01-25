<!-- 
  TODO: Implement one-way data binding with Custom Events. 
  Expose a custom search (?) event to prevent the need to know the internal structure
  of the <form> to handle input events and submit events
-->
<script lang="ts">
  export let value = "";
</script>

<form role="search" on:submit|preventDefault action="">
  <label for="http-search">Search for HTTP codes & descriptions </label>
  <div class="inline-group">
    <input id="http-search" type="search" on:input|preventDefault {value} />
    <button type="submit">🔍</button>
  </div>
</form>

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
  input::after {
    content: "dd";
  }
  .inline-group {
    display: flex;
    gap: 10px;
  }
</style>
