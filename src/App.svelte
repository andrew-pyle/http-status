<script lang="ts">
  import debounce from "just-debounce-it";
  import Search from "./lib/Search.svelte";
  import StatusCodeResults from "./lib/StatusCodeResults.svelte";
  let searchCode = "302";

  function handleInput(event: SubmitEvent | InputEvent) {
    // console.log({ event }); // Debug
    if (event.target instanceof HTMLInputElement) {
      searchCode = event.target.value;
    } else if (event.target instanceof HTMLFormElement) {
      const input = event.target.querySelector("input");
      searchCode = input.value;
      input.blur();
    } else {
      console.error(
        `Event target has no 'value'. Was the handler attached to a non-input element?`
      );
    }
  }
  const debouncedHandleInput = debounce(handleInput, 125, true);
</script>

<main>
  <h1>HTTP Status Codes</h1>
  <Search
    on:input={debouncedHandleInput}
    on:submit={handleInput}
    value={searchCode}
  />
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
