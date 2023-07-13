<script>
    export let data;
  
    $: ({ discussion } = data);
    console.log(discussion);
  </script>
  

  <h1 class="text-3xl my-3 text-emerald-700">{discussion.title}</h1>
  <div>
    {@html discussion.bodyHTML}
    <pre>{JSON.stringify(discussion)}</pre>
  </div>