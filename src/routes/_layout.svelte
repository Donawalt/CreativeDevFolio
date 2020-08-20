<script>
	import Header from '../components/Header.svelte';
	import Footer from "../components/Footer.svelte";
	import Menu from "../components/Menu.svelte";

	let menuOpen = false;

	function handleMenu(event) {
		menuOpen = event.detail.menuOpen;
		console.log(menuOpen);
	}
	export let segment;
</script>

<style lang="scss" global>
 @import "./styles/global.scss";
 main{
	 max-width: 1460px;
	 margin: auto;
	 margin-top: 0px;
	 margin-bottom: 148px;
	 min-height: 95vh;
 }
</style>

<Header on:menu={handleMenu}/>
{#if menuOpen}
<Menu on:menu={handleMenu} {segment} />
{/if}
<main>
	<slot></slot>
</main>

<Footer/>