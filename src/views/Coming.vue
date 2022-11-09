<script>
import Footer from "../components/Footer.vue";
export default { components: { Footer } }
</script>

<template>
  <section class="container mt-24 bg-secondary px-5 md:px-40 flex flex-col justify-center h-[620px]">
    <span class="text-xs md:text-lg text-secondary-text mb-5">Something is</span>
    <img src="../assets/img/coming.png" alt="comming..." class="mb-8 hidden md:block" />
    <div class="mb-8 md:hidden w-[90%]">
      <img src="../assets/img/coming-sm.png" alt="comming..." />
    </div>
    <p class="md:text-lg text-secondary-text">We will be celebrating the launch of our new site very soon!</p>
    <form @submit.prevent class="mt-28 flex flex-wrap md:flex-nowrap gap-0 md:gap-8 items-center">
      <div class="input-under-line w-[100%] md:w-auto">
        <input
          type="email"
          placeholder="Email"
          class="input input-under-line"
          required
        />
        </div>
      <button type="submit" class="view-link">
        notify me
        <img src="../assets/img/right-arrow.png" alt="right-arrow" />
      </button>
    </form>
  </section>
  <Footer />
</template>