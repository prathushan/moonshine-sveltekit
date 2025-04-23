<script>
  import { onMount } from 'svelte';
  import { client } from '$lib/sanityClient';
  import { oddEvenQuery } from '$lib/queries/OddEven';
  import '../app.css'

  let section = null;

  onMount(async () => {
    try {
      section = await client.fetch(oddEvenQuery);
    } catch (err) {
      console.error("Failed to fetch oddEven section:", err);
    }
  });
</script>

{#if section}
  <section class="oe-wrapper">
    <!-- Main Heading -->
    <div class="oe-heading">
     
      {#each section.mainHeading as block}
        {#if block._type === 'block'}
          {#each block.children as span}
            {#if span.marks && span.marks.includes('em')}
              <em class="oe-em">{span.text}</em>
            {:else}
              <span class="oe-span">{span.text}</span>
            {/if}
          {/each}
        {/if}
      {/each}
    
    </div>

    <!-- Content Sections -->
    <div class="oe-sections">
      {#each section.sections as sec (sec._key)}
        <div class="oe-row">
          <div class="oe-content">
            {#if sec.highlight}
              <h3 class="oe-highlight">
                {#each sec.highlight as block}
                  {#if block._type === 'block'}
                    {#each block.children as span}
                      {#if span.marks && span.marks.includes('em')}
                        <em>{span.text}</em>
                      {:else}
                        <span>{span.text}</span>
                      {/if}
                    {/each}
                  {/if}
                {/each}
              </h3>
            {/if}

            {#if sec.description}
              <p class="oe-description">{sec.description}</p>
            {/if}

            {#if sec.testimonial}
              <blockquote>
                <span class="oe-quote-mark">“</span>
                <p>{sec.testimonial.quote}</p>
                <div class="oe-company">
                  <span class="oe-name">{sec.testimonial.name}</span>
                  {#if sec.testimonial.companyLogo?.asset?.url}
                    <img
                      src={sec.testimonial.companyLogo.asset.url}
                      alt="Company Logo"
                      class="oe-logo"
                      loading="lazy" 
                    />
                  {/if}
                </div>
              </blockquote>
            {/if}
          </div>
        </div>
      {/each}
    </div>

    <!-- Button -->
    {#if section.buttonText && section.buttonLink}
      <button class="oe-button">
        <a href={`/${section.buttonLink.current}`} class="oe-link">
          {section.buttonText}
        </a>
      </button>
    {/if}
  </section>
{/if}

<style>
 
</style>
