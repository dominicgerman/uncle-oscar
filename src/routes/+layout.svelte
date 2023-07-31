<script lang="ts">
	import '../app.css';
	import MenuBar from '$lib/components/MenuBar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';

	export let sidebarOpen = false;
	export let searchbarOpen = false;
</script>

<div>
	<Sidebar bind:open={sidebarOpen} />
	<MenuBar bind:sidebar={sidebarOpen} bind:searchbar={searchbarOpen} />
	<SearchBar bind:open={searchbarOpen} />
	<slot />
</div>

<style>
	div {
		background: linear-gradient(230deg, #242424 0%, #000 100%);
		height: 100vh;
		width: 100vw;
		font-family: 'Poppins', sans-serif;
	}
</style>
