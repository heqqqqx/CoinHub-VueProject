<template>
    <form @submit.prevent="submitSearch" class="search-form">
      <input v-model="query" type="text" placeholder="Search for news..." class="search-input">
      <button type="submit" class="search-button">Search</button>
      <button type="submit" @click="query = ''" class="reset-button">Reset</button>
    </form>
</template>
  
  <script>
export default {
    data() {
      return {
        query: this.$route.query.q || ''
      };
    },
    watch: {
      '$route'(to) {
        if (to.query.q !== this.query) {
          this.query = to.query.q;
        }
      }
    },
    methods: {
      submitSearch() {
        this.$emit('search', { query: this.query, page: 1 });
      }
    }
}
</script>
  