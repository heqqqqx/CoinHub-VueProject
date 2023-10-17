<template>
  <div>
    <trading-view :cryptoname="this.$route.params.cryptoname" />
    <div class="center-container">
      <div class="redirect-button-position">
        <RedirectButton :cryptoname="this.$route.params.cryptoname" />
    </div>
      <Analysis :symbol="`BINANCE:${$route.params.cryptoname}`" />
  </div>
  
  </div>
  
</template>

<script>
import TradingView from '../components/TradingVue.vue';
import Analysis from '../components/Analysis.vue';
import RedirectButton from '../components/RedirectButton.vue';

export default {
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


/* Gère les écrans de 600px ou moins */
@media (max-width: 1550px) {
    .redirect-button-position {
        top: 20px;  
        bottom: auto;
        right: 50%;
        transform: translateX(-50%);
    }
}
     
</style>