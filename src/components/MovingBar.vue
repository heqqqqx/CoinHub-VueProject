<template>
    <div class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget"></div>
      
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbols": [
    {
      "proName": "FX_IDC:EURUSD",
      "title": "EUR to USD"
    },
    {
      "proName": "BITSTAMP:BTCUSD",
      "title": "Bitcoin"
    },
    {
      "proName": "BITSTAMP:ETHUSD",
      "title": "Ethereum"
    },
    {
      "description": "Litecoin",
      "proName": "BINANCE:LTCUSDT"
    },
    {
      "description": "Ripple",
      "proName": "BINANCE:XRPUSDT"
    },
    {
      "description": "Solana",
      "proName": "COINBASE:SOLUSD"
    },
    {
      "description": "Doge",
      "proName": "BINANCE:DOGEUSDT"
    } ],
        showSymbolLogo: true,
        colorTheme: 'dark',
        isTransparent: true,
        displayMode: 'regular',
        largeChartUrl: "http://localhost:8080/data/{tvsymbol}",
        locale: 'en'
      });
      this.$el.appendChild(script);
      

    }
  }
  </script>
  
  <style scoped>

  </style>
  