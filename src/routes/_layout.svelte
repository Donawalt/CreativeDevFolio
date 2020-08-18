<script>
	import Header from '../components/Header.svelte';
</script>

<style lang="scss" global>
 @import "./styles/global.scss";
 main{
	 max-width: 1460px;
	 margin: auto;
	 margin-top: 0px;
 }
</style>

<Header/>

<main>
	<slot></slot>
</main>