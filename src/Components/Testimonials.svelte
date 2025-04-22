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
 
</style>
