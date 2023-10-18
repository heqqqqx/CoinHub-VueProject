<template>
    <div>
        <BeginnerComponent />
    </div>
    <div class="section">
    <QuizzComponent />
  </div>
</template>

<script>
import BeginnerComponent from "@/components/BeginnerComponent.vue";
import QuizzComponent from "@/components/QuizzComponent.vue";
export default {
    name: "BeginnerGuide",
    components: {
        BeginnerComponent,
        QuizzComponent
    },
};
</script>
