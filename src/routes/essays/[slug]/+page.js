export async function load({ params: { slug }, fetch }) {
	const res = await fetch(`/api/article/${slug}.json`);
	const discussion = await res.json();
	return {
		discussion
	};
}
