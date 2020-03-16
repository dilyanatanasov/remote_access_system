<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="copyright">
        © {{year}} made by Dilyan Atanasov for
        <a href="http://www.naval-acad.bg/" target="_blank" rel="noopener">NVNA Nikola Vaptsarov</a>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear()
      }
    }
  };
</script>
<style>
</style>
