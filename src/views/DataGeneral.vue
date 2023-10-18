<template>
    <div v-if="user">
      <GeneralData />
    </div>
    <div v-else class="not-logged-in-message">
    <h1>You are not logged in</h1>
    <p>Please log in to view this page and access the full website.</p>
  </div>
  </template>
  
  <script>
  import GeneralData from '@/components/GeneralData.vue';
  import { useAuth0 } from "@auth0/auth0-vue";

  export default {
    setup() {
    const { user } = useAuth0();
    return { user };
  },
    components: {
      GeneralData
    }
  }
  </script>
  
  <style scoped>
.content {
    margin-top: 150px;
}
  </style>
  