<script lang="ts">
	import type { PageData } from './$types';
	import Slider from '$lib/components/Slider.svelte';
	export let data: PageData;
</script>

<main class="flex flex-col gap-10">
	<h1>2023 Oscars</h1>
	<Slider category="Best Actor" data={data.best_actor} />
	<Slider category="Best Picture" data={data.best_picture} />
</main>

<style>
	h1,
	h2 {
		color: #fff;
		text-align: center;
		font-family: Poppins;
		font-size: 24px;
		font-style: normal;
		font-weight: 275;
		line-height: normal;
	}
</style>
