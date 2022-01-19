<script lang="ts">
  import { onMount } from "svelte";

  import StatusCode from "./StatusCode.svelte";
  import type {
    StatusCodeApiResponse,
    StatusCode as StatusCodeType,
  } from "./types";

  export let searchText: string;
  let codesList: StatusCodeType[] = [];
  let matchingCodes: StatusCodeType[] = [];
  let componentStatus: "loading" | "failed" | "success" = "loading";
  $: {
    matchingCodes = codesList.filter((statusCode) =>
      searchForCode(searchText, statusCode)
    );
  }

  onMount(async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/for-GET/know-your-http-well/master/json/status-codes.json"
    );
    if (!res.ok) {
      componentStatus = "failed";
    }
    const data = (await res.json()) as StatusCodeApiResponse;

    codesList = data.map((element) => ({
      code: element.code,
      text: element.phrase,
      description: element.description,
      link: new URL(element.spec_href),
    }));
    console.log({ codesList });
    componentStatus = "success";
  });

  function searchForCode(
    searchText: string,
    statusCode: StatusCodeType
  ): boolean {
    return (
      statusCode.code === searchText ||
      statusCode.code.toString().includes(searchText) ||
      statusCode.text.includes(searchText) ||
      statusCode.description.includes(searchText)
    );
  }
</script>

{#if componentStatus === "success"}
  <ul>
    {#each matchingCodes as { code, text, description, link }}
      <li><StatusCode {code} {text} {description} {link} /></li>
    {/each}
  </ul>
{:else if componentStatus === "loading"}
  <p>🙃 Loading...</p>
{:else}
  <p>😵 Error.</p>
{/if}
