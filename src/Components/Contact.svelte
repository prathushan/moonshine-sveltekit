<script lang="ts">
    import { onMount } from 'svelte';
    import ContactFrom from './Contact-from.svelte';  
    let contactData: any = null;
  
    onMount(async () => {
      try {
        const response = await fetch('/api/contact');
        contactData = await response.json();
      } catch (err) {
        console.error('Failed to fetch contact data:', err);
      }
    });
  </script>
  
  {#if contactData}
    <section class="contact-section">
      <h1>{contactData.title}</h1>
      <p class="description">{contactData.description}</p>
  
      <div class="contact-wrapper">
        <!-- Left: Contact Info -->
        <div class="contact-info">
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
                <p>{contactData.phone.phoneDetails}</p>
              </div>
            </div>
          {/if}
  
          {#if contactData.email}
            <div class="info-block">
              <img src={contactData.email.icon.asset.url} alt="Email Icon" />
              <div>
                <h3>Email</h3>
                <p>{contactData.email.emailDetails}</p>
              </div>
            </div>
          {/if}
        </div>
  
        <!-- Right: Contact Form -->
        <div class="contact-form-wrapper">
          <ContactFrom />
        </div>
      </div>
    </section>
  {:else}
    <p>Loading...</p>
  {/if}
  
  <style>
    .contact-section {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      background-color: #E3F8F8;
      font-family: 'Inter', sans-serif;

    }
  
    .contact-section h1 {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      font-family: inter;
    }
  
    .description {
      text-align: center;
      margin-bottom: 2rem;
      color: #666;
      padding: 0 100px;
    }
  
    .contact-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: start;
    }
  
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 5.5rem;
      padding: 40px;
    }
  
    .info-block {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }
  
    .info-block img {
      width: 30px;
      height: 30px;
      flex-shrink: 0;
    }
  
    .info-block h3 {
      margin: 0 0 0.25rem 0;
      font-size: 1.1rem;
    }
  
    .info-block p {
      margin: 0;
      color: #444;
    }
  
    .contact-form-wrapper {
      padding: 2rem;
      border-radius: 12px;
    }
  
    @media (max-width: 768px) {
      .contact-wrapper {
        grid-template-columns: 1fr;
      }
  
      .contact-form-wrapper {
        padding: 1.5rem;
      }
    }
  </style>
  