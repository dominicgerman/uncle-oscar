<script lang="ts">
	export let open = false;
</script>

<input
	type="search"
	name="search"
	id=""
	placeholder="Search for a movie..."
	class="absolute w-full p-2 bg-slate-300 rounded-md"
	class:open
/>

<style>
	input {
		display: none;
		transition: top 0.3s ease-in-out;
	}

	.open {
		display: block;
	}
</style>
