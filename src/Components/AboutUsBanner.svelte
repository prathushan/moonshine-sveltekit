<script>
  import Breadcrumbs from "./Breadcrumbs.svelte";

  export let bannerData;

  const moonPositions = [
    { top: '10%', left: '5%' },       // White Moon
    { top: '20%', right: '8%' },      // Grey Moon
    { bottom: '15%', left: '10%' },   // Green Moon
    { bottom: '5%', right: '5%' }     // Black Moon
  ];
</script>

<section class="about-banner">
  <Breadcrumbs/>
  <!-- Top Section: Heading + Description -->
  <div class="text-section">
    <h1>{bannerData?.heading}</h1>
    <p>{bannerData?.description}</p>
  </div>

  <!-- Image Section -->
  <div
    class="image-section"
    style="background-image: url({bannerData?.bannerImage?.asset?.url});"
  ></div>

  <!-- Decorative Moons -->
  <img class="moon-deco" src="/moon-white.png" loading="lazy" alt="White Moon" style="top: {moonPositions[0].top}; left: {moonPositions[0].left};" />
  <img class="moon-deco" src="/moon-grey.png"  loading="lazy" alt="Grey Moon" style="top: {moonPositions[1].top}; right: {moonPositions[1].right};" />
  <img class="moon-deco" src="/moon-green.png"  loading="lazy" alt="Green Moon" style="bottom: {moonPositions[2].bottom}; left: {moonPositions[2].left};" />
  <img class="moon-deco" src="/moon-black.png" loading="lazy"  alt="Black Moon" style="bottom: {moonPositions[3].bottom}; right: {moonPositions[3].right};" />
</section>

<style>

.moon-deco {
  position: absolute;
  width: 60px;
  height: 60px;
  pointer-events: none;
  z-index: 1;
}
  .about-banner {
     position: relative;
    width: 100%;
    background: linear-gradient(to right, #e8f8f9 0%, #d4f1f2 50%, #ffffff 100%);
    padding:10px;
  }

  .text-section {
    
    padding: 2rem 1rem;
    text-align: left;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* .text-section .subheading {
    color: #00c084;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 1rem;
    border-bottom: 2px solid #00c084;
  } */

  .text-section h1 {
    color: #1d2d3c;
    font-size: 60px;
    font-weight: 500;
    margin-bottom: 1rem;
    font-family:inter;
    
  }

  .text-section p {
    color: #1d2d3c;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    font-family:inter;
  }

  .image-section {
    height: 60vh;
    background-size: cover;
    background-position: center;
    filter: grayscale(100%);
    position: relative;
  }



/* Mobile (max-width: 767px) */
@media screen and (max-width: 767px) {
  
    /* body {
    margin: 0;
    max-width: 100% !important;
   } */
  .text-section h1 {
    font-size: 32px;
    text-align: center;
  }

  .text-section p {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }

  .image-section {
    height: 25vh;
  }

  .moon-deco {
    width: 30px;
    height: 30px;
  }
}

/* Tablet (min-width: 768px and max-width: 1024px) */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .text-section h1 {
    font-size: 40px;
    text-align:left;
  }

  .text-section p {
    font-size: 18px;
    line-height: 28px;
    text-align:left;
  }

  .image-section {
    height: 25vh;
  }

  .moon-deco {
    width: 45px;
    height: 45px;
  }
}




</style>
