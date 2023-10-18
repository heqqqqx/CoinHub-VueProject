<template>
    <div>
        <li class="nav-item">
  <a class="nav-link nav-link-button" @click="login">Log in</a>
</li>

    </div>
  </template>
  <script>
    import { useAuth0 } from '@auth0/auth0-vue';
  
    export default {
      setup() {
        const { loginWithPopup , user} = useAuth0();
  
        return {
          login: async () => {
            try {
              await loginWithPopup();
            } catch (error) {
              if (error.message !== 'Popup closed') {
                // handle other errors
                console.error(error);
              }
            }
          },
          user
        };
      }
    };
  </script>