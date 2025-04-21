<script>
  import { onMount } from 'svelte';
  import { client } from '$lib/sanityClient';
  import { imageCardsQuery } from '$lib/queries/imageCards';

  let section = null;

  onMount(async () => {
    try {
      section = await client.fetch(imageCardsQuery);
    } catch (err) {
      console.error("Failed to fetch cards:", err);
    }
  });
</script>

{#if section}
  <section class="image-cards">
    <div class="title">
      {#each section.title as block}
        {#if block._type === 'block'}
          {#each block.children as span}
            {#if span.marks && span.marks.includes('em')}
              <em>{span.text}</em>
            {:else}
              {@html span.text}
            {/if}
          {/each}
        {/if}
      {/each}
    </div>

    <div class="cards-container">
      {#each section.cards as card}
        <div class="card" style="background-color: {card.backgroundColor}">
          <img src={card.image.asset.url} alt={card.heading} />
          <h3>{card.heading}</h3>
          <p>{card.text}</p>
        </div>
      {/each}
    </div>
  </section>
{/if}

<style>
  .image-cards{
    margin:40px;
    
  }
  .title {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 80px;
    line-height: 76px;
    text-align: center;
    margin: 15px auto;
  }

  em {
    display: block;
    font-family: "Covered By Your Grace", cursive;
    color: #009387;
    font-size:70px;
    font-weight:400;
    line-height:100px;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .card {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex: 1 1 320px;
    padding: 3rem;
    border-radius: 1rem;
  }
 

  .card img {
   
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  .card h3{
    font-weight:700;
    font-size:28px;
    line-height:36px;
    text-align:center;
  }
  .card p{
    text-align:center;
    font-weight:500;
    font-size:16px;
    line-height:30px;
  }
</style>
