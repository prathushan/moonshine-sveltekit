<script>
  import { onMount } from 'svelte';
  let news = [];

  onMount(async () => {
    const res = await fetch('/api/news');
    news = await res.json();
  });
</script>

{#each news as item}
<a href={`/news/${item.slug}`}>
  <div>
    <h2>{item.title}</h2>
    <img src={item.image}  style="max-width: 100%;" />
    <p>{item.description}</p>
    
  </div>
  Read more</a>
{/each}
