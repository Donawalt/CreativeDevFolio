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
@use "sass:map";
@import '../styles/theme.scss';
  .home_header{
    height: 95vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 6fr 1fr;
    overflow: hidden;
    .home_header_footer{
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      grid-column: 1 / 3;
      p {
        width: 800px;
        font-size: 18px;
        &:nth-child(2){
          text-align: center;
        }
        &:nth-child(3){
          text-align: right;
        }
      }
    }
  }
  .home_projects{
    h2 {
      font-size: 100px;
      width: 100%;
      text-align: center;
      margin: 50px;
      margin-left: 0px;
      margin-right: 0px;
    }
    .projectsWrapper{
      border-top: 2px solid white;
      &:hover{
        border-top: 2px solid map-get($theme-colors, "primary");
        li{border-bottom: 2px solid map-get($theme-colors, "primary");}
        .project-link{
          color: map-get($theme-colors, "primary");
          transition: 300ms;
        }
      }
      li{
        border-bottom: 2px solid white;
        padding-top: 32px;
        padding-bottom: 32px;
        list-style: none;
        position: relative;
        .thumbnail-image{
          transition: 400ms;
          opacity:0;
          height: 440px;
          width: 272px;
          border: 24px solid map-get($theme-colors, "secondary");
          background-color: black;
          transition: 300ms;
          position: absolute;
          transform: translateY(-20%);
          top: 32px;
          right: 64px;
          border-image: none;
        }
        &:hover{
          .thumbnail-image{
            opacity:1;
            transform: translateY(-50%) rotate(16deg);
            transition: 300ms;
            pointer-events: none;
          }
          .project-link{
            opacity:0;
            transition: 300ms;
            width: 100%;
          }
          .marquee {
            .marquee__inner{
              opacity: 1;
              animation-play-state: running;
            }
          }
        }
        .marquee {
          text-decoration: none;
          font-family: 'kate', serif;
          font-size: calc(2rem + 4vw);
          pointer-events: none;
        }
        .project-link{
          text-decoration: none;
          font-family: 'kate', serif;
          font-size: calc(2rem + 4vw);
        }
      }
    }
  }
  h1{
    font-family: 'kate', serif;
    font-size: calc(6rem + 4vw);
    margin:auto;
    line-height: 1.2em;
  }

  .marquee {
    position: absolute;
    top:0;
    left: 0;
    overflow: hidden;
    width: 100%;
    --offset: 20vw;
    --move-initial: calc(-25% + var(--offset));
    --move-final: calc(-50% + var(--offset));
}

.marquee__inner {
    width: max-content;
    display: flex;
    position: relative;
    margin-top: 32px;
    transform: translate3d(var(--move-initial), 0, 0);
    animation: marquee 5s linear infinite;
    animation-play-state: paused;
    opacity: 0;
    transition: opacity 0.1s;
}

.marquee span {
    font-size: calc(2rem + 4vw);
    font-style: italic;
    padding: 0 2vw;
}

.marquee:hover .marquee__inner {
    animation-play-state: running;
}

@keyframes marquee {
    0% {
        transform: translate3d(var(--move-initial), 0, 0);
    }

    100% {
        transform: translate3d(var(--move-final), 0, 0);
    }
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
        <li class='project-item'>
          <a rel="prefetch" href={linkResolver(post)} class='project-link'>
            {PrismicDOM.RichText.asText(post.data.title_of_the_project)}
          </a>
          <div class='marquee'>
            <div class='marquee__inner' aria-hidden='true'>
              <span>{PrismicDOM.RichText.asText(post.data.title_of_the_project)}</span>
              <span>{PrismicDOM.RichText.asText(post.data.title_of_the_project)}</span>
              <span>{PrismicDOM.RichText.asText(post.data.title_of_the_project)}</span>
              <span>{PrismicDOM.RichText.asText(post.data.title_of_the_project)}</span>
            </div>
          </div>
          <img src='{post.data.thumbnail.url}' alt='{post.data.thumbnail.alt}' class='thumbnail-image follow-cursor'/>
        </li>
      {/each}
    </div>
  </section>
</div>
