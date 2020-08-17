<script context="module">
  import { onMount } from "svelte";
  import PrismicDOM from "prismic-dom";
  import { Client, linkResolver } from "../../../prismic-config.js";

  let document = null;

  export async function preload({ params, query }) {
    const uid = params.uid;
    document = await Client.getByUID("portfolio_post", uid);

    if (document) {
      const title = PrismicDOM.RichText.asText(
        document.data.title_of_the_project
      );
      return { document, title };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let document;
  export let title;
</script>

<style>
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="project">
  <section class="project-header">
	<h1>{title}</h1>
  </section>
  <section class="project-content">
    <div>
      <p class="project-introduction">
        {PrismicDOM.RichText.asText(document.data.introduction)}
      </p>
      <p class="types">
	  	{PrismicDOM.RichText.asText(document.data.types_of_project)}
	  </p>
    </div>
  </section>
</div>
