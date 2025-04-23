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
          <img src={card.image.asset.url} alt={card.heading} class="ic-img"  loading="lazy" />
          <h3 class="ic-heading">{card.heading}</h3>
          <p class="ic-text">{card.text}</p>
        </div>
      {/each}
    </div>
  </section>
{/if}

<style>
 </style>
