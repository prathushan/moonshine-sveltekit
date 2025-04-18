<script>
  import { onMount } from 'svelte';
  export let limit = 3; // Default to 3, but can be overridden
  let blogs = [];

  onMount(async () => {
    const res = await fetch('/api/blogs');
    blogs = await res.json();
  });
</script>

<div class="latest-trends-section">
  <h1>Latest trends & <span class="mixed">insights</span></h1>
  <div class="blog-grid">
    {#each blogs.slice(0, limit) as blog} <!-- Use the limit prop here -->
      <a href={`/latest-trends/${blog.slug.current}`} class="blog-card">
        <img src={blog.mainImage.asset.url} alt={blog.title} class="blog-image" />
        <div class="card-content">
          <!-- <h3>{blog.title}</h3> -->
          <p>{blog.shortDescription}</p>
        </div>
      </a>
    {/each}
  </div>
</div>


  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&display=swap');
  
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      
      
    }
  
    .blog-card {
      text-decoration: none;
      margin-bottom: 10%;
    }
  
    .blog-image {
      width: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  
    .latest-trends-section {
      background-color: #E3F8F8;
      padding: 60px 30px;
    }
  
    .latest-trends-section h1 {
      text-align: center;
      font-size: 50px;
      font-family: 'Inter', sans-serif;
      padding: 30px 0;
      color: #2E2F35;
    }
  
   
    .mixed {
      font-family: 'Covered By Your Grace', cursive;
      color:#009387;
      font-weight: 300;
    }
  
    .card-content p {
      font-size: 20px;
      color: #2E2F35;
      margin-bottom: 1rem;
      line-height: 1.5;
      font-family: 'Inter', sans-serif;
      font-weight: bold;
    }
  
    .card-content p a {
      text-decoration: none;
    }
  
    /* Mobile responsiveness */
    @media (max-width: 768px) {
      .blog-grid {
        grid-template-columns: 1fr 1fr;
       
      }
    }
  
    @media (max-width: 480px) {
      .blog-grid {
        grid-template-columns: 1fr;
       

      }
    }
  </style>
  