<script>
  import { onMount } from "svelte";
  import { client } from "$lib/sanityClient";
  import { footerQuery } from "$lib/queries/Footer";
  import { getNewsletterHeadingQuery } from '$lib/queries/newsletterSettings';
  import FooterNewsletter from './NewsletterForm.svelte';
  import "../app.css";

  let footer = null;

  onMount(async () => {
    try {
      footer = await client.fetch(footerQuery);
    } catch (err) {
      console.error("Failed to fetch footer:", err);
    }
  });

  let heading = 'Newsletter';

  onMount(async () => {
    try {
      const res = await client.fetch(getNewsletterHeadingQuery);
      heading = res?.heading || heading;
    } catch (err) {
      console.error('Failed to fetch newsletter heading:', err);
    }
  });
</script>

{#if footer}
  <footer class="ft-root">
    <div class="ft-container">
      <div class="ft-eco ft-col">
        <img class="ft-eco-img" src={footer.ecoBadge?.asset?.url} alt="Eco Friendly" />
        <p>{footer.ecoText}</p>
      </div >

      <div class="ft-company ft-col">
        <h3>COMPANY</h3>
        <ul class="ft-links">
          {#each footer.companyLinks as link}
            <li><a href={link.url} target="_blank">{link.label}</a></li>
          {/each}
        </ul>
      </div>

      <div class="ft-contact ft-col">
        <div>
          <h3>CONTACT</h3>
          <p>{footer.contactEmail}</p>
          <p>{footer.contactNote}</p>
        </div>
        <div>
          <FooterNewsletter {heading} />
        </div>
      </div>
    </div>

    <div class="ft-bottom">
      <p class="ft-copy">{footer.copyright}</p>
      <div class="ft-buttons">
        {#each footer.footerButtons as btn}
          <a
            href={btn.url}
            class={btn.style === "primary" ? "ft-btn-primary" : "ft-btn-secondary"}
          >
            {btn.label}
          </a>
        {/each}
      </div>
    </div>
  </footer>
{/if}

<style>
  
</style>
