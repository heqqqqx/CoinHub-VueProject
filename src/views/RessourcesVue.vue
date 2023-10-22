<template>
    <div class="resources-page">

      <RessourcesComponent
        v-for="(resource, index) in resources"
        :key="index"
        :ressourceImage="resource.image"
        :ressourceTitle="resource.title"
        :ressourceText="resource.text"
        :ressourceLink="resource.link"
      />
    </div>
  </template>
  
  <script>
  import RessourcesComponent from '@/components/RessourcesComponent.vue';
  
  export default {
    name: 'RessourceVue',
    components: {
      RessourcesComponent
    },
    data() {
      return {
        resources: [
      {
        image: 'https://hackr.io/blog/media/blockchain-basics-a-non-technical-introduction-in-25-steps-min.png',
        title: 'Blockchain Basics: A Non-Technical Introduction in 25 Steps',
        text: 'Description du livre Blockchain Basics.',
        link: 'https://www.amazon.com/Blockchain-Basics-Non-Technical-Introduction-Steps/dp/B087YZTMPD/'
      },
      {
        image: 'https://hackr.io/blog/media/the-internet-of-money-a-collection-of-talks-min.png',
        title: 'The Internet of Money: A Collection of Talks',
        text: 'Description du livre The Internet of Money.',
        link: 'https://www.amazon.com/Internet-Money-Andreas-M-Antonopoulos/dp/1537000454'
      },
      {
        image: 'https://hackr.io/blog/media/the-little-bitcoin-book-why-bitcoin-matters-for-your-freedom-finances-and-future-min.png',
        title: 'The Little Bitcoin Book: Why Bitcoin Matters for Your Freedom, Finances, and Future',
        text: 'Description du livre The Little Bitcoin Book.',
        link: 'https://www.amazon.com/Little-Bitcoin-Book-Matters-Finances-ebook/dp/B07W957N7T'
      },
      {
        image: 'https://hackr.io/blog/media/an-altcoin-trader-s-handbook-min.png',
        title: 'An Altcoin Trader’s Handbook',
        text: 'Description du livre An Altcoin Trader’s Handbook.',
        link: 'https://www.amazon.com/Altcoin-Traders-Handbook-Nik-Patel-ebook/dp/B07DK8J5XJ'
      },
      {
        image: 'https://hackr.io/blog/media/theblo-1.png',
        title: 'The Blockchain Developer: A Practical Guide for Designing, Implementing, Publishing, Testing, and Securing Distributed Blockchain-based Projects',
        text: 'Description du livre The Blockchain Developer.',
        link: 'https://www.amazon.com/Blockchain-Developer-Implementing-Distributed-Blockchain-based-ebook/dp/B07VMD99YH/'
      },
      {
        image: 'https://hackr.io/blog/media/the-everything-guide-to-investing-in-cryptocurrency-min.png',
        title: 'The Everything Guide to Investing in Cryptocurrency',
        text: 'Description du livre The Everything Guide to Investing in Cryptocurrency.',
        link: 'https://www.amazon.com/Everything-Guide-Investing-Cryptocurrency-Everything%C2%AE-ebook/dp/B07GNTLHZN'
      },
      {
        image: 'https://hackr.io/blog/media/inventing-bitcoin-the-technology-behind-the-first-truly-scarce-decentralized-money-explained-min.png',
        title: 'Inventing Bitcoin: The Technology Behind the First Truly Scarce Decentralized Money Explained',
        text: 'Description du livre Inventing Bitcoin.',
        link: 'https://www.amazon.com/Inventing-Bitcoin-Technology-Decentralized-Explained-ebook/dp/B07MWXRWNB/'
      },
      {
        image: 'https://hackr.io/blog/media/blockchain-bubble-or-revolution-the-future-of-bitcoin-blockchains-and-cryptocurrencies-min.png',
        title: 'Blockchain Bubble or Revolution: The Future of Bitcoin, Blockchains, and Cryptocurrencies',
        text: 'Description du livre Blockchain Bubble or Revolution.',
        link: 'https://www.amazon.com/Blockchain-Bubble-Revolution-Present-Cryptocurrencies-ebook/dp/B07T13GP1Q/'
      },
      {
        image: 'https://hackr.io/blog/media/bitcoin-billionaires-a-true-story-of-genius-betrayal-and-redemption-min.png',
        title: 'Bitcoin Billionaires: A True Story of Genius, Betrayal, and Redemption',
        text: 'Description du livre Bitcoin Billionaires.',
        link: 'https://www.amazon.com/Bitcoin-Billionaires-Genius-Betrayal-Redemption-ebook/dp/B07GN8HWZW/'
      },
      {
        image: 'https://hackr.io/blog/media/digital-gold-bitcoin-and-the-inside-story-of-the-misfits-and-millionaires-trying-to-reinvent-money.png',
        title: 'Digital Gold: Bitcoin and the Inside Story of the Misfits and Millionaires Trying to Reinvent Money',
        text: 'Description du livre Digital Gold.',
        link: 'https://www.amazon.com/Digital-Gold-Bitcoin-Millionaires-Reinvent/dp/006236250X'
      },
      {
        image: 'https://hackr.io/blog/media/crypto-asset-investing-in-the-age-of-autonomy-min.png',
        title: 'Crypto Asset Investing in the Age of Autonomy',
        text: 'Description du livre Crypto Asset Investing in the Age of Autonomy.',
        link: 'https://www.amazon.com/Crypto-Asset-Investing-Age-Autonomy/dp/B08SSR12NP'
      },
      {
        image: 'https://hackr.io/blog/media/mastering-bitcoin-unlocking-digital-cryptocurrencies-min.png',
        title: 'Mastering Bitcoin: Unlocking Digital Cryptocurrencies',
        text: 'Description du livre Mastering Bitcoin.',
        link: 'https://www.amazon.com/Mastering-Bitcoin-Unlocking-Digital-Cryptocurrencies/dp/1449374042'
      },
      {
        image: 'https://hackr.io/blog/media/out-of-the-ether-the-amazing-story-of-ethereum-and-the-55-million-heist-that-almost-destroyed-it-all.png',
        title: 'Out of the Ether: The Amazing Story of Ethereum and the $55 Million Heist that Almost Destroyed It All',
        text: 'Description du livre Out of the Ether.',
        link: 'https://www.amazon.com/Out-Ether-Amazing-Ethereum-Destroyed/dp/1119602939'
      },
      {
        image: 'https://hackr.io/blog/media/the-infinite-machine-min.png',
        title: 'The Infinite Machine',
        text: 'Description du livre The Infinite Machine.',
        link: 'https://www.amazon.com/Infinite-Machine-Crypto-Hackers-Building-Internet/dp/B07XJ7WKXL'
      },
      {
        image: 'https://hackr.io/blog/media/cryptoassets-the-innovative-investor-s-guide-to-bitcoin-and-beyond-min.png',
        title: 'Cryptoassets: The Innovative Investor’s Guide to Bitcoin and Beyond',
        text: 'Description du livre Cryptoassets.',
        link: 'https://www.amazon.com/Cryptoassets-Innovative-Investors-Bitcoin-Beyond/dp/1260026671'
      },
      {
        image: 'https://hackr.io/blog/media/crypto-revolution-your-guide-to-the-future-of-money-min.png',
        title: 'Crypto Revolution: Your Guide to the Future of Money',
        text: 'Description du livre Crypto Revolution.',
        link: 'https://www.amazon.com/Crypto-Revolution-GUIDE-FUTURE-MONEY/dp/0983106339'
      },
      {
        image: 'https://hackr.io/blog/media/the-age-of-cryptocurrency-how-bitcoin-and-digital-money-are-challenging-the-global-economic-order.png',
        title: 'The Age of Cryptocurrency: How Bitcoin and Digital Money Are Challenging the Global Economic Order',
        text: 'Description du livre The Age of Cryptocurrency.',
        link: 'https://www.amazon.com/Age-Cryptocurrency-Bitcoin-Challenging-Economic-ebook/dp/B00L73JQ18'
      },
      {
        image: 'https://hackr.io/blog/media/cryptocurrency-investing-for-dummies-min.png',
        title: 'Cryptocurrency Investing for Dummies',
        text: 'Description du livre Cryptocurrency Investing for Dummies.',
        link: 'https://www.amazon.com/Cryptocurrency-Investing-Dummies-Kiana-Danial-ebook/dp/B07PBCJ8X7'
      },
      {
        image: 'https://hackr.io/blog/media/cryptocurrency-mining-investing-and-trading-in-blockchain-min.png',
        title: 'Cryptocurrency: Mining, Investing and Trading in Blockchain',
        text: 'Description du livre Cryptocurrency: Mining, Investing and Trading in Blockchain.',
        link: 'https://www.amazon.com/Cryptocurrency-Investing-Blockchain-including-Auroracoin/dp/1979003262'
      }
    
    
    ]
      }
    }
  }
    </script>
<style scoped>

.resources-page {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
  }
  </style>
