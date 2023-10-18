<template>
    <div class="nav-item-container">
        <li class="nav-item">
        <a class="nav-link" v-if="user">Hello {{ user.name }}</a></li>
        <li class="nav-item">
            <a class="nav-link nav-link-button" @click="logout">Log out</a>
        </li>
    </div>
</template>

  <script>
    import { useAuth0 } from '@auth0/auth0-vue';
  
    export default {
      setup() {
        const { logout , user} = useAuth0();
  
        return {
          logout: () => {
            logout({ logoutParams: { returnTo: window.location.origin } });
          }, user
        };
      }
    };
  </script>