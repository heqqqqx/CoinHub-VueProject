<template>
  <div v-if="user">
    <trading-view :key="this.$route.fullPath" :cryptoname="this.$route.params.cryptoname" /> <!--pour may, là on rajoute une clé unique sinon le refresh a pas lieu-->
    <div class="center-container">
      <div class="redirect-button-position">
        <RedirectButton :cryptoname="this.$route.params.cryptoname" />
      </div>
      <Analysis :symbol="`BINANCE:${$route.params.cryptoname}`" />
    </div>
  </div>
  <div v-else class="not-logged-in-message">
    <h1>You are not logged in</h1>
    <p>Please log in to view this page and access the full website.</p>
  </div>
</template>


<script>
import TradingView from '../components/TradingVue.vue';
import Analysis from '../components/AnalysisComponent.vue';
import RedirectButton from '../components/RedirectButton.vue';
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  setup() {
    const { user } = useAuth0();
    return { user };
  },
  
  components: { TradingView, Analysis, RedirectButton }
}
</script>
<style scoped>
.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  margin: 0 auto;
}


@media (max-width: 1550px) {
    .redirect-button-position {
        top: 20px;  
        bottom: auto;
        right: 50%;
        transform: translateX(-50%);
    }
}
     
</style>