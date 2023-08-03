<script lang="ts">
	import Hamburger from './Hamburger.svelte';
	import Search from './SearchButton.svelte';

	export let sidebar = false;
	export let searchbar = false;
</script>

<header class="p-10 flex justify-between">
	<Hamburger bind:open={sidebar} />
	<Search bind:open={searchbar} />
</header>
