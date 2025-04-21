<script>
    import { onMount } from 'svelte';
    import { client } from '$lib/sanityClient';
    import { headerQuery } from '$lib/queries/Header';
  
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



        <a href="/" class="logo-link">
        <img src={header.logo.asset.url} alt="Logo" class="logo" />
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
  
  <style>
    .header {
      background: #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      z-index: 10;
      position: relative;
    }
  
    .header-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  
    .logo {
      height: 85px;
    width: 100px;
    }
  
    .menu {
      display: flex;
      gap: 2rem;
      list-style: none;
      padding: 0;
      margin: 0;
    }
  
    .menu-item {
      position: relative;
    }
  
    .menu-item > a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      padding: 0.5rem;
      display: block;
    }
  
    .submenu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      padding: 0.5rem 0;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      list-style: none;
      min-width: 160px;
      z-index: 5;
    }
  
    .submenu li {
      padding: 0;
    }
  
    .submenu a {
      padding: 0.5rem 1rem;
      display: block;
      text-decoration: none;
      color: #333;
      white-space: nowrap;
    }
  
    .submenu a:hover {
      background: #f0f0f0;
    }
  
    .menu-item:hover .submenu {
      display: block;
    }
  </style>
  