<script lang="ts">
    import { onMount } from 'svelte';
    import { servicesQuery } from '$lib/queries/Services';
  
    let servicesData: any = null;
    let error = '';
  
    onMount(async () => {
      try {
        const res = await fetch(`/api/sanity?query=${encodeURIComponent(servicesQuery)}`);
        const data = await res.json();
        servicesData = data.result;
      } catch (err) {
        console.error(err);
        error = 'Failed to load services.';
      }
    });
  </script>
  
  {#if error}
    <p>{error}</p>
  {:else if !servicesData}
    <p>Loading...</p>
  {:else}
    <section class="services-section">
      <h1>{@html servicesData.mainTitle}</h1>
      <h2>{@html servicesData.secondaryTitle}</h2>
  
      <div class="cards">
        {#each servicesData.cards as card}
          <div class="card">
            <img src={card.image.asset.url} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{@html card.description}</p>
          </div>
        {/each}
      </div>
  
      {#if servicesData.button}
        <a href={servicesData.button.link} class="service-button">
          {servicesData.button.text}
        </a>
      {/if}
    </section>
  {/if}
  
  <style>
    .services-section {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
  
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }
  
    .card {
      background: #f9f9f9;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
      text-align: center;
    }
  
    .card img {
      width: 100%;
      height: auto;
      max-height: 200px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 1rem;
    }
  
    .service-button {
      margin-top: 2rem;
      display: inline-block;
      background-color: #ff6d2c;
      color: white;
      padding: 1rem 2rem;
      text-decoration: none;
      border-radius: 8px;
      font-weight: bold;
    }
  </style>
  