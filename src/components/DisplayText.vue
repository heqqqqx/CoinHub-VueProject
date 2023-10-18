<template>
    <div class="guide-content">
      <div class="header">
        <h1 class="h1-guide">{{ headerTitle }}</h1>
        <p>{{ headerDescription }}</p>
      </div>
      <div v-for="(section, index) in sections" :key="index" class="section">
        <h2 class="h2-guide">{{ section.title }}</h2>
        <p v-html="section.content"></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "GuideComponent",
    props: {
      headerTitle: {
        type: String,
        required: true,
      },
      headerDescription: {
        type: String,
        required: true,
      },
      sections: {
        type: Array,
        required: true,
      },
    },
    methods: {
      goToDataPage(path) {
        this.$router.push(`/${path}`);
      },
    },
  };
  </script>
  
  <style scoped>
  /* your existing styles here */
  </style>
  