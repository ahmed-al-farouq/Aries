<script>
import MainBannerText from "../components/home/MainBannerText.vue";
import BuildingFaster from "../components/home/BuildingFaster.vue";
import Invest from "../components/home/Invest.vue";
import CorporoboDesign from "../components/home/CorporoboDesign.vue";
import YoungMinds from "../components/home/YoungMinds.vue";
import InvestmentPortfolios from "../components/home/InvestmentPortfolios.vue";
import LatestPortfolio from "../components/home/LatestPortfolio.vue";
import Contact from "../components/home/Contact.vue";
import Footer from "../components/Footer.vue";

export default {
    methods: {
        handleScroll() {
            const height = this.$refs.mainBanner.clientHeight + 300;
            window.scrollTo(0, height);
        }
    },
    components: { MainBannerText, BuildingFaster, Invest, CorporoboDesign, YoungMinds, InvestmentPortfolios, LatestPortfolio, Contact, Footer }
}
</script>

<template>
  <main class="main-banner" ref="mainBanner">
    <div class="container flex items-center flex-col">
      <MainBannerText />
      <button class="mt-9 md:mt-28">
        <img src="../assets/img/scroll-arrow.png" alt="scroll arrow" @click="handleScroll" />
      </button>
    </div>
  </main>
  <BuildingFaster />
  <Invest />
  <CorporoboDesign />
  <YoungMinds />
  <InvestmentPortfolios />
  <Team />
  <LatestPortfolio />
  <Contact />
  <Footer />
</template>
