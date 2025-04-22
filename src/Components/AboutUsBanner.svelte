<script>
  export let bannerData;
</script>

<section
  class="banner"
  style="background-image: url({bannerData?.bannerImage?.asset?.url}); background-size: cover; background-position: center;"
>
  <div class="overlay">
    <h1>{bannerData?.heading}</h1>
    <p>{bannerData?.description}</p>
  </div>
</section>

<style>
  .banner {
    height: 60vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 2rem;
  }
</style>
