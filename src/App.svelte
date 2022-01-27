<script lang="ts">
  import debounce from "just-debounce-it";
  import StatusCodeResults from "./lib/StatusCodeResults.svelte";
  let searchCode = "302";

  // why doesn't InputEvent work with svelte's types?
  function handleInput(event: Event) {
    if (event.target instanceof HTMLInputElement) {
      searchCode = event.target.value.trim();
    } else {
      console.error(
        `Event target has no 'value'. Was the handler attached to a non-input element?`
      );
    }
  }
  function handleSubmit(event: SubmitEvent) {
    if (event.target instanceof HTMLFormElement) {
      const input = event.target.querySelector("input");
      searchCode = input.value.trim();
      input.blur();
    } else {
      console.error(
        `Event target has no 'value'. Was the handler attached to a non-form element?`
      );
    }
  }
  const debouncedHandleInput = debounce(handleInput, 125, true);
</script>

<main>
  <h1>HTTP Status Codes</h1>
  <form role="search" on:submit|preventDefault={handleSubmit} action="">
    <label for="http-search">Search for HTTP codes & descriptions </label>
    <div class="inline-group">
      <input
        id="http-search"
        type="search"
        on:input={debouncedHandleInput}
        value={searchCode}
      />
      <button type="submit">🔍</button>
    </div>
  </form>

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
  .inline-group {
    display: flex;
    gap: 7px;
  }
</style>
