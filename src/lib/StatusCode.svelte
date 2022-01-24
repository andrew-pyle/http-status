<script lang="ts">
  export let code: string;
  export let text: string;
  export let description: string;
  export let specLink: URL;
  export let mdnLink: URL;
</script>

<a class="title-item" href={mdnLink.toString()}>
  <span class="code badge">{code}</span>
  {text}
</a>
<p class="list-item">{description}</p>
<div class="links-list">
  <span>Links:</span>
  <a href={mdnLink.toString()}>MDN</a>
  <a href={specLink.toString()}>Spec</a>
</div>

<style>
  .title-item {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 20px;
  }
  .code {
    font-weight: 700;
  }
  .badge {
    display: inline-block;
    border: 1px solid inherit;
    background: white;
    color: black;
    border-radius: 13px;
    padding: 0 0.3em;
  }
  .list-item {
    font-weight: 200;
    margin: 0.3em 0;
  }
  .links-list {
    margin-bottom: 1em;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
  }
</style>
