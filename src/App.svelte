<script lang="ts">
  import debounce from "just-debounce-it";
  import Search from "./lib/Search.svelte";
  import StatusCodeResults from "./lib/StatusCodeResults.svelte";
  let searchCode = "302";

  const handleInput: svelte.JSX.EventHandler<InputEvent, HTMLInputElement> = (
    event
  ) => {
    if (event.target instanceof HTMLInputElement) {
      searchCode = event.target.value;
    } else {
      console.error(
        `Event target has no 'value'. Was the handler attached to a non-input element?`
      );
    }
  };
  const debouncedHandleInput = debounce(handleInput, 125, true);
</script>

<main>
  <h1>HTTP Status Codes</h1>
  <Search on:input={debouncedHandleInput} value={searchCode} />
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
