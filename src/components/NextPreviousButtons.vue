<template>
    <button @click="goToPreviousPage">Previous page</button>
    <button @click="goToNextPage">Next page</button>    
    </template>
  
  <script>
  export default {
    props: ['page'],
    methods: {
        goToNextPage() {
        const basePath = this.$route.path.includes('specific') ? `/news/specific/${this.$route.params.cryptoname}` : '/news';
        const nextPage = this.page ? parseInt(this.page, 10) + 1 : 2;
        this.$router.push(`${basePath}/${nextPage}`);
    },
    goToPreviousPage() {
        const basePath = this.$route.path.includes('specific') ? `/news/specific/${this.$route.params.cryptoname}` : '/news';
        let previousPage = this.page ? parseInt(this.page, 10) - 1 : 1;
        if (previousPage <= 0) previousPage = 1;
        this.$router.push(`${basePath}/${previousPage}`);
    }
}
  }
  </script>
  