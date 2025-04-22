<script>
  export let bannerData;
</script>

<section class="about-banner">
  <!-- Top Section: Heading + Description -->
  <div class="text-section">
    <span class="subheading">About us</span>
    <h1>{bannerData?.heading}</h1>
    <p>{bannerData?.description}</p>
  </div>

  <!-- Image Section -->
  <div
    class="image-section"
    style="background-image: url({bannerData?.bannerImage?.asset?.url});"
  ></div>
</section>

<style>
  .about-banner {
    width: 100%;
    background: linear-gradient(to right, #e8f8f9 0%, #d4f1f2 50%, #ffffff 100%);
  }

  .text-section {
    
    padding: 2rem 1rem;
    text-align: left;
    max-width: 1200px;
    margin: 0 auto;
  }

  .text-section .subheading {
    color: #00c084;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 1rem;
    border-bottom: 2px solid #00c084;
  }

  .text-section h1 {
    color: #1d2d3c;
    font-size: 60px;
    font-weight: 500;
    margin-bottom: 1rem;
    font-family:inter;
  }

  .text-section p {
    color: #1d2d3c;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    font-family:inter;
  }

  .image-section {
    height: 60vh;
    background-size: cover;
    background-position: center;
    filter: grayscale(100%);
    position: relative;
  }
</style>
