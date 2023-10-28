<template>
    <div class="tradingview-widget-container">
        <div class="tradingview-widget-container__widget"></div>
        <div class="tradingview-widget-copyright">
            <a href="/data" rel="noopener nofollow" target="_blank">
                <span class="blue-text">Track all markets on data page</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        const script = document.createElement("script");
        script.src =
            "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbol: "BINANCE:BTCUSD",
            width: 350,
            height: 220,
            locale: "en",
            dateRange: "12M",
            colorTheme: "dark",
            isTransparent: false,
            autosize: false,
            largeChartUrl: window.location.origin+"/data/BTCUSD",
        });
        this.$el.querySelector(".tradingview-widget-container__widget").appendChild(script);
    },
};
</script>

