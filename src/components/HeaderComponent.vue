<template>
  
      
  <nav class="navbar">
    <div class="container">
      <a class="navbar-brand" href="#">CoinHub</a>
      <img src="../assets/coinhub.png" alt="logo" width="50" height="50">
      <a class="movingbar-data" ><MovingBar /></a>
      <ul class="navbar-nav">
        <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
        <li class="nav-item"><router-link to="/data" class="nav-link">Data</router-link></li>
        <li class="nav-item"><router-link to="/news" class="nav-link">News</router-link></li>
      </ul>
    </div>
  </nav>

</template>

<script>
import MovingBar from './MovingBar.vue';
export default {
  name: 'HeaderComponent',
  components: {
    MovingBar
  }
};
</script>

<style scoped>

.movingbar-data {
    width: 70%;
}
.navbar {
  background-color: #333;
  color: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar-nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-item {
  margin-left: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.nav-link:hover {
  background-color: #444;
}
</style>
