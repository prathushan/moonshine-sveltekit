<script>
  import { onMount } from "svelte";
  import { client } from "$lib/sanityClient";
  import { footerQuery } from "$lib/queries/Footer";
  import FooterNewsletter from './NewsletterForm.svelte';
  import "../app.css";

  let footer = null;
  let heading = 'Newsletter';

  onMount(async () => {
    try {
      footer = await client.fetch(footerQuery);
    } catch (err) {
      console.error("Failed to fetch footer:", err);
    }

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
        <p class="logo-head">{footer.ecoText}</p>
      </div>

      <div class="ft-main-links">
        <!-- Company Links Section -->
        <div class="ft-company">
          <h3 class="soc-head">Company</h3>
          <ul class="ft-links">
            {#each footer.companyLinks as link}
              <li><a href={link.url} target="_blank">{link.label}</a></li>
            {/each}
          </ul>
        </div>

        <!-- Social Links Section -->
        <div class="ft-social">
          <h3 class="soc-head">Social</h3>
          <div class="social-icons">
            {#each footer.socialLinks as link, i}
              {#if i % 2 === 0}
                <div class="social-row">
                  <a href={link.url} target="_blank" aria-label={link.platform}>
                    <img src={link.icon.asset.url} alt={link.platform} width="50" height="50" loading="lazy" />
                  </a>
                  {#if footer.socialLinks[i + 1]}
                    <a href={footer.socialLinks[i + 1].url} target="_blank" aria-label={footer.socialLinks[i + 1].platform}>
                      <img src={footer.socialLinks[i + 1].icon.asset.url} alt={footer.socialLinks[i + 1].platform} width="50" height="50" loading="lazy" />
                    </a>
                  {/if}
                </div>
              {/if}
            {/each}
          </div>
        </div>
      </div>

      <div class="ft-contact ft-col">
        <div>
          <h3 class="soc-head">Contact</h3>
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
  .logo-head {
    margin-left: 30px;
  }

  .ft-company, .ft-social, .ft-contact {
    margin-top: 30px;
  }

  .ft-root {
    background-color: #f8f8f8;
    padding: 40px 40px;
  }

  .ft-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .ft-col {
    flex: 1;
  }

  .ft-main-links {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 80px;
  }

  .ft-company {
    text-align: center;
  }

  .ft-links {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .ft-links li {
    margin: 5px 0;
  }

  .ft-links a {
    color: #333;
    text-decoration: none;
  }

  .ft-links a:hover {
    color: #ff6600;
  }

  .ft-social {
    margin-left: 20px;
    margin-right: 80px;
  }

  .soc-head {
    margin-top: 12px;
    font-size: 16px;
    font-family: 'Inter';
  }

  .social-icons {
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
  }

  .social-row {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .ft-bottom {
    text-align: center;
    margin-top: 40px;
  }

  .ft-btn-primary,
  .ft-btn-secondary {
    margin: 10px;
    padding: 10px 20px;
    border: none;
    text-decoration: none;
    border-radius: 4px;
  }

  .ft-btn-primary {
    background-color: #ff6600;
    color: white;
  }

  .ft-btn-secondary {
    background-color: transparent;
    color: #ff6600;
    border: 2px solid #ff6600;
  }
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .ft-container {
      flex-direction: column;
      align-items: center;
    }

    .ft-main-links {
      gap: 40px;
      flex-direction: column;
      text-align: center;
    }

    .ft-social {
      margin-left: 0;
      margin-right: 0;
    }

    .social-icons {
      gap: 20px;
    }

    .ft-btn-primary,
    .ft-btn-secondary {
      width: 100%; /* Make buttons take full width on mobile */
      padding: 12px 20px;
    }
  }

  @media (max-width: 480px) {
    .ft-container {
      padding: 20px;
    }

    .ft-main-links {
      gap: 20px;
      display: block;
    }

    .ft-bottom {
      margin-top: 30px;
    }

    .ft-btn-primary,
    .ft-btn-secondary {
      padding: 12px 20px;
    }
    .ft-eco-img{
      width: 100%;
    }
    .logo-head{
      margin-left: 0;
    }
    .ft-links{
      gap: 10px;
      display: grid;
      grid-template-columns: 6fr 6fr;
    }
    .ft-company, .ft-social, .ft-contact{
      margin-top: 0;
    }
    .social-row, .social-icons{
      gap: 10px;
    }
  }
</style>
