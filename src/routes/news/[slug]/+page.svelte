<script>
    export let data;
  </script>
  
  <article>
    <h1>{data.article.title}</h1>
  
    {#if data.article.image}
      <img src={data.article.image} alt={data.article.title} />
    {/if}
  
    <div class="content">
      {@html data.article.content}
    </div>
  
    {#if data.article.content === data.article.description}
      <p class="note"><em>This is a preview. Full article is not available on the free API plan.</em></p>
    {/if}
  
    <a href="/news" class="back-link">← Back to News</a>
  </article>
  
  <style>
    article {
      max-width: 800px;
      margin: 2rem auto;
      padding: 2rem;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }
  
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #222;
    }
  
    img {
      width: 100%;
      max-height: 400px;
      object-fit: cover;
      border-radius: 8px;
      margin: 1rem 0;
    }
  
    .content {
      line-height: 1.6;
      color: #444;
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
  
    .note {
      background: #fef3c7;
      padding: 0.75rem 1rem;
      border-left: 4px solid #f59e0b;
      border-radius: 6px;
      font-size: 0.95rem;
      color: #92400e;
    }
  
    .back-link {
      display: inline-block;
      margin-top: 1rem;
      color: #0070f3;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
    }
  
    .back-link:hover {
      color: #004bb4;
    }
  </style>
  