<script stepup>
import { RouterView } from "vue-router";
import MainNavbar from "./components/navbar/MainNavbar.vue";

export default {
    computed: {
        currentRouteName() {
          return this.$route.name;
        }
    },
    components: { MainNavbar }
}
</script>

<template>
  <MainNavbar v-if="currentRouteName != 'signin'" />
  <RouterView />
</template>
