// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;


// /** @type {import('./$types').PageLoad} */
// export async function load() {
//     const baseUrl = 'https://64a114f50079ce56e2dac9d6.mockapi.io/api';
//     const response = await fetch(`${baseUrl}/essays`);
//     const essays = await response.json();
//     return {
//         records: essays,
//     };
    
// }