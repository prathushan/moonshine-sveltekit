<script>
    export let data;
  </script>
  
  <section class="section1">
    <div class="left">
      <h2>{data?.title}</h2>
      <h3>{data?.subTitle}</h3>
      <p>{data?.description}</p>
    </div>
    <div class="right">
      {#if data.videoType === 'youtube'}
        <iframe
          width="100%"
          height="315"
          src={data?.youtubeUrl}
          frameborder="0"
          allowfullscreen
        ></iframe>
      {:else if data.videoType === 'upload'}
        <video width="100%" controls>
          <source src={data?.uploadedVideo?.asset?.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      {/if}
    </div>
  </section>
  
  <style>
    .section1 {
      display: flex;
      gap: 2rem;
      padding: 2rem;
    }
    .left {
      flex: 1;
    }
    .right {
      flex: 1;
    }
  </style>