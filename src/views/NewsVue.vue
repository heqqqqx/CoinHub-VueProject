<template>
  <NewsVue :news="news" />
</template>

<script>
import NewsVue from '@/components/NewsVue.vue';
import cryptonews from '@/services/cryptonews.js';

export default {
  data() {
    return {
      news: [],
    };
  },
  watch: {
  '$route'() {
    this.fetchData();
  }
},
methods: {
  fetchData() {
    const cryptoname = this.$route.params.cryptoname;
    const page = this.$route.params.page;
    cryptonews.getNews(page, cryptoname).then(response => {
      this.news = response.data.data;
    });
  }
},
created() {
  this.fetchData();
}
,
  components: {
    NewsVue
  }
};
</script>
