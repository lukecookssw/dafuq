export async function load({ params: { slug }, fetch }) {
    //const number = slug.split("-").pop();
  
    try {
      const res = await fetch(`/api/article/${slug}.json`);
      const discussion = await res.json();
      console.log(discussion);
      return {
        discussion,
      };
    } catch (error) {
      console.log('---------ERROR');
      console.log(error);
    }
  }