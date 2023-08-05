import type { PageLoad } from './$types';

export const load = (async () => {
	const { best_actor, best_picture } = await fetch('http://localhost:5173/data.json').then(
		(response) => response.json()
	);
	// const { title } = await fetch('/data.json').then((res) => res.json());
	// console.log(title);
	return { best_actor, best_picture };
}) satisfies PageLoad;
