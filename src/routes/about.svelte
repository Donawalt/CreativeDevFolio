<script context="module">
	import { onMount } from 'svelte';
	import PrismicDOM from 'prismic-dom';
	import { Client } from '../../prismic-config.js';

	let document = null;
	
	export async function preload({ params, query }) {
		document = await Client.getSingle('about');

		if (document) {
			return { document };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let document;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<style>
</style>

<div class="about">
	<img alt={document.data.your_profile_picture.alt} src={document.data.your_profile_picture.url}>
	<div class="about-content">
		<p>I am</p>
		<h1>{PrismicDOM.RichText.asText(document.data.nom)}</h1>
		<p>{PrismicDOM.RichText.asText(document.data.description)}</p>
	</div>
</div>
