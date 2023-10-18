<template>
    <div class="crypto-basics ">

<GuideComponent
  
  :sections="aboutSections"
/>
</div>
<div class="section">
<QuizzComponent class="crypto-basics " />
</div>
</template>

<script>
import GuideComponent from "@/components/DisplayText.vue";
import QuizzComponent from "@/components/QuizzComponent.vue";
export default {
name: "BeginnerGuide",
components: {
    GuideComponent,
    QuizzComponent
},
data() {

return {
aboutSections: [
{
title: "What is Cryptocurrency?",
content: "Cryptocurrency is essentially a form of digital money, decentralized and designed for secure online transactions. Envisioned as an alternative to traditional banking, cryptocurrencies present a novel way of handling money. You can imagine this as Money 2.0. They embody the potential to revolutionize financial exchanges by being fast, easy, cost-effective, safe, and universally accessible. Moreover, the underlying technology, blockchain, provides a transparent and immutable ledger, ensuring trust and integrity in transactions and data management."
},
{
title: "Why Invest in Cryptocurrency?",
content: "Platforms like <a href='https://www.binance.com/'>Binance</a> or <a href='https://coinbase.com/'>Coinbase</a> have simplified the process of buying and selling cryptocurrencies. Cryptocurrencies allow secure transactions, and you can start with as little or as much investment as you wish. Moreover, holding certain digital currencies can earn you rewards, making cryptocurrency an attractive investment opportunity."
},
{
    title:"",
    content: "<img src='https://images.ctfassets.net/q5ulk4bp65r7/7vxp5PznsPJ8ONdD4v5Nne/2002088b0927404055d0760ba29c41b5/2a_bitcoin-vs-fiat.gif?w=1180' alt='Bitcoin vs Fiat' width='100%' height='100%'>"
}
,
{
title: "What are the different cryptocurrencies?",
content: "With over 6,000 cryptocurrencies in the world, we can't list all of them here. The most known ones are the Bitcoin and the Ethereum. But, with that many currencies, it can be hard to decide on which to invest. That's why we created this website, to help you understand the different cryptocurrencies and to help you choose the right one for you. You can follow the news of the different cryptocurrencies, see their price, and even see their price evolution in real time."
},
{
title: "How to Buy Bitcoin and Other Cryptocurrencies",
content: "Online exchanges like <a href='https://www.binance.com/'>Binance</a> or <a href='https://coinbase.com/'>Coinbase</a> offer a straightforward way to purchase cryptocurrencies. They provide a range of cryptocurrencies to choose from, and you can buy fractions of a coin to start small. The platform also provides insights to help you make informed choices based on your goals."
},
{
title: "How to Store Cryptocurrency?",
content: "Storing cryptocurrency securely is crucial. While there are various online and offline storage options, using a trusted, secure exchange like Coinbase simplifies the process. It allows you to manage, store, and convert your cryptocurrency conveniently on various devices."
},
{
title: "What Can You Do With Cryptocurrency?",
content: "The applications of cryptocurrency are vast and growing. From shopping and donating to exploring new technological realms like decentralized finance (DeFi), the cryptocurrency space is bustling with opportunities for both everyday and innovative uses."
},
{
title: "Where can I find more information?",
content: "Find more information on the official <a href='https://www.coinbase.com/learn/crypto-basics/what-is-cryptocurrency'>Coinbase website</a> ."
}
]};
}
};
</script>
