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
 .oe-wrapper {
    background-color: #FDF3EA;
    padding: 40px 45px 65px 45px;
  }

  .oe-heading {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 70px;
    line-height: 70px;
    text-align: center;
    margin: 0 100px;
  }

  .oe-em {
    font-family: 'Covered By Your Grace', cursive;
    color: #009387;
    font-size: 60px;
    font-weight: 400;
    line-height: 70px;
  }

  .oe-sections {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 30px;
  }

  .oe-row {
    width: 50%;
  }

  .oe-description {
    font-size: 18px;
    color: #58595D;
    font-family: 'Inter', sans-serif;
  }

  .oe-highlight {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 53px;
    line-height: 60px;
    margin-bottom: 10px;
  }

  .oe-highlight em {
    color: #009387;
    font-style: italic;
  }

  blockquote {
    border: 1px solid #333;
    border-radius: 10px;
    padding: 20px 30px;
    color: #666;
    margin: 0;
    position: relative;
  }

  .oe-quote-mark {
    position: absolute;
    font-size: 80px;
    line-height: 38px;
    color: #FF6D2C;
    top: -3px;
    left: 39px;
    z-index: 2;
    background-color: #FDF3EA;
  }

  blockquote p {
    color: #58595D;
    font-size: 16px;
    font-style: italic;
    line-height: 30px;
  }

  .oe-company {
    margin-top: 0.5rem;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }

  .oe-name {
    color: #A89B90;
    font-size: 14px;
    font-family: fantasy;
  }

  .oe-logo {
    height: 24px;
  }

  .oe-button {
    background-color: #FF6D2C;
    padding: 25px 80px;
    border-radius: 15px;
    border-top: 2px solid black;
    border-left: 2px solid black;
    border-right: 4px solid black;
    border-bottom: 6px solid black;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
    margin-top: 20px;
  }

  .oe-link {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    line-height: 20px;
    font-weight: 700;
  }
  @media (max-width: 768px) {
  .oe-heading, .oe-em {
    font-size: 32px;
    line-height: 40px;
    margin: 0; 
    text-align: left;
  }
  .ic-title{
    font-size: 32px;
    line-height: 40px;
    margin: 0; 
    text-align: left;
  }

  .oe-wrapper {
    padding: 20px; 
  }

  .oe-sections {
    display: block;
    width: 100%;
  }

  .oe-row {
    width: 100%;
  }

  .oe-highlight {
    font-size: 28px;
    line-height: 38px;
  }
  .oe-button{
    font-size: 14px;
    padding: 18px;
    margin: 20px auto;
    display: flex;
  }
}

</style>
