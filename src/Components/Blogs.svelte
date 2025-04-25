<script>
  import { onMount } from "svelte";
  import Breadcrumbs from "./Breadcrumbs.svelte";
  export let limit = 3;

  let blogs = [];
  let sectionTitle = "Loading...";

  onMount(async () => {
    try {
      const [blogsRes, settingsRes] = await Promise.all([
        fetch("/api/blogs"),
        fetch("/api/BlogSettings"),
      ]);

      blogs = await blogsRes.json();

      const settingsData = await settingsRes.json();
      sectionTitle = settingsData?.sectionTitle || "Latest trends & insights";
    } catch (err) {
      console.error("Failed to load data:", err);
    }
  });

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", { dateStyle: "medium" });
</script>

<div class="lt-section">
  <h1 class="lt-title">
    {#each sectionTitle.split(" ") as word, i}
      {#if word.toLowerCase().includes("insights")}
        <span
          style="color: #0C9A8B; font-family: 'Covered By Your Grace', cursive;"
        >
          {word}
        </span>
      {:else}
        {word}
      {/if}
      {i !== sectionTitle.split(" ").length - 1 ? " " : ""}
    {/each}
  </h1>

  <div class="lt-asym-grid">
    {#each blogs.slice(0, limit) as blog, i}
      <a
        href={`/blogs/${blog.slug.current}`}
        class={`lt-card ${i === 0 ? "large" : "small"}`}
      >
        <img
          src={blog.mainImage.asset.url}
          alt={blog.title}
          class="lt-image"
          loading="lazy"
        />

        <div class="lt-meta">
          <span class="lt-date">{formatDate(blog.publishedAt)}</span>
        </div>

        <div class="lt-title-bubble">{blog.title}</div>

        <div class="lt-arrow-btn">
          <span>&#8599;</span>
        </div>
      </a>
    {/each}
  </div>

  <a href="/blogs" class="view-all">View all →</a>
</div>

<style>
  .lt-section {
    padding: 60px 30px;
    background-color: #f9f9f9;
  }

  .lt-title {
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 2.5rem;
    color: #2e2f35;
    font-family: inter;
  }

  .view-all {
    display: inline-block;
    margin-top: 1.5rem;
    font-size: 1rem;
    color: #009387;
    text-decoration: none;
    font-weight: 500;
    position: relative;
    left: 0;
    float: right;
  }

  .lt-asym-grid {
    display: grid;
    grid-template-columns: 55% 42%;
    grid-template-rows: repeat(2, 1fr);
    gap: 1.5rem;
    height: 70vh;
  }

  .lt-card {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    display: block;
    text-decoration: none;
    height: 100%;
  }

  .lt-card.large {
    grid-row: span 2;
  }

  .lt-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 4 / 3;
    border-radius: 20px;
    transition: transform 0.3s ease;
  }

  .lt-card:hover .lt-image {
    transform: scale(1.03);
  }

  .lt-meta {
    position: absolute;
    top: 15px;
    left: 15px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    z-index: 2;
  }

  .lt-date,
  .lt-tag {
    background-color: white;
    padding: 4px 10px;
    font-size: 0.75rem;
    border-radius: 20px;
    color: #333;
    font-weight: 300;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .lt-title-bubble {
    position: absolute;
    bottom: 5%;
    left: 3%;
    background-color: white;
    padding: 14px 18px;
    border-radius: 16px;
    font-size: 14px;
    font-weight: 700;
    max-width: 40%;
    line-height: 1.4;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    color: #000000;
    font-family: inter;
    font-weight: 300;
  }

  .lt-arrow-btn {
    position: absolute;
    bottom: 20px;
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

  /* Responsive Design */
  @media (max-width: 1024px) {
    .lt-asym-grid {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }

    .lt-card.large {
      grid-row: auto;
    }

    .lt-card.small {
      height: auto;
    }
  }
  @media (max-width: 768px) {
    .lt-title,
    .blog-heading {
      font-size: 34px;
      line-height: 40px;
      text-align: left;
    }
  }
  @media (max-width: 360px) {
    .lt-title-bubble {
      font-size: 10px;
    }
  }
</style>
