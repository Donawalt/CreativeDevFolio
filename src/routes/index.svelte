<script context="module">
  import { onMount } from "svelte";
  import Prismic from "prismic-javascript";
  import PrismicDOM from "prismic-dom";
  import { Client, linkResolver } from "../../prismic-config.js";

  let homepage = null;
  let posts = null;
  let selectedPosts = null;

  export async function preload({ params, query }) {
    homepage = await Client.getSingle("home");

    const postResponse = await Client.query(
      Prismic.Predicates.at("document.type", "portfolio_post"),
      { orderings: "[my.portfolio_post.publication_date desc]" }
    );
    posts = postResponse.results;
    selectedPosts = posts.slice(0, 2);

    if (homepage && posts && selectedPosts) {
      return { homepage, posts, selectedPosts };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let homepage;
  // export let posts;
  export let selectedPosts;
</script>

<style lang="scss">
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div class="home">
  <section class="home_header">
    <h1>{PrismicDOM.RichText.asText(homepage.data.main_title)}</h1>
    <div />
    <div>
      <p>Creative Folio</p>
      <p>Scroll Down</p>
      <p>2019-2020</p>
    </div>
  </section>
  <section class="home_projects">
    <h2>Last case</h2>
    <div>
      {#each selectedPosts as post}
        <li>
          <a rel="prefetch" href={linkResolver(post)}>
            {PrismicDOM.RichText.asText(post.data.title_of_the_project)}
          </a>
        </li>
      {/each}
    </div>
  </section>
</div>
