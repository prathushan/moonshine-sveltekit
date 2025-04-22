<script>
  import { onMount } from 'svelte';
  import AboutUsBanner from '../../Components/AboutUsBanner.svelte';
  import AboutUsSection1 from '../../Components/AboutUsSection1.svelte';

  let bannerData = null;
  let sectionData = null;

  onMount(async () => {
    const [bannerRes, sectionRes] = await Promise.all([
      fetch('/api/aboutus-banner'),
      fetch('/api/aboutus-section1')
    ]);

    bannerData = await bannerRes.json();
    sectionData = await sectionRes.json();
  });
</script>

{#if bannerData}
  <AboutUsBanner {bannerData} />
{/if}

{#if sectionData}
  <AboutUsSection1 {sectionData} />
{/if}
