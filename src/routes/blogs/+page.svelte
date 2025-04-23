<script>
  import { onMount } from 'svelte';
  import Breadcrumbs from '../../Components/Breadcrumbs.svelte';
  let blogs = [];

  onMount(async () => {
    const res = await fetch('/api/blogs');
    blogs = await res.json();
  });

  const formatDate = (date) =>
    new Date(date).toLocaleDateString('en-US', { dateStyle: 'medium' });
</script>

<div class="blog-section">
  <Breadcrumbs/>
  <h1 class="blog-heading">
    {#each 'Latest trends & insights'.split(' ') as word, i}
      {#if word.toLowerCase().includes('insights')}
        <span style="color: #0C9A8B; font-family: 'Covered By Your Grace', cursive;">
          {word}
        </span>
      {:else}
        {word}
      {/if}
      {i !== 'Latest trends & insights'.split(' ').length - 1 ? ' ' : ''}
    {/each}
  </h1>
  

  <!-- Featured Blogs -->
  <div class="featured-grid">
    {#each blogs.slice(0, 3) as blog, i}
      <a href={`/blogs/${blog.slug.current}`} class={`blog-card ${i === 0 ? 'featured-large' : 'featured-small'}`}>
        <div class="blog-image-wrapper">
          <img src={blog.mainImage.asset.url} alt={blog.title} class="blog-image" loading="lazy"  />
          <div class="blog-meta">
            <span class="blog-date">{formatDate(blog.publishedAt)}</span>
          </div>
        </div>
        <div class="blog-title">{blog.title}</div>
        <div class="lt-arrow-btn">
          <span>&#8599;</span>
        </div>
      </a>
      
    {/each}
  </div>

  <!-- Remaining Blogs -->
  {#if blogs.length > 3}
    <div class="blog-grid">
      {#each blogs.slice(3) as blog}
        <a href={`/blogs/${blog.slug.current}`} class="blog-card blog-card-extra">
          <div class="blog-image-wrapper">
            <img src={blog.mainImage.asset.url} alt={blog.title} class="blog-image"  loading="lazy" />
            <div class="blog-meta">
              <span class="blog-date">{formatDate(blog.publishedAt)}</span>
            </div>
          </div>
          <div class="blog-title">{blog.title}</div>
          <div class="lt-arrow-btn2">
            <span>&#8599;</span>
          </div>
        </a>
      {/each}
    </div>
  {/if}
</div>

<style>
  .lt-arrow-btn2 {
    position: absolute;
    bottom: 100px;
    right: 20px;
    background-color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: #333;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
  }

  /* .lt-card:hover .lt-arrow-btn2 {
    transform: scale(1.1);
  } */
  .lt-arrow-btn {
    position: absolute;
    bottom: 80px;
    right: 20px;
    background-color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: #333;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
  }

  .lt-card:hover .lt-arrow-btn {
    transform: scale(1.1);
  }
  .blog-section {
    padding: 10px 30px 60px 30px;
    background-color: #f9f9f9;
    font-family: inter;
   
  }

  .blog-heading {
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    /* margin-bottom: 2.5rem; */
    color: #2e2f35;
  }

  .view-all {
    font-size: 1rem;
    font-weight: normal;
    margin-left: 10px;
    color: #009387;
    text-decoration: none;
  }

  .featured-grid {
    display: grid;
    grid-template-columns: 55% 42%;
    grid-template-rows: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: 3rem;
    height: 75vh;
  }

  .blog-card {
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    text-decoration: none;
    color: #000;
  }

  .featured-large {
    grid-row: span 2;
  }

  .blog-image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
  }

  .featured-large .blog-image-wrapper {
    aspect-ratio: auto;
    height: 100%;
  }

  .blog-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    border-radius: 20px;
  }

  .blog-card:hover .blog-image {
    transform: scale(1.03);
  }

  .blog-meta {
    position: absolute;
    top: 15px;
    left: 15px;
    z-index: 2;
    font-weight: 300;
  }

  .blog-date {
    background-color: white;
    padding: 4px 10px;
    font-size: 0.75rem;
    border-radius: 20px;
    color: #333;
    font-weight: 300;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .blog-title {
    margin-top: 10px;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.4;
    color: #2e2f35;
    padding: 0.5rem;
    font-weight: 300;
    
  }

  .blog-grid {
    display: grid;
    grid-template-columns:4fr 4fr 4fr;
    gap: 1.5rem;
  }

  .blog-card-extra {
   
    border-radius: 20px;
    overflow: hidden;
  }

  @media (max-width: 1024px) {
    .featured-grid {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }

    .featured-large {
      grid-row: auto;
    }

    .featured-small {
      height: auto;
    }
  }
  @media (max-width: 768px) {
   .blog-heading{
      font-size: 34px;
    line-height: 40px; 
    text-align: left;
    }
    .blog-grid{
      display:block;
    }
  }
</style>
