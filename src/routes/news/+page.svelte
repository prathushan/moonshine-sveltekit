<script>
  export let data;
</script>

<h1>Ecommerce News</h1>

<div class="grid">
  {#each data.articles as article}
    <div class="card">
      <img src={article.image} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.description.slice(0, 100)}...</p>
      <a href={`/news/${article.slug}`}>Read more</a>
    </div>
  {/each}
</div>

<!-- Pagination -->
{#if data.totalPages > 1}
  <div class="pagination">
    {#each Array(data.totalPages) as _, i}
      <a href={`?page=${i + 1}`} class:selected={i + 1 === data.currentPage}>
        {i + 1}
      </a>
    {/each}
  </div>
{/if}

<style>
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .grid {
    margin: 0 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 1.5rem;
  }

  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    background: white;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
  }

  .card img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 0.5rem;
  }

  .card h2 {
    font-size: 1rem;
    margin: 0.5rem 0;
  }

  .card p {
    flex-grow: 1;
    font-size: 0.9rem;
    color: #555;
  }

  .card a {
    margin-top: 0.5rem;
    color: #0070f3;
    font-weight: 500;
    text-decoration: none;
  }

  .pagination {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }

  .pagination a {
    padding: 0.5rem 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    text-decoration: none;
    color: #333;
  }

  .pagination a.selected {
    background-color: #0070f3;
    color: white;
    font-weight: bold;
  }
</style>
