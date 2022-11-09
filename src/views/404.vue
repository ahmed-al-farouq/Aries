<script>
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer
  }
}
</script>

<template>
  <section class="container mt-24 bg-secondary px-5 md:px-40 flex justify-between items-center h-[620px] relative">
    <img src="../assets/img/wave.png" alt="wave" class="h-[100%] hidden md:block absolute md:left-28 top-[50%] translate-y-[-50%]" />
    <div>
      <h1 class="text-4xl md:text-7xl text-secondary-text capitalize">
        oops..! <br />
        page not found.
      </h1>
      <p class="text-secondary-text mt-5 md:mt-10 capitalize text-base md:text-2xl">
        The requested URL was not found.
      </p>
      <router-link to="/" class="view-link">
        <img src="../assets/img/left-arrow.png" alt="left arrow" />
        Back to home
      </router-link>
    </div>
    <img src="../assets/img/404.png" alt="404 img" class="lg:h-[90%]" />
  </section>
  <Footer />
</template>