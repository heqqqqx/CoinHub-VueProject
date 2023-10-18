<template>
  <div class="crypto-basics">
    <div class="header">
      <h1 class="h1-guide">What is cryptocurrency?</h1>
      <p>
        Cryptocurrency is digital money. That means there’s no physical coin or
        bill — it’s all online.
      </p>
    </div>
    <div class="section">
      <h2 class="h2-guide">What is Cryptocurrency?</h2>
      <p>
        Cryptocurrency is essentially a form of digital money, decentralized and
        designed for secure online transactions. Envisioned as an alternative to
        traditional banking, cryptocurrencies present a novel way of handling
        money. You can imagine this as Money 2.0. They embody the potential to
        revolutionize financial exchanges by being fast, easy, cost-effective,
        safe, and universally accessible.
      </p>
    </div>

    <div class="section">
      <h2 class="h2-guide">Why Invest in Cryptocurrency?</h2>
      <p>
        Platforms like <a href="https://www.binance.com/">Binance</a> or
        <a href="https://coinbase.com/">Coinbase</a> have simplified the process
        of buying and selling cryptocurrencies. But they are
        <a href="https://coinmarketcap.com/fr/rankings/exchanges/">
          a lot more, you can discover them here ! </a
        >Cryptocurrencies allow secure transactions, and you can start with as
        little or as much investment as you wish. Moreover, holding certain
        digital currencies can earn you rewards, making cryptocurrency an
        attractive investment opportunity.
      </p>
    </div>
    <div class="section">
      <h2 class="h2-guide">What are the different crytocurrencies?</h2>
      <p>
        With over 6,000 cryptocurrencies in the world, we can't list all of them
        here. The most known ones are the Bitcoin and the Ethereum. But, with
        that many currencies, it can be hard to decide on which to invest.
        That's why we created this website, to help you understand the different
        cryptocurrencies and to help you choose the right one for you. You can
        follow the news of the different cryptocurrencies, see their price, and
        even see their price evolution in real time.
      </p>
    </div>
    <div class="section">
      <h2 class="h2-guide">How to Buy Bitcoin and Other Cryptocurrencies</h2>
      <p>
        Online exchanges like <a href="https://www.binance.com/">Binance</a> or
        <a href="https://coinbase.com/">Coinbase</a> offer a straightforward way
        to purchase cryptocurrencies. They provide a range of cryptocurrencies
        to choose from, and you can buy fractions of a coin to start small. The
        platform also provides insights to help you make informed choices based
        on your goals.
      </p>
    </div>
    <div class="section">
      <h2 class="h2-guide">How to Store Cryptocurrency?</h2>
      <p>
        Storing cryptocurrency securely is crucial. While there are various
        online and offline storage options, using a trusted, secure exchange
        like Coinbase simplifies the process. It allows you to manage, store,
        and convert your cryptocurrency conveniently on various devices.
      </p>
    </div>
    <div class="section">
      <h2 class="h2-guide">What Can You Do With Cryptocurrency?</h2>
      <p>
        The applications of cryptocurrency are vast and growing. From shopping
        and donating to exploring new technological realms like decentralized
        finance (DeFi), the cryptocurrency space is bustling with opportunities
        for both everyday and innovative uses.
      </p>
    </div>
  </div>
</template>
  
  <script>
  
export default {
    
  name: "CryptoBasics",
  methods: {
    goToDataPage(path) {
      this.$router.push(`/${path}`)
    }
} }
</script>
  
