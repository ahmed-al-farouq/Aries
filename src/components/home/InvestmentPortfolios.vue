<script>
export default {
  data() {
    return {
      window,
      cypherImages: [
        "/src/assets/img/hover-cypher.png",
        "/src/assets/img/hover-cypher-sm.png"
      ]
    }
  }
}
</script>

<template>
  <section class="container my-52 top-sep">
    <h2 class="section-title mt-8">
      our Investment Portfolios.
    </h2>
    <div class="mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-16">
      <div class="grid grid-cols-2 gap-x-16 gap-y-16 md:gap-y-4 lg:gap-y-28">
        <img src="/src/assets/img/atomin.png" alt="atom" />
        <img src="/src/assets/img/oracle.png" alt="oracle" />
        <img src="/src/assets/img/TINDO.png" alt="TINDO" />
        <img src="/src/assets/img/kawaski.png" alt="kawaski" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 items-center mt-16 md:mt-0 gap-16">
        <div class="grid grid-cols-2 md:grid-cols-1 items-center gap-x-24 md:gap-x-0 md:gap-y-12 lg:gap-y-28">
          <img src="/src/assets/img/jarvice.png" alt="jarvice" />
          <img
            :src="window.innerWidth >= 768 ? cypherImages[0] : cypherImages[1]"
            alt="hover-cypher"
          />
        </div>
        <div class="grid grid-cols-2 md:grid-cols-1 gap-x-24 md:gap-x-0 md:gap-y-12 lg:gap-y-36 md:mb-8">
          <img src="/src/assets/img/raxon.png" alt="raxon" />
          <img src="/src/assets/img/ordix.png" alt="ordix" />
        </div>
      </div>
    </div>
  </section>
</template>