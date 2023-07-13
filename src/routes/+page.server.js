import fetcher from "$lib/fetcher";

const query = `{
  repository(name: "dafuq.content", owner: "lukecookssw") {
    discussions(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
      nodes {
        title
        number
      }
    }
  }
}`;

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
  const res = await fetcher(query, {}, fetch);
  const {
    repository: {
      discussions: { nodes },
    },
  } = res;
  // @ts-ignore
  nodes.map((node) => {
    node.slug = node.number;// slugify(node.title);
  });

  return {
    nodes,
  };
}