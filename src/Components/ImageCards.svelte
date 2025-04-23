<script>
  import { onMount } from 'svelte';
  import { client } from '$lib/sanityClient';
  import { imageCardsQuery } from '$lib/queries/imageCards';
  import "../app.css";

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
  <section class="ic-wrapper">
    <div class="ic-title">
      {#each section.title as block}
        {#if block._type === 'block'}
          {#each block.children as span}
            {#if span.marks && span.marks.includes('em')}
              <em class="ic-em">{span.text}</em>
            {:else}
              {@html span.text}
            {/if}
          {/each}
        {/if}
      {/each}
    </div>

    <div class="ic-container">
      {#each section.cards as card}
        <div class="ic-card" style="background-color: {card.backgroundColor}">
          <img src={card.image.asset.url} alt={card.heading} class="ic-img" />
          <h3 class="ic-heading">{card.heading}</h3>
          <p class="ic-text">{card.text}</p>
        </div>
      {/each}
    </div>
  </section>
{/if}

<style>
   .ic-wrapper {
    margin: 40px;
  }

  .ic-title {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 70px;
    line-height: 60px;
    text-align: center;
    margin: 15px auto;
  }

  .ic-em {
    display: block;
    font-family: "Covered By Your Grace", cursive;
    color: #009387;
    font-size: 70px;
    font-weight: 400;
    line-height: 100px;
  }

  .ic-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .ic-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 1 320px;
    padding: 3rem;
    border-radius: 1rem;
  }

  .ic-img {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

  .ic-heading {
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    text-align: center;
    font-family: 'Inter', sans-serif;
  }

  .ic-text {
    font-family: 'Inter', sans-serif;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
  }


   @media (max-width: 768px) {
  .ic-title, .ic-em{
    font-size: 34px;
    line-height: 40px; 
    text-align: left;
  }
  .ic-wrapper{
   margin: 30px;
  }
  .ic-text{
    font-size: 18px;
    line-height: 26px;
  }
  .ic-card{
    padding: 2rem;
  }
}
 </style>
