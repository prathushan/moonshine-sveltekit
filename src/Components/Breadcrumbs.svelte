<script lang="ts">
  import { page } from "$app/stores";
  import { derived } from "svelte/store";

  const labelMap = {
    "about-us": "About Us",
    contact: "Contact",
    service: "Service",
    news: "News",
    blogs: "Blogs",
  };

  const breadcrumbs = derived(page, ($page) => {
    const segments = $page.url.pathname.split("/").filter(Boolean);
    return segments.map((segment, index) => {
      const path = "/" + segments.slice(0, index + 1).join("/");
      const label = labelMap[segment] ?? segment.replace(/-/g, " ");
      return { name: label, path };
    });
  });
</script>

<nav aria-label="Breadcrumb">
  <ul class="breadcrumb">
    <li><a href="/">Home</a></li>
    {#each $breadcrumbs as crumb, i}
      <li>
        <span class="separator">/</span>
        {#if i < $breadcrumbs.length - 1}
          <a href={crumb.path}>{crumb.name}</a>
        {:else}
          <span aria-current="page">{crumb.name}</span>
        {/if}
      </li>
    {/each}
  </ul>
</nav>

<style>
  .breadcrumb {
    font-family: "Inter", serif;
    display: flex;
    list-style: none;
    padding: 0;
    gap: 0.25rem;
    font-size: 0.95rem;
  }

  .breadcrumb li {
    display: flex;
    align-items: center;
  }

  .breadcrumb .separator {
    margin: 0 0.5rem;
    color: #aaa;
  }

  .breadcrumb a {
    color: #009387;
    text-decoration: underline;
  }
  .breadcrumb a::first-letter {
    text-transform: uppercase;
  }

  [aria-current="page"] {
    color: black;
  }
  [aria-current="page"]::first-letter {
    text-transform: uppercase;
  }
</style>
