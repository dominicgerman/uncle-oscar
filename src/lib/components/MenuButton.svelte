<script lang="ts">
	export let icon: any;
	export let text: String;
</script>

<button>
	{icon}
	<span>{text}</span>
</button>

<style>
	button {
		display: block;
		color: #fff;
		font-family: Poppins;
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
</style>
