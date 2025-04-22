<script>
  import { onMount } from 'svelte';
  import "../app.css";
  export let limit = 3; // Default to 3, but can be overridden
  let blogs = [];

  onMount(async () => {
    const res = await fetch('/api/blogs');
    blogs = await res.json();
  });
</script>

<div class="lt-section">
  <h1 class="lt-title">Latest trends & <span class="lt-highlight">insights</span></h1>
  <div class="lt-grid">
    {#each blogs.slice(0, limit) as blog}
      <a href={`/latest-trends/${blog.slug.current}`} class="lt-card">
        <img src={blog.mainImage.asset.url} alt={blog.title} class="lt-image" />
        <div class="lt-content">
          <p>{blog.shortDescription}</p>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&display=swap');

  
</style>
