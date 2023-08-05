<script lang="ts">
	import Card from './Card.svelte';

	export let category: string;
	export let data: any;
</script>

<div>
	<h2>{category}</h2>
	<ul>
		<div class="empty-boi" />
		<Card imagePath={data[0].imagePath} title={data[0].title} />
		<Card imagePath={data[1].imagePath} title={data[1].title} />
		<Card imagePath={data[2].imagePath} title={data[2].title} />
		<Card imagePath={data[3].imagePath} title={data[3].title} />
		<Card imagePath={data[4].imagePath} title={data[4].title} />
		<Card />
	</ul>
</div>

<style>
	.empty-boi {
		flex: 1 0 28px;
	}
	h2 {
		color: white;
		font-size: 18px;
		padding-left: 40px;
	}
	ul {
		display: flex;
		gap: 12px;
		padding-top: 12px;

		overflow-x: auto;
		overflow-y: hidden;
		scroll-behavior: smooth;
		scroll-snap-type: x mandatory;
	}
	ul::-webkit-scrollbar {
		display: none;
	}
</style>
