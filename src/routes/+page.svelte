<script lang="ts">
	import HomeButton from '$lib/components/HomeButton.svelte';
</script>

<div class="flex flex-col justify-between px-10 h-full">
	<div class="pt-[10%] mx-auto my-0 max-w-2xl">
		<img
			class="py-5"
			src="/oscar.png"
			alt="silhouetted icon of the oscar trophy"
			height="53px"
			width="19px"
		/>
		<p>
			A popular story has it that upon seeing the trophy for the first time, Academy librarian
			Margaret Herrick remarked that it resembled her <span>Uncle Oscar</span>.
		</p>
	</div>
	<div class="mx-auto pb-10">
		<div class="flex items-center justify-center">
			<a href="/dom" style="background: linear-gradient(218deg, #34D4F7 0%, #1252F5 100%);"
				>Sign Up</a
			>
		</div>
		<div class="flex items-center justify-center">
			<a href="/dom">Login</a>
		</div>
	</div>
</div>

<style>
	p {
		color: #fff;
		font-family: Poppins;
		font-size: 28px;
		font-style: normal;
		font-weight: 275;
		line-height: normal;
	}
	span {
		background: linear-gradient(265deg, #34d4f7 0%, #1252f5 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-family: Poppins;
		font-size: 28px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1 0 310px;
		height: 60px;
		color: #fff;
		text-align: center;
		font-size: 18px;
		font-weight: 500;
		line-height: normal;
	}
</style>
