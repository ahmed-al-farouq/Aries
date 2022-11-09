<script>
import { RouterLink } from "vue-router";
import CollapsedMenu from "./CollapsedMenu.vue";
export default {
  data(){
    return {
      collapsed: true,
    }
  },
  methods: {
    toggleMenu() {
      this.collapsed = !this.collapsed;
    }
  }
}
</script>

<template>
  <header class="container relative md:mt-8 bg-secondary">
    <nav class="flex justify-between items-center py-8 px-5 md:px-14">
      <ul class="hidden md:flex items-center gap-8">
        <li class="uppercase">
          <RouterLink to="/coming"> program </RouterLink>
        </li>
        <li class="uppercase">
          <RouterLink to="/coming"> funding</RouterLink>
        </li>
      </ul>
      <RouterLink to="/">
        <img src="../../assets/img/logo.png" alt="logo" />
      </RouterLink>
      <ul class="hidden md:flex items-center gap-8">
        <li class="uppercase">
          <RouterLink to="/coming"> jobs </RouterLink>
        </li>
        <li class="uppercase">
          <RouterLink to="/" class="flex items-center gap-2">
            menu
            <img src="../../assets/img/vector.png" alt="menu icon" />
          </RouterLink>
        </li>
      </ul>
      <CollapsedMenu :className="collapsed ? 'collapsed-menu z-10' : 'collapsed-menu z-10 open' " />
      <button @click="toggleMenu" class="md:hidden">
        <img src="../../assets/img/menu-icon.png" 
        alt="menu icon" class="w-6 h-6" />
      </button>
    </nav>
  </header>
</template>
