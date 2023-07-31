<script lang="ts">
	export let open = false;
</script>

<aside class="absolute w-[77vw] h-full bg-black" class:open>
	<button class="absolute right-10 top-10" on:click={() => (open = false)}
		><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M0.929763 13.657C0.539239 14.0476 0.539239 14.6807 0.929763 15.0713C1.32029 15.4618 1.95345 15.4618 2.34398 15.0713L8.00073 9.4145L13.6575 15.0713C14.0481 15.4618 14.6812 15.4618 15.0717 15.0713C15.4623 14.6808 15.4623 14.0476 15.0717 13.6571L9.41495 8.00029L15.0719 2.34334C15.4624 1.95281 15.4624 1.31965 15.0719 0.929124C14.6814 0.538599 14.0482 0.5386 13.6577 0.929124L8.00073 6.58608L2.34383 0.929169C1.9533 0.538645 1.32014 0.538645 0.929612 0.929169C0.539088 1.31969 0.539088 1.95286 0.929612 2.34338L6.58652 8.00029L0.929763 13.657Z"
				fill="#8E8E8E"
			/>
		</svg>
	</button>
	<nav class="px-9 pt-24 text-lg text-white">
		<a class="flex gap-4 items-center py-2 px-4 rounded-md my-1 bg-[#1E1E1E]" href="#home">
			<svg
				width="19"
				height="18"
				viewBox="0 0 15 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M6.63636 0.136364C6.87879 -0.0454546 7.21212 -0.0454546 7.45455 0.136364L13.8182 4.90909C13.9899 5.03786 14.0909 5.23994 14.0909 5.45455V12.9545C14.0909 13.5052 13.8638 14.0281 13.4682 14.4096C13.0734 14.7903 12.543 15 11.995 15H2.09596C1.54792 15 1.01755 14.7903 0.622736 14.4096C0.227079 14.0281 0 13.5052 0 12.9545V5.45455C0 5.23994 0.101041 5.03786 0.272727 4.90909L6.63636 0.136364ZM1.36364 5.79545V12.9545C1.36364 13.1272 1.43454 13.298 1.56929 13.428C1.70488 13.5587 1.8939 13.6364 2.09596 13.6364H11.995C12.197 13.6364 12.386 13.5587 12.5216 13.428C12.6564 13.298 12.7273 13.1272 12.7273 12.9545V5.79545L7.04546 1.53409L1.36364 5.79545Z"
					fill="url(#paint0_linear_1331_291)"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M4.24414 7.50018C4.24414 7.12362 4.5494 6.81836 4.92596 6.81836H9.16838C9.54494 6.81836 9.8502 7.12362 9.8502 7.50018V14.3184C9.8502 14.6949 9.54494 15.0002 9.16838 15.0002C8.79183 15.0002 8.48657 14.6949 8.48657 14.3184V8.182H5.60778V14.3184C5.60778 14.6949 5.30252 15.0002 4.92596 15.0002C4.5494 15.0002 4.24414 14.6949 4.24414 14.3184V7.50018Z"
					fill="url(#paint1_linear_1331_291)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_1331_291"
						x1="14.0909"
						y1="-3.21429"
						x2="-6.35334"
						y2="11.5737"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#34D4F7" />
						<stop offset="1" stop-color="#1252F5" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_1331_291"
						x1="9.8502"
						y1="5.06511"
						x2="0.158523"
						y2="10.1784"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#34D4F7" />
						<stop offset="1" stop-color="#1252F5" />
					</linearGradient>
				</defs>
			</svg> <span> Home </span>
		</a>
		<a class="flex gap-4 items-center py-2 px-4 rounded-md my-1" href="#watchlist">
			<svg
				width="19"
				height="15"
				viewBox="0 0 19 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M4.70508 0.84678C4.70508 0.379116 5.08419 0 5.55186 0H17.7831C18.2508 0 18.6299 0.379116 18.6299 0.84678C18.6299 1.31444 18.2508 1.69356 17.7831 1.69356H5.55186C5.08419 1.69356 4.70508 1.31444 4.70508 0.84678Z"
					fill="url(#paint0_linear_1331_294)"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M4.70508 7.49973C4.70508 7.03207 5.08419 6.65295 5.55186 6.65295H17.7831C18.2508 6.65295 18.6299 7.03207 18.6299 7.49973C18.6299 7.9674 18.2508 8.34651 17.7831 8.34651H5.55186C5.08419 8.34651 4.70508 7.9674 4.70508 7.49973Z"
					fill="url(#paint1_linear_1331_294)"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M4.70508 14.1532C4.70508 13.6855 5.08419 13.3064 5.55186 13.3064H17.7831C18.2508 13.3064 18.6299 13.6855 18.6299 14.1532C18.6299 14.6208 18.2508 15 17.7831 15H5.55186C5.08419 15 4.70508 14.6208 4.70508 14.1532Z"
					fill="url(#paint2_linear_1331_294)"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0 0.84678C0 0.379116 0.379116 0 0.84678 0H0.856189C1.32385 0 1.70297 0.379116 1.70297 0.84678C1.70297 1.31444 1.32385 1.69356 0.856189 1.69356H0.84678C0.379116 1.69356 0 1.31444 0 0.84678Z"
					fill="url(#paint3_linear_1331_294)"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0 7.49973C0 7.03207 0.379116 6.65295 0.84678 6.65295H0.856189C1.32385 6.65295 1.70297 7.03207 1.70297 7.49973C1.70297 7.9674 1.32385 8.34651 0.856189 8.34651H0.84678C0.379116 8.34651 0 7.9674 0 7.49973Z"
					fill="url(#paint4_linear_1331_294)"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0 14.1532C0 13.6855 0.379116 13.3064 0.84678 13.3064H0.856189C1.32385 13.3064 1.70297 13.6855 1.70297 14.1532C1.70297 14.6208 1.32385 15 0.856189 15H0.84678C0.379116 15 0 14.6208 0 14.1532Z"
					fill="url(#paint5_linear_1331_294)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_1331_294"
						x1="18.6299"
						y1="-0.362906"
						x2="17.8808"
						y2="4.37952"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#34D4F7" />
						<stop offset="1" stop-color="#1252F5" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_1331_294"
						x1="18.6299"
						y1="6.29005"
						x2="17.8808"
						y2="11.0325"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#34D4F7" />
						<stop offset="1" stop-color="#1252F5" />
					</linearGradient>
					<linearGradient
						id="paint2_linear_1331_294"
						x1="18.6299"
						y1="12.9435"
						x2="17.8808"
						y2="17.6859"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#34D4F7" />
						<stop offset="1" stop-color="#1252F5" />
					</linearGradient>
					<linearGradient
						id="paint3_linear_1331_294"
						x1="1.70297"
						y1="-0.362906"
						x2="-0.649983"
						y2="1.45893"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#34D4F7" />
						<stop offset="1" stop-color="#1252F5" />
					</linearGradient>
					<linearGradient
						id="paint4_linear_1331_294"
						x1="1.70297"
						y1="6.29005"
						x2="-0.649983"
						y2="8.11189"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#34D4F7" />
						<stop offset="1" stop-color="#1252F5" />
					</linearGradient>
					<linearGradient
						id="paint5_linear_1331_294"
						x1="1.70297"
						y1="12.9435"
						x2="-0.649983"
						y2="14.7653"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#34D4F7" />
						<stop offset="1" stop-color="#1252F5" />
					</linearGradient>
				</defs>
			</svg>
			<span> Watchlist </span>
		</a>
		<a class="flex gap-4 items-center py-2 px-4 rounded-md my-1" href="#about"
			><svg
				width="19"
				height="16"
				viewBox="0 0 15 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M2.81265 11.2002C4.12125 10.447 5.70117 10.0502 7.30854 10.0502C8.91591 10.0502 10.4958 10.447 11.8044 11.2002C13.1126 11.9531 14.1072 13.0403 14.568 14.3304C14.7236 14.766 14.4967 15.2453 14.0612 15.4009C13.6257 15.5565 13.1465 15.3296 12.9909 14.894C12.6884 14.0471 12.0009 13.2459 10.9691 12.652C9.93771 12.0584 8.65061 11.7252 7.30854 11.7252C5.96647 11.7252 4.67937 12.0584 3.64803 12.652C2.61619 13.2459 1.92873 14.0471 1.62621 14.894C1.47061 15.3296 0.991415 15.5565 0.555893 15.4009C0.120371 15.2453 -0.106553 14.766 0.0490441 14.3304C0.509892 13.0403 1.50453 11.9531 2.81265 11.2002Z"
					fill="url(#paint0_linear_1331_597)"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M7.30809 1.67504C5.92064 1.67504 4.79589 2.79995 4.79589 4.18759C4.79589 5.57524 5.92064 6.70015 7.30809 6.70015C8.69553 6.70015 9.82028 5.57524 9.82028 4.18759C9.82028 2.79995 8.69553 1.67504 7.30809 1.67504ZM3.12109 4.18759C3.12109 1.87485 4.99567 0 7.30809 0C9.6205 0 11.4951 1.87485 11.4951 4.18759C11.4951 6.50033 9.6205 8.37518 7.30809 8.37518C4.99567 8.37518 3.12109 6.50033 3.12109 4.18759Z"
					fill="url(#paint1_linear_1331_597)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_1331_597"
						x1="14.6171"
						y1="8.89307"
						x2="8.57291"
						y2="21.4914"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#34D4F7" />
						<stop offset="1" stop-color="#1252F5" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_1331_597"
						x1="11.4951"
						y1="-1.79468"
						x2="-0.124281"
						y2="7.15094"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#34D4F7" />
						<stop offset="1" stop-color="#1252F5" />
					</linearGradient>
				</defs>
			</svg>
			<span>About</span></a
		>
		<button class="btn" aria-label="Log Out" />
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		left: 0;
	}

	.btn {
		width: 220px;
		height: 60px;
		border: 0;
		position: relative;
		top: 50%;
		left: 50%;
		background-color: #000;
	}

	.btn:after {
		content: attr(aria-label);
		background: linear-gradient(212deg, #34d4f7 0%, #1252f5 100%);
		width: 220px;
		height: 60px;
		line-height: 60px;
		border: 0;
		position: absolute;
		font-size: 18px;
		font-weight: 500;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0) scaleX(1) scaleY(1);

		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
