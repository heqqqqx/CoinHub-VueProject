<template>
  <div class="resource-card">
    <img :src="ressourceImage" alt="Resource Image" class="resource-image" />
    <div class="resource-info">
      <h3 class="resource-title">{{ ressourceTitle }}</h3>
      <p class="resource-text">{{ ressourceText }}</p>
      <a :href="ressourceLink" target="_blank" class="resource-link">Learn More</a>
    </div>
  </div>
</template>

  
  <script>
  export default {
    name: "RessourcesComponent",
    props: {
      ressourceImage: {
        type: String,
        required: true,
      },
      ressourceTitle: {
        type: String,
        required: true,
      },
      ressourceText: {
        type: String,
        required: true,
      },
        ressourceLink: {
            type: String,
            required: true,
        },
    },
  }
  </script>
<style scoped>
.resources-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  flex-wrap: nowrap;
}

.resources-page > button {
    flex-shrink: 0; /* Cela empêchera les boutons de rétrécir */
}

.resource-card {

  width: 800px;
  max-width: 100%;
  height:120px;
  background-color: rgb(32, 28, 28);
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  max-width: calc(100% - 200px); 

}

.resource-image {
  width: 100px ;
  height: 100px ;
  margin-right: 10px;
}

.resource-info {
  flex-grow: 1;
}

.resource-title {
  font-size: 1.2rem;
  margin: 0;
}

.resource-text {
  font-size: 1rem;
}

.resource-link {
  text-decoration: none;
  font-weight: bold;
  color: #007bff;
}

.resource-link:hover {
  text-decoration: underline;
}
</style>
