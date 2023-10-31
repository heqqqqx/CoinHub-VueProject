<template>
  <div class="news-container">
    <div v-for="(newsItem, index) in news" :key="index" class="news-item">
      <div class="ticker-box" v-on:click="goToDataPage(newsItem.tickers[0])">
        {{ newsItem.tickers.join(', ') }}
      </div>
      <img :src="newsItem.image_url" alt="News Image" class="news-image" />
      <h2>{{ newsItem.title }}</h2>
      <p>{{ newsItem.text }}</p>
      <a :href="newsItem.news_url" target="_blank">Read more</a>
    </div>
  </div>
  <NextPreviousButtons :page="this.$route.params.page" />
</template>
  <script>
import NextPreviousButtons from '../components/NextPreviousButtons.vue'
export default {
  methods: {
    goToDataPage(ticker) {
      this.$router.push(`/data/${ticker}USD`)
    }
  },
  components: {
    NextPreviousButtons
  },
  props: ['news']
}
</script>
  

  <style scoped>
.news-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 400px));
  gap: 20px;
  padding: 20px;
}

.news-item {
  background-color: rgb(25, 26, 26);
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
}
.ticker-box {
  color: black;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ffcc00;
  padding: 5px;
  border-radius: 5px;
  font-weight: bold;
}

.news-item img {
  max-width: 100%;
  border-radius: 10px 10px 0 0;
}

.news-item h2 {
  font-size: 1.2rem;
  margin-top: 0;
}

.news-item p {
  font-size: 1rem;
}

.news-item a {
  display: inline-block;
  margin-top: 10px;
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
}
.news-item a:hover {
  display: inline-block;
  margin-top: 10px;
  font-weight: bold;
  color: #ffcc00;
  text-decoration: none;
}
@media (min-width: 1025px) {
  .news-container {
    grid-template-columns: repeat(3, 400px);
  }
}
</style>
  