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

<style lang='scss'>
  @use "sass:map";
  @import '../../styles/theme.scss';
  .project_header{
    height: 95vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 6fr 1fr;
    overflow: hidden;
    .project_head{
      display:flex;
      justify-content:center;
      align-items: center;
      flex-direction: column;
    }
    .arianne{
      margin: auto;
      span{
        display: inline-block;
        width: 68px;
        height: 4px;
        background-color: white;
        margin-top: auto;
        margin-bottom: auto;
      }
    }
    h1{
      font-family: 'kate', serif;
      font-size: calc(6rem + 4vw);
      margin:auto;
      line-height: 1.2em;
      text-align: center;
    }
    .project_header_footer{
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      grid-column: 1 / 3;
      p {
        width: 200px;
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
  .project-content{
    section{
      margin-top: 64px;
      h3{
        font-size: 60px;
      }
      .project-introduction-wrapper{
        font-size: 20px;
        line-height: 28px;
        display: flex;
        justify-content: space-between;
        .project-introduction{
          width: 50%;
          margin-top:16px;
        }
        .project-types{
          align-self: flex-end;
          text-transform: uppercase;
          color: map-get($theme-colors, "primary");
        }
      }
    }
  }
</style>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="project">
  <section class="project_header">
  <div class='project_head'>
    <div class='arianne'>
      1
      <span></span>
      2
    </div>
    <h1>{title}</h1>
  </div>
  <div class="project_header_footer">
    <p>{PrismicDOM.RichText.asText(document.data.types_of_project)}</p>
    <p>Scroll</p>
    <p>juillet 2020</p>
  </div>
  </section>
  <section class="project-content">
    <section>
      <h3>Introduction</h3>
      <div class='project-introduction-wrapper'>
        <p class="project-introduction">{PrismicDOM.RichText.asText(document.data.introduction)}<p>
        <p class="project-types">
            {PrismicDOM.RichText.asText(document.data.types_of_project)}
        </p>
      </div>
  </section>
    <section>
      <h3>Visuels</h3>
    </section>
  </section>
</div>
