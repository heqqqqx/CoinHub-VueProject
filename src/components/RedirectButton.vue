<template>
    <button @click="goToNewsPage">News regarding this ticker</button>
  </template>
  
  <script>
  export default {
    props: ['cryptoname'],
    methods: {
      goToNewsPage() {
        if (this.cryptoname.includes('USDT')) {
          this.$router.push(`/news/specific/${this.cryptoname.replace('USDT', '')}`);
        }
        else {
          this.$router.push(`/news/specific/${this.cryptoname.replace('USD', '')}`);
        }
        
      }
    }
  }
  </script>
  