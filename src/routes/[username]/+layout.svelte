<script lang="ts">
	import MenuBar from '$lib/components/MenuBar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import SearchView from '$lib/components/SearchView.svelte';

	export let sidebarOpen = false;
	export let searchViewOpen = false;
</script>

<div>
	<Sidebar bind:open={sidebarOpen} />
	<MenuBar bind:sidebar={sidebarOpen} bind:searchbar={searchViewOpen} />
	<SearchView bind:open={searchViewOpen} />
	<slot />
</div>
