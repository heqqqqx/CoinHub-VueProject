<template>
  <div v-if="user">
    <div class="searchbar-container">
      <SearchBar @search="handleSearch" />

    </div>
    <NewsVue  :news="news" />
  </div>
    <div v-else class="not-logged-in-message">
      <h1>You are not logged in</h1>
      <p>Please log in to view this page and access the full website.</p>
  </div>
</template>


<script>
import NewsVue from '@/components/NewsVue.vue';
import cryptonews from '@/services/cryptonews.js';
import { useAuth0 } from "@auth0/auth0-vue";
import SearchBar from '@/components/SearchBar.vue';
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
  
  methods: {
  handleSearch({ query, page }) {
    this.searchQuery = query;
    const basePath = this.$route.path.includes('specific') ? `/news/specific/${this.$route.params.cryptoname}` : '/news';
    this.$router.push(`${basePath}/${page}?q=${encodeURIComponent(query)}`);
    this.fetchData(query);  // Ajoutez cette ligne
  },
  fetchData(query) {
    const cryptoname = this.$route.params.cryptoname;
    const page = this.$route.params.page;
    const searchQuery = query || this.searchQuery;  // Utilisez l'argument query ou this.searchQuery
    cryptonews.getNews(page, cryptoname, searchQuery).then(response => {
      this.news = response.data.data;
    });
  }
},
  watch: {
    '$route'() {
      this.fetchData();
    }
  },
  created() {
    this.fetchData();
  }

,
  components: {
    NewsVue, SearchBar
  }
};
</script>
