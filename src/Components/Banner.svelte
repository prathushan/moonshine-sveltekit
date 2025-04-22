<script>
    import { onMount } from 'svelte';
    import "../app.css";
    let banner = null;
  
    onMount(async () => {
      const res = await fetch('/api/banner');
      banner = await res.json();
    });
  </script>


{#if banner?.heading}
<section class="hero">
  <div class="hero-text">
    <h1>
      {#each banner.heading.split(' ') as word, i}
        {#if word === 'favorite'}
          <span class="highlight">{word}</span>
        {:else}
          {word}
        {/if}
        {i !== banner.heading.split(' ').length - 1 ? ' ' : ''}
      {/each}
    </h1>

    <p class="description">{banner.description}</p>

    <div class="cta-row">
      {#if banner.buttonText && banner.buttonLink}
        <a class="btn" href={banner.buttonLink} target="_blank" rel="noopener noreferrer">
          {banner.buttonText}
        </a>
      {/if}

      {#if banner.rating !== undefined}
        <div class="rating">
          <span class="stars">
            {'★'.repeat(banner.rating)}{'☆'.repeat(5 - banner.rating)}
          </span>
          <span>{banner.rating}.0 Shopify Rating</span>
        </div>
      {/if}
    </div>
  </div>

  <div class="hero-image">
    {#if banner.images && banner.images[0]?.asset?.url}
      <img  src={banner.images[0].asset.url} alt="" />
    {/if}
  </div>
</section>
{/if}