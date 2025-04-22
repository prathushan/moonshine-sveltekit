<script>
  export let sectionData;
</script>

<section class="section1">
  <h2>{sectionData?.title}</h2>
  <h3>{sectionData?.subTitle}</h3>
  <p>{sectionData?.description}</p>

  {#if sectionData?.videoType === 'youtube'}
    <iframe
      width="100%"
      height="400"
      src={sectionData.youtubeUrl}
      frameborder="0"
      allowfullscreen
    ></iframe>
  {:else if sectionData?.videoType === 'upload'}
    <video controls width="100%">
      <source src={sectionData.uploadedVideo.asset.url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  {/if}
</section>

<style>
  .section1 {
    padding: 2rem;
    background: #f1f1f1;
  }
  h2, h3 {
    margin: 0.5rem 0;
  }
</style>
