<script>
    import { onMount } from 'svelte';
    import { client } from '$lib/sanityClient';
    import { headerQuery } from '$lib/queries/Header';
    import "../app.css";
  
    let header = null;
  
    onMount(async () => {
      try {
        header = await client.fetch(headerQuery);
      } catch (err) {
        console.error("Failed to fetch header:", err);
      }
    });
  </script>
  
  {#if header}
    <header class="header">
      <div class="header-container">
        <a href="/">
        <img src={header.logo.asset.url} alt="Logo" class="logo"  loading="lazy" />
      </a>
        <nav class="nav-menu">
          <ul class="menu">
            {#each header.menuItems as item}
              <li class="menu-item">
                <a href={"/" + item.linkedPage.slug?.current}>{item.label}</a>
  
                {#if item.children}
                  <ul class="submenu">
                    {#each item.children as sub}
                      <li>
                        <a href={"/" + sub.linkedPage.slug?.current}>{sub.label}</a>
                      </li>
                    {/each}
                  </ul>
                {/if}
              </li>
            {/each}
          </ul>
        </nav>
      </div>
    </header>
  {/if}
  
  