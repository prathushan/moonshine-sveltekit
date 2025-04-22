<script>
  export let sectionData;

  // Optional: You can adjust positions here
   const moonPositions = [
    { top: '12%', left: '6%' },      // white moon
    { bottom: '18%', right: '9%' },  // grey moon
    { top: '55%', left: '75%' },     // green moon
    { bottom: '5%', left: '8%' }     // black moon (new position)
  ];
</script>

<section class="about-section">
  <div class="content-wrapper">
    <div class="text-content">
      <h2>{sectionData?.title}</h2>
      <div class="subtitle">
        <span class="highlight">{sectionData?.subTitle}</span>
        <span> as an affirmation that we always accompanied by customers and communities.</span>
      </div>
      <p>{sectionData?.description}</p>
    </div>

    {#if sectionData?.image1?.asset?.url && sectionData?.image2?.asset?.url}
      <div class="image-content">
        <div class="image-row">
          <div class="image-container">
            <span class="corner-deco"></span>
            <img class="image" src={sectionData.image1.asset.url} alt="Main Image" />
          </div>

          <div class="image-container"> 
            <img class="image" src={sectionData.image2.asset.url} alt="Overlay Image" />
            <span class="corner-deco1"></span>
          </div>
        </div>
      </div>
    {/if}
  </div>

  <!-- Decorative moons -->
  <img class="moon-deco" src="/moon-white.png" alt="White Moon" style="top: {moonPositions[0].top}; left: {moonPositions[0].left};" />
<img class="moon-deco" src="/moon-grey.png" alt="Grey Moon" style="bottom: {moonPositions[1].bottom}; right: {moonPositions[1].right};" />
<img class="moon-deco" src="/moon-green.png" alt="Green Moon" style="top: {moonPositions[2].top}; left: {moonPositions[2].left};" />
<img class="moon-deco" src="/moon-black.png" alt="Black Moon" style="bottom: {moonPositions[3].bottom}; left: {moonPositions[3].left};" />
   
</section>


<style>
  .about-section {
    background: linear-gradient(to right, #e8f8f9 0%, #d4f1f2 50%, #ffffff 100%);
    padding: 4rem 2rem;
 
    display: flex;
    justify-content: center;
  }



  
  .moon-deco {
  position: absolute;
  width: 60px;
  height: 60px;
 
  pointer-events: none;
  z-index: 0;
}

.about-section {
  position: relative; /* Required for absolute positioning inside */
  background: linear-gradient(to right, #e8f8f9 0%, #d4f1f2 50%, #ffffff 100%);
  padding: 4rem 2rem;
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
    font-size: 60px;
    font-weight: 500;
    color: #0b2447;
    margin-bottom: 1rem;
    font-family:inter;
  }

  .subtitle {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: #1a1a1a;
    font-family:inter;
  }

  .highlight {
    color: #00b386;
    font-weight: 700;
     font-size: 18px;
  }

  p {
    font-size: 18px;
    color: #000;
    line-height: 1.8;
    max-width: 600px;
    font-family:inter;
  }

  .image-content {
    flex: 1;
    display: flex;
    justify-content: center;
    min-width: 300px;
  }

  .image-row {
    display: flex;
    gap: 20px;
  }

  .image-container {
    position: relative;
  }

  .image {
    width: 300px;
    height: 400px;
    object-fit: cover;
    border-radius:5px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  .corner-deco {
    position: absolute;
    top: -12px;
    left: -12px;
    width: 24px;
    height: 24px;
    border-top: 4px solid #00b386;
    border-left: 4px solid #00b386;
    border-radius: 5px;
    z-index: 3;
  }
.corner-deco1 {
  position: absolute;
  bottom: -12px;
  right: -12px;
  width: 24px;
  height: 24px;
  border-bottom: 4px solid #00b386;
  border-right: 4px solid #00b386;
  border-radius: 5px;
  z-index: 3;
}
  @media (max-width: 768px) {
    .content-wrapper {
      flex-direction: column;
      text-align: center;
    }

    .image-row {
      flex-direction: column;
      gap: 20px;
    }

    .image {
      width: 100%;
      height: auto;
    }

    .corner-deco {
      top: -6px;
      left: -6px;
      width: 16px;
      height: 16px;
    }
  }
</style>
