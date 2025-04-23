<!-- <script>
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
  </style> -->
  
  <script>
  import Breadcrumbs from "../../../Components/Breadcrumbs.svelte";

    export let data;
    const article = data.article;
  </script>
  
  <article class="news-article">
    <Breadcrumbs/>
    <div class="full-con">
    <h1>{article.title}</h1>
    <p class="date"><em>{new Date(article.date).toLocaleString()}</em></p>
  
    {#if article.image}
      <img src={article.image} alt={article.title} class="featured-image" />
    {/if}
  
    <div class="content">
      {#if article.content && article.content.length > article.description.length}
        <p>{article.content}</p>
      {:else}
        <p>{article.description}</p>
      {/if}
    </div>
  
    <p class="external-link">
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read the full article
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          class="arrow-icon"
        >
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg>
      </a>
    </p>
  </div>
  </article>

  <style>
  .news-article {

    background-color: #e8f8f9; 
background-image: 
  radial-gradient(circle, #e8f8f9 2px, transparent 2px),  
  radial-gradient(circle, #E0C3FC 2px, transparent 2px);  
background-size: 10px 10px;  
background-position: 0px 0px, 5px 5px; 
padding:10px;

  }
  .full-con{
    max-width: 800px;
    margin: 1rem auto;
    padding: 2rem;
    /* background: linear-gradient(135deg, rgba(232, 248, 249, 0.6), rgba(255, 255, 255, 0.3)); */
    /* backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); */
    /* border-radius: 1rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05); */
    color: #222;
    font-family: 'Inter', sans-serif;
    line-height: 1.6;


  }

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .date {
    font-size: 0.9rem;
    /* color: #777; */
    margin-bottom: 1rem;
  }

  .featured-image {
    max-width: 100%;
    border-radius: 0.5rem;
    margin: 1.5rem 0;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  .content p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  .external-link {
    margin-top: 2rem;
  }

  .external-link a {
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    color: #0077b6;
    text-decoration: none;
    transition: all 0.3s ease;
    gap: 0.4rem;
  }

  .external-link a:hover .arrow-icon {
    transform: rotate(20deg);
  }

  .arrow-icon {
    transition: transform 0.3s ease;
    transform-origin: center;
  }
</style>

  
  