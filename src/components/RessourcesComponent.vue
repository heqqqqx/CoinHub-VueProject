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
.resources-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.resource-card {
  flex: 1 1 48%; /* Cela permettra à chaque carte de prendre près de la moitié de la largeur disponible */
  background-color: rgb(32, 28, 28);
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box; /* Ajuste la boîte pour inclure le padding et la bordure dans la dimension totale */
}

.resource-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
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
  
  