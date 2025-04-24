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
  @media(max-width:480px){
    .full-con{
    background: linear-gradient(-180deg, #FDF3EA 50%,#e8f8f9 50% );
    padding:10px;
  }
  .bio{
   height:50%;
   
   
  }
  .contact {
   height:50%;
  }
  }
  @media(min-width:750px){
  .full-con{
    background: linear-gradient(115deg, #FDF3EA 50%,#e8f8f9 50% );
    padding:10px;
  }

  .main {
    display:grid;
    grid-template-columns: 55%  45%;
    height: 80vh;
    padding: 3rem;
  }

  .bio{
    max-width:100%;
    width:75%;
   
   
  }

 .contact {
    max-width: 450px;
    margin-top: 5vh;
    width:400px;
    margin:0 auto;
  }
.info-blk{
  display:flex;
  flex-direction: column;
  margin-top:10%;
}

  .info-block {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }
  .contact {
    margin-top: 5vh;
  }
  }
  .main {  
    font-family: 'Inter', sans-serif;
  }
  .info-block img {
    width: 32px;
    height: 32px;
    margin-top: 4px;
  }

  .info-block h3 {
    font-size: 1rem;
    margin: 0 0 0.25rem 0;
  }

  .info-block p {
    margin: 0;
    font-size: 0.95rem;
  }

  .ph-dec, .mail-dec {
    color: #000;
    text-decoration: none;
  }



  @media (max-width: 768px) {
    .main {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

.contact {
      max-width: 90%;
    }

    .info-block {
      justify-content: center;
    }
  }
</style>
