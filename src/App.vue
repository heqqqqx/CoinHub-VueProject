<template>
  <div id="app">
    <Header />
    <div class="content">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/HeaderComponent.vue';
import Footer from './components/FooterComponent.vue';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
