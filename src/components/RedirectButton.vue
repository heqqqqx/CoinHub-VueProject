<template>
  <button @click="goToNewsPage">News regarding this ticker</button>
  <button @click="swapCurrency">Swap currency</button>
</template>
  
  <script>
export default {
  props: ["cryptoname"],
  methods: {
    goToNewsPage() {
      if (this.cryptoname.includes("USD")) {
        this.$router.push(
          `/news/specific/${this.cryptoname.replace("USD", "")}`
        );
      } else {
        this.$router.push(
          `/news/specific/${this.cryptoname.replace("EUR", "")}`
        );
      }
    },
    swapCurrency() {
      let newRoute = "";
      if (this.$route.path.includes("USD")) {
        newRoute = `/data/${this.cryptoname.replace("USD", "")}EUR`;
      } else {
        newRoute = `/data/${this.cryptoname.replace("EUR", "")}USD`;
      }
      this.$router.push({ path: newRoute});
    },
  },
};
</script>
  