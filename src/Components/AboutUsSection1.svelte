<script>
  export let sectionData;
</script>

<section class="about-section">
  <div class="content-wrapper">
    <div class="text-content">
      <h2>{sectionData?.title}</h2>
      <h3>
        <span class="highlight">{sectionData?.subTitle}</span>
      </h3>
      <p>{sectionData?.description}</p>
    </div>

    {#if sectionData?.image?.asset?.url}
      <div class="image-content">
        <img src={sectionData.image.asset.url} alt="About Us" />
      </div>
    {/if}
  </div>
</section>

<style>
  .about-section {
    padding: 4rem 2rem;
    background: #ffffff;
    display: flex;
    justify-content: center;
  }

  .content-wrapper {
    display: flex;
    max-width: 1200px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    flex-wrap: wrap;
  }

  .text-content {
    flex: 1;
    min-width: 300px;
  }

  h2 {
    font-size: 2rem;
    color: #0b2447;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }

  .highlight {
    color: #00b386; /* Customize the green accent */
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.7;
  }

  .image-content {
    flex: 1;
    display: flex;
    justify-content: center;
    min-width: 300px;
  }

  .image-content img {
    width: 100%;
    max-width: 450px;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .content-wrapper {
      flex-direction: column;
      text-align: center;
    }

    .text-content, .image-content {
      flex: unset;
    }
  }
</style>
