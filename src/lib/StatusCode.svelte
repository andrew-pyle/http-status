<script lang="ts">
  export let code: string;
  export let text: string;
  export let description: string;
  export let specLink: URL;
  export let mdnLink: URL;
</script>

<p class="title-item">
  <span class="badge">{code}</span>
  <a href={mdnLink.toString()}>{text}</a>
</p>
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
    margin: 0;
  }
  .badge {
    display: inline-block;
    border: 1px solid inherit;
    font-weight: 700;
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
