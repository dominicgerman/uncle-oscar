<script lang="ts">
	import '../app.css';
</script>

<div class="p-10 md:p-20 lg:p-28">
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
