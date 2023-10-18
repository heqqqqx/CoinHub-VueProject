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
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  setup() {
    const { user } = useAuth0();
    return { user };
  },
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
  margin-top: 60px; 
}


footer {
  width: 100%;
}
</style>
