<script lang="ts">
  import { onMount } from 'svelte';
  import { servicesQuery } from '$lib/queries/Services';
  import Breadcrumbs from '../Components/Breadcrumbs.svelte';

  let servicesData: any = null;
  let error = '';

  onMount(async () => {
    try {
      const res = await fetch('/api/services'); 
      const data = await res.json();
      
        servicesData = data;
    } catch (err) {
      console.error(err);
      error = 'Failed to load services.';
    }
  });
</script>

{#if error}
  <p>{error}</p>
{:else if !servicesData}
  <p>Loading...</p>
{:else}
<section class="bg-full">
  <Breadcrumbs/>
  <section class="services-section">
   
    <!-- Main Title -->
    <div class="main-title">
      {#each servicesData.mainTitle as block}
        {#if block._type === 'block'}
          <p>
            {#each block.children as span}
              {#if span.marks && span.marks.includes('em')}
                <em>{span.text}</em>
              {:else if span.marks && span.marks.includes('strong')}
                <strong>{span.text}</strong>
              {:else}
                {span.text}
              {/if}
            {/each}
          </p>
        {/if}
      {/each}
    </div>

    <!-- Secondary Title -->
    <div class="secondary-title">
      {#each servicesData.secondaryTitle as block}
        {#if block._type === 'block'}
          <p>
            {#each block.children as span}
              {#if span.marks && span.marks.includes('em')}
                <em>{span.text}</em>
              {:else if span.marks && span.marks.includes('strong')}
                <strong>{span.text}</strong>
              {:else}
                {span.text}
              {/if}
            {/each}
          </p>
        {/if}
      {/each}
    </div>

    <!-- Cards -->
    <div class="cards">
      {#each servicesData.cards as card}
        <div class="card">
          <!-- Icon as Image -->
          <div class="card-icon">
            <img src={card.image.asset.url} alt={card.title}  loading="lazy" />
          </div>
          <h3>{card.title}</h3>
          {#each card.description as block}
            {#if block._type === 'block'}
              <p>
                {#each block.children as span}
                  {#if span.marks && span.marks.includes('em')}
                    <em>{span.text}</em>
                  {:else if span.marks && span.marks.includes('strong')}
                    <strong>{span.text}</strong>
                  {:else}
                    {span.text}
                  {/if}
                {/each}
              </p>
            {/if}
          {/each}
        </div>
      {/each}
    </div>

    <!-- Button -->
    {#if servicesData.button}
      <a href={servicesData.button.link} class="service-button">
        {servicesData.button.text}
      </a>
    {/if}
  </section>
  </section>
{/if}

<style>









  .bg-full{
  font-family: 'Inter', sans-serif;
  background: linear-gradient(to right, #e8f8f9 0%, #d4f1f2 50%, #cef5e6 100%);
  padding:10px 10px 50px 10px;
   
  }
  .services-section {
    
    padding: 60px;
    max-width: 1300px;
    margin: 0 auto;
    box-sizing: border-box;
  font-family: 'Inter', sans-serif;

background-image: 
  radial-gradient(circle, #e8f8f9 3px, transparent 2px);  /* Green Dots */
background-size: 20px 20px;  /* Dot size and spacing */
background-position: 0px 0px, 5px 5px; 
background-color: #fff;
border-radius:20px;
   
  }

  .main-title, .secondary-title {
    text-align: center;
    margin-bottom: 1rem;
    font-family: 'Inter', sans-serif;
  }

  .main-title {
    font-size: 20px;
    color: #555;
    display: none;
  }

  .secondary-title {
    font-size: 40px;
    font-weight: 700;
    color: #222;
    margin-bottom: 2rem;
  }
  .secondary-title p{
    margin: 0;
  }
  .secondary-title em{
  font-family: 'Covered By Your Grace', cursive;
      color:#009387;
      font-weight: 300;
      font-style: normal;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .card {
    border: 1px solid #009387;
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    text-align: left;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
    
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  }

 
  .card-icon {
    padding: 1.5rem;
    display: flex;
  }

  .card-icon img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }

  .card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem;
    margin-bottom: 0.5rem;
    color: #333;
    font-family: inter;

  }

  .card p {
    margin: 0 1rem 1rem;
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
    font-family: inter;
    font-size: 16px;
  }

  .card em {
    display: block;
    font-style: normal;
    font-family: inter;
    font-size: 14px;
  }

  .card p em::before {
  content: '✔';
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 12px;
  color: white;
  background-color: #009387;
  border: 2px solid #009387;
  border-radius: 50%;
  margin-right: 10px;
}


  .card strong {
    font-weight: bold;
    color: #222;
  }

  .service-button {
    margin: 3rem auto 0;
    display: block;
    background-color: #ff6d2c;
    color: white;
    padding: 1rem 2rem;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1rem;
    transition: background-color 0.2s ease;
    text-align: center;
    max-width: max-content;
    border-top: 2px solid black;
  border-left: 2px solid black;
  border-right: 4px solid black;
  border-bottom: 6px solid black;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  }

  
</style>
