<script>
    import { onMount } from 'svelte';
    import { client } from '$lib/sanityClient';
    import { oddEvenQuery } from '$lib/queries/oddEven';
  
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
    <section class="odd-even">
      <!-- Main Heading Section -->
      <div class="main-heading">
        {#each section.mainHeading as block}
          {#if block._type === 'block'}
            {#each block.children as span}
              {#if span.marks && span.marks.includes('em')}
                <em class="emphasized">{span.text}</em>
              {:else}
                <span class="normal-text">{span.text}</span>
              {/if}
            {/each}
          {/if}
        {/each}
      </div>
  
      <!-- Sections Section -->
      <div class="sections">
        {#each section.sections as sec, i}
          <div class="section-row {i % 2 === 0 ? 'left' : 'right'}" key={sec._key}>
            <div class="content">
              {#if sec.highlight}
                <h3 class="highlight">
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
                <p class="des">{sec.description}</p>
              {/if}
  
              {#if sec.testimonial}
                <blockquote>
                    <span class="pos-abs-quote">“</span>
                    <p>
                  {sec.testimonial.quote}
                </p>
                  <div class="company-details">
                    <span class="com-name">{sec.testimonial.name}</span>
                    {#if sec.testimonial.companyLogo?.asset?.url}
                      <img
                        src={sec.testimonial.companyLogo.asset.url}
                        alt="Company Logo"
                        class="company-logo"
                      />
                    {/if}
                  </div>
                </blockquote>
              {/if}
            </div>
          </div>
        {/each}
      </div>
      {#if section.buttonText && section.buttonLink}
      <button class="cta-button">
        <a href={`/${section.buttonLink.current}`} class="button-link">
          {section.buttonText}
        </a>
    </button>
    {/if}
    </section>
  {/if}
  

<style>
  .odd-even {
    background-color:#FDF3EA;
    padding: 40px 45px 65px 45px;
    
  }
  .main-heading  {
    font-family: 'Inter';
    font-weight: 550;
    font-size: 70px;
    line-height: 76px;
    text-align: center;
    margin: 0 250px;
  }
  em{
    font-family: 'Covered By Your Grace';
  }

  .main-heading em {
    font-family: 'Covered By Your Grace';
    color: #009387;
    font-size:70px;
    font-weight:400;
    line-height:100px;
  }


  .section-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 4rem;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .section-row.right {
    flex-direction: row-reverse;
  }
 .des{
    font-size:20px;
    color: #58595D;
 }

 .left .content {
    max-width: 500px;
    padding: 1rem;
  }
  .right .content {
    max-width: 700px;
    padding: 1rem;
  }
  .highlight{
    font-family: 'Inter';
    font-weight: 500;
    font-size: 73px;
    line-height: 80px;
    margin-bottom: 10px;
  }

  .highlight em {
    color: #009387;
    font-style: italic;
  }

  blockquote {
    border: 1px solid #333;
    border-radius: 10px;
    padding: 20px 30px;
    color: #666;  
    margin: 0;
    position:relative;
  }
  .pos-abs-quote{
    position: absolute;
    font-size: 80px;
    line-height: 38px;
    color: #FF6D2C;
    top: -3px;
    left: 39px;
    z-index: 2;
    background-color: #FDF3EA;
  }
  blockquote p{
    color:#58595D;
    font-size:16px;
    font-style: italic;
    line-height: 30px;
  }



  .company-details {
    margin-top: 0.5rem;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
   
  }
  .com-name{
    color:#A89B90;
    font-size: 14px;
    font-family:fantasy;
  }

  .company-logo {
    height: 24px;
  }
  .cta-button{
    background-color: #FF6D2C;
    padding:25px 80px;
    border-radius:15px;
    border-top: 2px solid black;
  border-left: 2px solid black;
  border-right: 4px solid black;
  border-bottom: 6px solid black;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
    
  }
  .button-link{
    text-decoration: none;
    color:#fff;
    font-size:18px;
    line-height: 20px;
    font-weight: 700;
  }
</style>
