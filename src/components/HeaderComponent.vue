<template>
  <nav class="navbar">
    <div class="container">
      <a class="navbar-brand" href="/">
        <span class="coin">Coin</span>
        <span class="hub">Hub</span>
      </a>

      <a class="movingbar-data"><MovingBar /></a>
      <ul class="navbar-nav">
        <li v-if="!user" class="nav-item">
          <LoginButton />
        </li>
        <li v-if="user" class="nav-item">
          <LogoutButton />
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/beginner" class="nav-link">Beginner</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/data" class="nav-link">Data</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/news" class="nav-link">News</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import MovingBar from "./MovingBar.vue";
import LoginButton from "./LoginButton.vue";
import LogoutButton from "./LogoutButton.vue";
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  name: "HeaderComponent",
  components: {
    LoginButton,
    MovingBar,
    LogoutButton,
  },
  setup() {
    const { user } = useAuth0();
    return { user };
  },
};
</script>

<style scoped>
</style>
