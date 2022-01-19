<script lang="ts">
  export let code: string;
  export let text: string;
  export let description: string;
  export let link: URL;
</script>

<a class="title-item" href={link.toString()}>
  <span class="code badge">{code}</span>
  {text}
</a>
<p class="list-item">{description}</p>

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
    margin-top: 0.3em;
  }
</style>
