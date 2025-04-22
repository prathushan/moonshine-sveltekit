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
  }

  .text-section {
    background-color: white;
    padding: 4rem 2rem;
    text-align: left;
    max-width: 900px;
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
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .text-section p {
    color: #1d2d3c;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.5;
  }

  .image-section {
    height: 60vh;
    background-size: cover;
    background-position: center;
    filter: grayscale(100%);
    position: relative;
  }
</style>
