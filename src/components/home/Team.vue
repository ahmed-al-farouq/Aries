<script>
export default {
  data() {
    return {
      team: [
        {
          name: "edris alba",
          position: "leader",
          img: "src/assets/img/edris alba.png",
        },
        {
          name: "mark rafello",
          position: "co - leader",
          img: "src/assets/img/mark rafello.png",
        },
        {
          name: "chris rogers",
          position: "lead marketing",
          img: "src/assets/img/chris rogers.png",
        },
        {
          name: "roberto simioni",
          position: "lead technician",
          img: "src/assets/img/roberto simioni.png",
        },
      ]
    }
  }
}
</script>

<template>
  <section class="container flex justify-between items-center gap-2">
    <div class="hidden lg:grid grid-cols-2 gap-x-8 gap-y-16">
      <div v-for="person in team" :key="person.name">
        <img :src="person.img" :alt="person.name" />
        <h4 v-text="person.name" class="text-center text-secondary-text capitalize text-2xl mt-8 mb-4"></h4>
        <p v-text="person.position" class="text-center text-secondary-text capitalize"></p>
      </div>
    </div>
    <div class="right-sep hidden lg:block"></div>
    <div class="bg-secondary py-[90px] px-5 lg:pl-28 lg:pr-32 lg:h-[713px]">
      <div class="lg:hidden grid grid-cols-2 gap-x-8 gap-y-16">
        <div v-for="person in team" :key="person.name">
          <img :src="person.img" :alt="person.name" />
          <h4 v-text="person.name" class="text-center text-secondary-text capitalize text-xl md:text-2xl mt-8 mb-4"></h4>
          <p v-text="person.position" class="text-center text-secondary-text capitalize"></p>
        </div>
      </div>
      <div>
        <router-link to="/team" class="!hidden lg:!flex view-link mb-10">
          View team <img src="../../assets/img/right-arrow.png" alt="right arrow" />
        </router-link>
        <h2 class="section-title lg:w-[373px] mt-10 lg:mt-0 mb-10">Genius minds behind this program for you</h2>
        <p class="lg:w-[360px]">
          We are a group of engineers, designers and entrepreneur s brought together to support early stage startups working on artificial intelligence.
        </p>
        <router-link to="/team" class="view-link lg:hidden">
          View team <img src="../../assets/img/right-arrow.png" alt="right arrow" />
        </router-link>
      </div>
    </div>
  </section>
</template>