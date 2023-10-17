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
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.content {
  flex-grow: 1;
  margin-top: 60px;  /* Adjust based on your navbar's height */
}

/* Additional style to ensure footer sticks to the bottom */
footer {
  width: 100%;
}
</style>
