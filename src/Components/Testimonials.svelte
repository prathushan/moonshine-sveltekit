<script lang="ts">
  import { onMount, onDestroy, tick } from 'svelte';
  import { browser } from '$app/environment';
  import "../app.css";

  interface Testimonial {
    name: string;
    twitterHandle: string;
    image: { asset: { url: string } };
    comment: string;
  }

  let testimonials: Testimonial[] = [];
  let duplicatedTestimonials: Testimonial[] = [];

  let scrollPos = 0;
  let track: HTMLDivElement;
  let animationFrame: number;
  const speed = 0.5;

  if (browser) {
    onMount(async () => {
      const res = await fetch('/api/testimonials');
      testimonials = await res.json();
      duplicatedTestimonials = [...testimonials, ...testimonials];
      await tick();
      matchCardHeights();
      startScroll();
    });

    onDestroy(() => {
      cancelAnimationFrame(animationFrame);
    });

    function startScroll() {
      function animate() {
        scrollPos += speed;
        if (track) {
          const totalScrollWidth = track.scrollWidth / 2;
          if (scrollPos >= totalScrollWidth) {
            scrollPos = 0;
          }
          track.style.transform = `translateX(-${scrollPos}px)`;
        }
        animationFrame = requestAnimationFrame(animate);
      }
      animate();
    }

    function matchCardHeights() {
      const cards = document.querySelectorAll('.ts-card');
      let maxHeight = 0;
      cards.forEach((card) => {
        (card as HTMLElement).style.height = 'auto';
        maxHeight = Math.max(maxHeight, (card as HTMLElement).offsetHeight);
      });
      cards.forEach((card) => {
        (card as HTMLElement).style.height = `${maxHeight}px`;
      });
    }
  }
</script>

<section class="ts-wrapper">
  <h2>Moonshine is 🔥 for <span class="ts-highlight">DTC</span></h2>

  <div class="ts-carousel">
    <div class="ts-window">
      <div bind:this={track} class="ts-track">
        {#each duplicatedTestimonials as testimonial}
          <div class="ts-card">
            <div class="ts-user">
              <img class="ts-avatar" src={testimonial.image.asset.url} alt={testimonial.name} />
              <div class="ts-info">
                <h3>{testimonial.name}</h3>
                <p class="ts-handle">{testimonial.twitterHandle}</p>
              </div>
            </div>
            <p class="ts-comment">"{testimonial.comment}"</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
 .ts-wrapper h2{
    font-family: 'Inter', sans-serif;
    font-size: 63px;
  }
  .ts-wrapper {
    padding: 0px 10px;
    text-align: center;
    padding-bottom: 80px;
  }

  .ts-highlight {
    color: #0C9A8B;
    font-family: 'Covered By Your Grace', cursive;
  }

  .ts-carousel {
    display: flex;
    justify-content: center;
    max-width: 100%;
    overflow: hidden;
  }

  .ts-window {
    width: 100%;
    overflow: hidden;
    max-width: 1300px;
  }

  .ts-track {
    display: flex;
    transition: none;
    will-change: transform;
  }

  .ts-card {
    flex: 0 0 25%;
    border: 1px solid #000000;
    border-radius: 16px;
    padding: 1.5rem;
    background: #fff;
    text-align: left;
    margin: 0 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    height: auto;
  }

  .ts-user {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .ts-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  .ts-info h3 {
    margin: 0;
    font-size: 15px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;

  }

  .ts-handle {
    font-size: 0.85rem;
    color: #555;
    margin: 0;
  }

  .ts-comment {
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    font-family: 'Inter', sans-serif;
  }

  @media (max-width: 768px) {
    .ts-card {
      flex: 0 0 100%;
      margin: 0;
    }
    .ts-wrapper h2{
    font-size: 34px;
    line-height: 40px; 
    text-align: left;
  }
  .ts-wrapper{
    padding: 0 28px;
  }
  .ts-track{
    gap: 10px;
  }
  .ts-window{
    padding: 10px;
  }
  }

</style>
