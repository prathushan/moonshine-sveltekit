<script>
  import { onMount } from "svelte";
  import { client } from "$lib/sanityClient";
  import { footerQuery } from "$lib/queries/Footer";

  let footer = null;

  onMount(async () => {
    try {
      footer = await client.fetch(footerQuery);
    } catch (err) {
      console.error("Failed to fetch footer:", err);
    }
  });
</script>

{#if footer}
  <footer class="footer">
    <div class="footer-container">
      <div class="eco-section footer-con">
        <img class="eco-img" src={footer.ecoBadge?.asset?.url} alt="Eco Friendly" />
        <p>{footer.ecoText}</p>
      </div>

      <div class="company-section footer-con">
        <h3>COMPANY</h3>
        <ul class="Footer-link">
          {#each footer.companyLinks as link}
            <li><a href={link.url} target="_blank">{link.label}</a></li>
          {/each}
        </ul>
      </div>

      <div class="contact-section footer-con">
        <h3>CONTACT</h3>
        <p>{footer.contactEmail}</p>
        <p>{footer.contactNote}</p>
      </div>
    </div>
      <div class="bottom-section">
        <img class="bottom-img" src={footer.companyLogo?.asset?.url} alt="Company Logo" />
        <p>{footer.copyright}</p>

        <div class="buttons">
          {#each footer.footerButtons as btn}
            <a
              href={btn.url}
              class={btn.style === "primary" ? "btn-primary" : "btn-secondary"}
            >
              {btn.label}
            </a>
          {/each}
        </div>
      </div>
   
  </footer>
{/if}

<style>
  .footer-container {
    display: grid;
    grid-template-columns: 4fr 4fr 4fr;
    gap: 1rem;
  }

  .footer {
    padding: 2rem;
    background: #f9f9f9;
  }

  .Footer-link {
    display: grid;
    grid-template-columns: 6fr 6fr;
    gap: 20px;
    list-style-type: none;
    padding: 0;
    cursor: pointer;
  }

  .Footer-link,
  .contact-section p,
  .eco-section p,
  .bottom-section p {
    font-family: inter;
    font-weight: 400;
    font-size: 14px;
  }

  .eco-img {
    width: 40%;
  }

  .bottom-img {
    width: 8%;
  }

  .eco-section p {
    margin: 0;
  }

  .btn-primary {
    background: #f96332;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    text-decoration: none;
  }

  .btn-secondary {
    border: 2px solid black;
    padding: 0.5rem 1rem;
    color: black;
    border-radius: 5px;
    text-decoration: none;
    background: white;
  }

  .contact-section h3,
  .company-section h3 {
    font-family: inter;
    font-weight: bold;
    font-size: 12px;
  }

  .bottom-section {
    margin-top: 5%;
    padding-top: 2rem;
    border-top: 1px solid #ccc; 
   
  }


  @media (max-width: 768px) {
    .footer-container {
      grid-template-columns: 1fr;
    }

    .Footer-link {
      grid-template-columns: 1fr;
    }

    .eco-img,
    .bottom-img {
      width: 60%;
    }

    .bottom-section {
      margin-top: 2rem;
      padding-top: 1.5rem;
    }

    .buttons a {
      display: inline-block;
      margin: 0.5rem 0.25rem;
    }

    .footer-con {
      text-align: center;
    }
  }
</style>
