<script>
    import { onMount } from 'svelte';
    import { client } from '$lib/sanityClient';
    import { cardsSectionQuery } from '$lib/queries/cardsSection';
  
    let data = null;
  
    onMount(async () => {
      try {
        data = await client.fetch(cardsSectionQuery);
      } catch (err) {
        console.error("Failed to fetch card section:", err);
      }
    });
  </script>
  
  {#if data}
    <section class="brands-section">
      <h2 class="section-title">
    {#each data.sectionTitle.split(" ") as word, i}
      {#if word.toLowerCase().replace(/[^\w]/g, '') === "you"}
        <span class="highlight">{word}</span>
      {:else}
        {word}
      {/if}
      {i !== data.sectionTitle.split(" ").length - 1 ? ' ' : ''}
    {/each}
  </h2>
  
      <div class="cards-container">
        {#each data.cards as card}
          <div class="card">
            <img src={card.cardImage.asset.url} alt={card.cardTitle} class="card-image" />
            <p class="card-title">{card.cardTitle}</p>
          </div>
        {/each}
      </div>
    </section>
  {/if}
  
  <style>
    .brands-section {
      padding: 1rem;
      background-color: #ffffff;
      text-align: center;
    }
  
    .section-title  {
      font-family: 'Inter';
      font-weight: 400;
      font-size: 52px;
      line-height: 66px;
    }
  
    .highlight {
      font-family: 'Covered By Your Grace';
      color: #00b4a8;
     
    }
  
    .cards-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
    }
  
    .card {
      
      display: flex;
      flex-direction: column;
      align-items: center;
      background: none;
      box-shadow: none;
      border-radius: 0;
    }
  
    .card-image {
      width: 100%;
      height: 200px;
      object-fit: contain;
      margin-bottom: 1rem;
    }
  
    .card-title {
      font-size: 24px;
      font-weight: 600;
      color: #000;
      text-align: center;
      font-family: 'Inter';
      font-weight: 400;   
      line-height: 30px;
      margin-top:5px;
    }
  </style>
