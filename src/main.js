import './assets/main.css'

import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue';

import App from './App.vue'
import router from './router'

const app = createApp(App);

app.use(router);
app.use(
    createAuth0({
      domain: "coinhub-vue.eu.auth0.com",
      clientId: process.env.VUE_APP_LOGIN_KEY,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }
  ));

app.mount('#app')
