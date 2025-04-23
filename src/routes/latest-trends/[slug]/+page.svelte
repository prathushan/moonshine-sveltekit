<script>
  import Breadcrumbs from "../../../Components/Breadcrumbs.svelte";

    export let data;
    const { blog } = data;
  </script>
  <div class="full-con">
  <Breadcrumbs/>
  <article class="blog-post">
    <h1>{blog.title}</h1>
    <p class="date">{new Date(blog.publishedAt).toLocaleDateString()}</p>
    <img src={blog.mainImage.asset.url} alt={blog.title} class="main-image" loading="lazy"  />
    <p class="short-desc">{blog.shortDescription}</p>
  
    <div class="content">
      {#each blog.content as block}
        {#if block._type === 'block'}
          <p>{block.children.map(child => child.text).join('')}</p>
        {/if}
      {/each}
    </div>
  </article>
</div>
  <style>
    .full-con{
      background: linear-gradient(to right, #e8f8f9 0%, #d4f1f2 50%, #cef5e6 100%);
      padding:10px 20px;
    }
    .blog-post {
      max-width: 700px;
      margin: auto;
      padding: 2rem;
      background-color: #fff;
background-image: 
  radial-gradient(circle, #e8f8f9 3px, transparent 2px);  /* Green Dots */
background-size: 20px 20px;  /* Dot size and spacing */
background-position: 0px 0px, 5px 5px; 
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
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
  