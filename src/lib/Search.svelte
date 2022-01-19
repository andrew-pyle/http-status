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
  /* Give the elements matching internal straight sides, 
         making one large pill. Stacks into multipls pills
         on small screens */
  .multi-element-pill {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
  .multi-element-pill :first-child {
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
  }
  .multi-element-pill :last-child {
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
  }
  @media screen and (max-width: 750px) {
    /* Remove the matching straight sides, making both pills */
    .multi-element-pill > * {
      border-radius: 100px;
    }
  }
  @media screen and (max-width: 750px) {
    /* When its on own line,
           make input as wide as container for easier typing */
    .multi-element-pill :first-child {
      width: 100%;
      margin-bottom: 0.5em;
    }
  }
</style>
