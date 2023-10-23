<template>
  <div class="resources-page">
    <button @click="prevResource" class="nextprevious-button">Previous</button>
    <transition name="slide-fade" mode="out-in">
  <RessourcesComponent
    :key="currentResourceIndex"
    :ressourceImage="resources[currentResourceIndex].image"
    :ressourceTitle="resources[currentResourceIndex].title"
    :ressourceText="resources[currentResourceIndex].text"
    :ressourceLink="resources[currentResourceIndex].link"
  />
</transition>

    <button @click="nextResource" class="nextprevious-button">Next</button>
  </div>
</template>
  

  
  <script>
import RessourcesComponent from "@/components/RessourcesComponent.vue";
import data from "@/assets/ressources.json";

export default {
  name: "RessourceVue",
  components: {
    RessourcesComponent    
  },
  data() {
    return {
      ...data,
    };
  },
  methods: {
    nextResource() {
      this.currentResourceIndex =
        (this.currentResourceIndex + 1) % this.resources.length;
    },
    prevResource() {
      this.currentResourceIndex =
        (this.currentResourceIndex - 1 + this.resources.length) %
        this.resources.length;
    },
  },
};
</script>
<style scoped>
.resources-page {
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in the latest version */ {
  transform: translateX(100%);
  opacity: 0;
}
.slide-fade-enter-to, .slide-fade-leave {
  transform: translateX(0);
  opacity: 1;
}
.slide-fade-appear-active {
  transition: opacity 0.3s ease;
}
.slide-fade-appear {
  opacity: 0;
}
</style>
