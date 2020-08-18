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
  .home_header{
    height: 90vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 6fr 1fr;
    overflow: hidden;
    .home_header_footer{
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      grid-column: 1 / 3;
    }
  }
  .home_projects{
    min-height: 100vh;
    h2 {
      font-size: 100px;
      width: 100%;
      text-align: center;
    }
    .projectsWrapper{
      border-top: 2px solid white;
      li{
        border-bottom: 2px solid white;
        padding-bottom: 32px;
        list-style: none;
        .project-link{
          text-decoration: none;
          font-family: 'kate', serif;
          font-size: calc(3rem + 4vw);
        }
      }
    }
  }
  h1{
    font-family: 'kate', serif;
    font-size: calc(6rem + 4vw);
    margin:auto;
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div class="home">
  <section class="home_header">
    <h1>{PrismicDOM.RichText.asText(homepage.data.main_title)}</h1>
    <div />
    <div class="home_header_footer">
      <p>Creative Folio</p>
      <p>Scroll</p>
      <p>2019-2020</p>
    </div>
  </section>
  <section class="home_projects">
    <h2>Selected<br/> case</h2>
    <div class="projectsWrapper">
      {#each selectedPosts as post}
        <li>
          <a rel="prefetch" href={linkResolver(post)} class='project-link'>
            {PrismicDOM.RichText.asText(post.data.title_of_the_project)}
          </a>
        </li>
      {/each}
    </div>
  </section>
</div>
