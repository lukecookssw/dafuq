// import { github_pat } from "$env/static/private";
// // since there's no dynamic data here, we can prerender
// // it so that it gets served as a static asset in production
// export const prerender = true;

// export async function load() {
//     // connect to github api
//     const baseUrl = 'https://api.github.com';
//     // add github PAT to header
//     const headers = {
//         'Authorization': `token ${github_pat}`,
//     };
//     // get discussions from repository
//     const response = await fetch(`${baseUrl}/repos/robbobfrh84/discussions/discussions`, { headers });
//     const discussions = await response.json();
//     // return array of discussions
//     return {
//         discussions: discussions,
//     };
// }