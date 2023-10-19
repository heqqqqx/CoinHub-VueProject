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
            image: require('@/assets/coinhub.png')
,
            title: 'Title 1',
            text: 'Brief description of resource 1.',
            link: 'http://example.com/resource1'
          },
          {
            image: require('@/assets/coinhub.png')
,
            title: 'Title 2',
            text: 'Brief description of resource 2.',
            link: 'http://example.com/resource2'
          },
          // ... other resources
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
