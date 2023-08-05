<script lang="ts">
	export let imagePath = '/avatar.jpg';
	export let title = 'Avatar: The Movie';
	export let winner = false;
</script>

<li>
	<a href="/">
		<div class="h-[180px]">
			<img src={imagePath} alt={title + ' movie poster'} />
		</div>
		<span>{title}</span>
		{#if winner}
			<span class="bg-yellow-400">WINNER</span>
		{/if}
	</a>
</li>

<style>
	span {
		color: white;
		font-size: 12px;
		display: inline-block;
		padding-top: 6px;
	}

	li {
		flex: 1 0 140px;
		display: flex;
		scroll-snap-align: center;
	}
	img {
		/* width: 100%; */
		height: 100%;
	}
</style>
