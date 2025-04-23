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

    <div class="hero-image mobile-only">
      {#if banner.images && banner.images[0]?.asset?.url}
        <img src={banner.images[0].asset.url} alt="" />
      {/if}
    </div>

    <div class="cta-row mobile-order">
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

  <div class="hero-image desktop-only">
    {#if banner.images && banner.images[0]?.asset?.url}

      <img  src={banner.images[0].asset.url} alt=""  loading="lazy"  />

    {/if}
  </div>
</section>
{/if}

<style>
 .hero {
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    background: #e8f8f9;

  }

  .hero-text {
    flex: 1;
    max-width: 50%;
  }

  .hero-text h1 {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 82px;
    line-height: 66px;
  }

  .highlight {
    font-family: 'Covered By Your Grace';
    color: #00a5a5;
    font-style: italic;
  }

  .description {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
  }

  .cta-row {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

.btn {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 20px;

  background: #FF6D2C;
  color: white;
  padding: 0.8rem 1.4rem;
  border-radius: 6px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1.2px;

  border-top: 2px solid black;
  border-left: 2px solid black;
  border-right: 4px solid black;
  border-bottom: 6px solid black;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);

  width: 200px;
  height: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn:hover {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.5);
  transform: translateY(-2px);
  transition: all 0.2s ease-in-out;
}


  .rating {
    display: flex;
    align-items: center;
  }

  .stars {
    color: gold;
    margin-right: 0.5rem;
    font-size: 20px;
  }

  .hero-image {
    flex: 1;
    text-align: right;

  }

  .hero-image img {
    max-width: 100%;
    max-height: 500px;
    height:500px;
    border-radius:10px;
  }

  .desktop-only {
    display: block;
  }

  .mobile-only {
    display: none;
  }

  @media (max-width: 768px) {
    .hero {
      flex-direction: column;
    }

    .hero-text {
      max-width: 100%;
    }

    .hero-text h1 {
      font-size: 34px;
      line-height: 40px;
    }

    .cta-row {
      display: grid;
      justify-content: center;
    }

    .desktop-only {
      display: none;
    }

    .mobile-only {
      display: block;
      text-align: center;
      margin: 1.5rem 0;
    }

    .mobile-order {
      order: 3;
    }
    .hero-image img{
      max-height: 250px;
    }
    .hero-text .description{
      font-size: 18px;
    }
    .btn{
    padding: 0.5rem 0rem;
    }
  }
</style>
