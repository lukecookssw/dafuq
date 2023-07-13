import { github_pat } from '$env/static/private';

const fetcher = async (query, variables, fetch) => {
	const res = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			Authorization: `bearer ${github_pat}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ query, variables })
	});
	const { data } = await res.json();
	return data;
};

export default fetcher;