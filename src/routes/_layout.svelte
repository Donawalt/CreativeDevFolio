<script>
	import Header from '../components/Header.svelte';
	import Footer from "../components/Footer.svelte";
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

<Header/>

<main>
	<slot></slot>
</main>

<Footer/>