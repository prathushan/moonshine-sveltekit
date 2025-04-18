<script lang="ts">
import { onMount, onDestroy, tick } from 'svelte';
import { browser } from '$app/environment'; // Import browser check

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

  // Scroll and fetch only in browser
  if (browser) {
    onMount(async () => {
      const res = await fetch('/api/testimonials');
      testimonials = await res.json();
      duplicatedTestimonials = [...testimonials, ...testimonials];
      await tick(); // wait for DOM
      matchCardHeights(); // ensure heights match
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

    // Optional: match height of all cards
    function matchCardHeights() {
      const cards = document.querySelectorAll('.testimonial-card');
      let maxHeight = 0;
      cards.forEach((card) => {
        (card as HTMLElement).style.height = 'auto'; // Reset height
        maxHeight = Math.max(maxHeight, (card as HTMLElement).offsetHeight);
      });
      cards.forEach((card) => {
        (card as HTMLElement).style.height = `${maxHeight}px`;
      });
    }
  }
</script>

<section class="testimonial-section">
  <h2>PostPilot is 🔥 for <span class="dtc">DTC</span></h2>

  <div class="carousel">
    <div class="slider-window">
      <div bind:this={track} class="slider-track">
        {#each duplicatedTestimonials as testimonial}
          <div class="testimonial-card">
            <div class="user">
              <img class="avatar" src={testimonial.image.asset.url} alt={testimonial.name} />
              <div class="info">
                <h3>{testimonial.name}</h3>
                <p class="twitter-handle">{testimonial.twitterHandle}</p>
              </div>
            </div>
            <p class="comment">"{testimonial.comment}"</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .testimonial-section {
    padding: 60px 10px;
    text-align: center;
  }

  .dtc {
    color: #0C9A8B;
    font-family: 'Covered By Your Grace', cursive;
  }

  .carousel {
    display: flex;
    justify-content: center;
    max-width: 100%;
    overflow: hidden;
  }

  .slider-window {
    width: 100%;
    overflow: hidden;
    max-width: 1300px;
  }

  .slider-track {
    display: flex;
    transition: none;
    will-change: transform;
  }

  .testimonial-card {
    flex: 0 0 25%;
    border: 1px solid #000000;
    border-radius: 16px;
    padding: 1.5rem;
    background: #fff;
    text-align: left;
    margin: 0 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    height: auto; /* Let height grow naturally */
  }

  .user {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  .info h3 {
    margin: 0;
    font-size: 1rem;
  }

  .twitter-handle {
    font-size: 0.85rem;
    color: #555;
    margin: 0;
  }

  .comment {
    font-size: 1rem;
    line-height: 1.5;
    color: #333;
  }

  @media (max-width: 768px) {
    .testimonial-card {
      flex: 0 0 100%;
      margin: 0;
    }
  }
</style>
