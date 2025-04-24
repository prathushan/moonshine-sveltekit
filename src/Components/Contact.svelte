<script lang="ts">
  import { onMount } from 'svelte';
  import ContactForm from './Contact-from.svelte';  
  // import SkeltonCard from './SkeltonCard.svelte';
  import Breadcrumbs from './Breadcrumbs.svelte';
  import FaqAccordion from './FaqAccordion.svelte';

  let contactData: any = null;

  onMount(async () => {
    try {
      const response = await fetch('/api/contact');
      const data = await response.json();
        contactData = data;
    } catch (err) {
      console.error('Failed to fetch contact data:', err);
    }
  });
</script>

{#if contactData}
<div class="full-con">
  <Breadcrumbs/>
  <div class="main">

     

    <!-- Bio Section -->

    <div class="bio">
      <!-- <Breadcrumbs /> -->
      <!-- <h1>{contactData.title}</h1>
      <p class="description">{contactData.description}</p> -->

     <FaqAccordion />
    </div>
    <!-- Contact Form Section -->
    <div class="contact">
      <ContactForm />
      <div class="info-blk">
        {#if contactData.address}
        <div class="info-block">
          <img src={contactData.address.icon.asset.url} alt="Address Icon" />
          <div>
            <h3>Address</h3>
            <p>{contactData.address.addressDetails}</p>
          </div>
        </div>
      {/if}

      {#if contactData.phone}
        <div class="info-block">
          <img src={contactData.phone.icon.asset.url} alt="Phone Icon" />
          <div>
            <h3>Phone</h3>
            <a class="ph-dec" href={`tel:${contactData.phone.phoneDetails}`}>
              {contactData.phone.phoneDetails}
            </a>
          </div>
        </div>
      {/if}

      {#if contactData.email}
        <div class="info-block">
          <img src={contactData.email.icon.asset.url} alt="Email Icon" />
          <div>
            <h3>Email</h3>
            <a class="mail-dec" href={"mailto:" + contactData.email.emailDetails}>
              {contactData.email.emailDetails}
            </a>
          </div>
        </div>
      {/if}
      </div>
    </div>

   
  </div>
  </div>
{:else}
  <p>Loading...</p>
{/if}

<style>
  .full-con{
    background: linear-gradient(115deg, #FDF3EA 50%,#e8f8f9 50% );
    padding:10px;
  }

  .main {
    display:grid;
    grid-template-columns: 55%  45%;

    height: 80vh;
    
    font-family: 'Inter', sans-serif;
    padding: 3rem;
  }

  .bio{
    max-width:100%;
    /* margin:0 auto; */
    width:75%;
   
   
  }

 .contact {
    max-width: 450px;
    margin-top: 5vh;
    width:400px;
    /* color: #EEEEEE; */
    margin:0 auto;
  }
.info-blk{
  display:flex;
  flex-direction: column;
  margin-top:10%;
}
  /* .bio h1 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: #fff;
  }

  .description {
    line-height: 1.8em;
    margin-bottom: 1.5rem;
  } */

  .info-block {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }

  .info-block img {
    width: 32px;
    height: 32px;
    margin-top: 4px;
  }

  .info-block h3 {
    font-size: 1rem;
    margin: 0 0 0.25rem 0;
    /* color: #CA8D6E; */
  }

  .info-block p {
    margin: 0;
    font-size: 0.95rem;
    /* color: #EEEEEE; */
  }

  /* .bio-link {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1rem;
    display: block;
    text-decoration: none;
    color: #EEEEEE;
    margin-bottom: 0.25em;
  } */

  .ph-dec, .mail-dec {
    color: #000;
    text-decoration: none;
  }

  .contact {
    margin-top: 5vh;
  }

  @media (max-width: 768px) {
    .main {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .bio, .contact {
      max-width: 90%;
    }

    .info-block {
      justify-content: center;
    }
  }
</style>
