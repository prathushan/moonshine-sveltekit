<script>
    export let data;
  </script>
  
  <article>
    <h1>{data.article.title}</h1>
    {#if data.article.image}
      <img src={data.article.image} alt="Image" style="max-width: 100%;" />
    {/if}
    <div>{@html data.article.content}</div>
  </article>
  