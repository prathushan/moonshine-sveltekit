<script>
    export let data;
    const { blog } = data;
  </script>
  
  <article class="blog-post">
    <h1>{blog.title}</h1>
    <p class="date">{new Date(blog.publishedAt).toLocaleDateString()}</p>
    <img src={blog.mainImage.asset.url} alt={blog.title} class="main-image" />
    <p class="short-desc">{blog.shortDescription}</p>
  
    <div class="content">
      {#each blog.content as block}
        {#if block._type === 'block'}
          <p>{block.children.map(child => child.text).join('')}</p>
        {/if}
      {/each}
    </div>
  </article>
  
  <style>
    .blog-post {
      max-width: 700px;
      margin: auto;
      padding: 2rem;
    }
  
    .main-image {
      width: 100%;
      margin: 1rem 0;
      border-radius: 8px;
    }
  
    .date {
      color: #888;
      font-size: 0.9rem;
    }
  
    .short-desc {
      font-weight: bold;
      margin-bottom: 1rem;
    }
  
    .content p {
      margin-bottom: 1rem;
      line-height: 1.6;
    }
  </style>
  