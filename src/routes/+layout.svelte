<!-- +layout.svelte -->
<script>
    import Footer from "../Components/Footer.svelte";
    import Header from "../Components/Header.svelte";
  </script>
  <Header />
  <!-- This slot will contain the main content of your page -->
  <slot />
  
  <!-- Footer is always displayed at the bottom -->
  <Footer />
  