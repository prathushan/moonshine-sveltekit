<script>
    import { onMount } from 'svelte';
    import { client } from '$lib/sanityClient';
    import { cardsSectionQuery } from '$lib/queries/cardsSection';
    import "../app.css";
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
            <img src={card.cardImage.asset.url} alt={card.cardTitle} class="card-image" loading="lazy"  />
            <p class="card-title">{card.cardTitle}</p>
          </div>
        {/each}
      </div>
    </section>
  {/if}
  
 
