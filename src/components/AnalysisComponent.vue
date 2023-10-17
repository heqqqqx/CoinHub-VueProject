<template>
    <div class="tradingview-widget-container" ref="container"></div>
  </template>
  
  <script>
  export default {
    props: ['symbol'],
    mounted() {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        interval: "1m",
        width: 425,
        isTransparent: false,
        height: 450,
        symbol: this.symbol,
        showIntervalTabs: true,
        locale: "en",
        colorTheme: "dark"
      });
      this.$refs.container.appendChild(script);
    }
  }
  </script>
  