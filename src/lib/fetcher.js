import { github_pat } from "$env/static/private";

const fetcher = async (query, variables, fetch) => {
  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${github_pat}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    console.log('problem in fetcher.js');
    throw error;
  }
};

export default fetcher;