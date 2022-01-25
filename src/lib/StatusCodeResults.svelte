<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import StatusCode from "./StatusCode.svelte";
  import type {
    StatusCodeApiResponse,
    StatusCode as StatusCodeType,
    KnowYourHttpWellCode,
  } from "./types";

  export let searchText: string;
  let codesList: StatusCodeType[] = [];
  let matchingCodes: StatusCodeType[] = [];
  let componentStatus: "loading" | "failed" | "success" = "loading";
  $: {
    matchingCodes = searchForCode(searchText, codesList);
  }

  onMount(async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/for-GET/know-your-http-well/master/json/status-codes.json"
    );
    if (!res.ok) {
      componentStatus = "failed";
    }
    const data = (await res.json()) as StatusCodeApiResponse;
    codesList = data.map((element) => processApiResponse(element));
    // console.log({ codesList }); // Debug
    componentStatus = "success";
  });

  function searchForCode(
    searchText: string,
    codesList: StatusCodeType[]
  ): StatusCodeType[] {
    // Short circuit if no input
    if (searchText.length === 0) {
      return [];
    }
    // Return only one result if the input is an exact code
    const directHit = codesList.find(
      (statusCode) => statusCode.code === searchText
    );
    if (directHit) {
      return [directHit];
    }
    // If the search is only numbers, just return autocomplete
    const isNumbersSearch = /\d+/.test(searchText);
    if (isNumbersSearch) {
      return codesList.filter((statusCode) =>
        statusCode.code.startsWith(searchText)
      );
    }
    // Return text search matches in code, text, or description
    return codesList.filter(
      (statusCode) =>
        statusCode.code.includes(searchText) ||
        statusCode.text.includes(searchText) ||
        statusCode.description.includes(searchText)
    );
  }

  /**
   * Remove unwanted content from Know Your HTTP Well Data
   */
  function processApiResponse(element: KnowYourHttpWellCode): StatusCodeType {
    return {
      code: element.code.trim(),
      text: element.phrase.replaceAll("**", "").trim(),
      description: element.description
        .replace(/~?\s?\[[\w\s\d\*_]+\]\s?\([\w:/.?=]+\)/gi, "")
        .trim(),
      specLink: new URL(element.spec_href),
      mdnLink: new URL(getMdnLink(element.code.trim())),
    };
  }

  /**
   * Naive method to get the MDN link for an HTTP status code
   */
  function getMdnLink(code: string): URL {
    const exactCode = /\d\d\d/;
    if (!exactCode.test(code)) {
      return new URL(
        `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status`
      );
    }
    return new URL(
      `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${code}`
    );
  }
</script>

{#if componentStatus === "success"}
  <ul class="status-code-list">
    {#each matchingCodes as { code, text, description, specLink, mdnLink } (code)}
      <li transition:fly|local>
        <StatusCode {code} {text} {description} {specLink} {mdnLink} />
      </li>
    {:else}
      <li>No Results 😵</li>
    {/each}
  </ul>
{:else if componentStatus === "loading"}
  <p>🙃 Loading...</p>
{:else}
  <p>😵 Error.</p>
{/if}

<style>
  .status-code-list {
    list-style-type: none;
    padding: 0;
  }
</style>
