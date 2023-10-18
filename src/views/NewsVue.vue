<template>
  <NewsVue v-if="user" :news="news" />
  <div v-else class="not-logged-in-message">
    <h1>You are not logged in</h1>
    <p>Please log in to view this page and access the full website.</p>
  </div>
</template>

<script>
import NewsVue from '@/components/NewsVue.vue';
import cryptonews from '@/services/cryptonews.js';
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  setup() {
    const { user } = useAuth0();
    return { user };
  }
  ,
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
