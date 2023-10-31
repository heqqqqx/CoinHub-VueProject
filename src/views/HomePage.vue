<template>

<div>
    <HomePage   />
</div>
<div class="tradingview-home">
        <TradingView />
    </div>
<div class="clients-review">
        <avisclientComponent
            :client="{
                name: 'Mayeul CAISSIER',
                grade: 4,
                review: 'I managed to build a good portfolio and discover new things about cryptocurrencies!'
            }"
        />
        <avisclientComponent
            :client="{
                name: 'Amaury DUBLÉ',
                grade: 5,
                review: 'CoinHub literally saved my life. Now, I can finally pay my rent, and I became a millionaire'
            }"
        />
        <avisclientComponent
            :client="{
                name: 'Jean AMOS',
                grade: 5,
                review: 'I didn\'t know anything about cryptocurrencies. Thanks to CoinHub, I can now invest in cryptocurrencies and make money!'
            }"
        />
    </div>
    
</template>


<script>
import avisclientComponent from "@/components/AvisClientComponent.vue";
import HomePage from "@/components/HomePageComponent.vue";
import TradingView from "@/components/HomePageTradingView.vue";

export default {
    components: {
        avisclientComponent,HomePage, TradingView
    },
};
</script>

