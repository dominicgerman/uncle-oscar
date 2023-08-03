<script lang="ts">
	export let open = false;
</script>

<aside class:open>
	<div class=" w-full flex flex-col items-start">
		<button class="text-white my-8" on:click={() => (open = false)}>← Back</button>
		<label for="search" class="relative w-full flex items-center justify-center">
			<input
				type="search"
				name="search"
				id=""
				placeholder="Search"
				class="peer px-6 rounded-full w-[99%] h-[94%] text-white"
			/>
			<svg
				width="20"
				height="20"
				class="absolute right-6 top-5 peer-focus:hidden"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
					stroke="url(#paint0_linear_1373_87)"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M19.0004 18.9999L14.6504 14.6499"
					stroke="url(#paint1_linear_1373_87)"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_1373_87"
						x1="17"
						y1="-2.42857"
						x2="-5.19851"
						y2="14.6643"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#34D4F7" />
						<stop offset="1" stop-color="#1252F5" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_1373_87"
						x1="19.0004"
						y1="13.7178"
						x2="12.9652"
						y2="18.3649"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#34D4F7" />
						<stop offset="1" stop-color="#1252F5" />
					</linearGradient>
				</defs>
			</svg>
		</label>
	</div>
</aside>

<style>
	aside {
		position: absolute;
		height: 100%;
		width: 100vw;
		top: -100%;
		padding: 0 40px;
		background: linear-gradient(230deg, #242424 0%, #000 100%);
	}

	label {
		background: linear-gradient(218deg, #34d4f7 0%, #1252f5 100%);
		border-radius: 999px;
		height: 60px;
	}

	input {
		background: linear-gradient(230deg, #242424 40%, #161616 100%);
	}

	.open {
		top: 0;
	}
</style>
