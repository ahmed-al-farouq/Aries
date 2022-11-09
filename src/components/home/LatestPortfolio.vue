<script>
export default {
  data() {
    return {
      jobs: [
        {
          brand: "KAWASKI",
          name: "Sales Intern - <br /> Right Hand to the COO",
          desc: "Internship - Paris @agronavo - marketing"
        },
        {
          brand: "CYPHER",
          name: "head of growth - <br /> medical device startup",
          desc: "ful time - remote - business develepoment"
        },
        {
          brand: "ORDIX",
          name: "Software Developer - <br /> Robot Systems",
          desc: "ful time - remote - Software"
        },
      ],
      jobCategories: [
        {
          name: "Business Development",
          link: "business-development"
        },
        {
          name: "Data Science",
          link: "data-science"
        },
        {
          name: "Finance",
          link: "finance"
        },
        {
          name: "Human Resources",
          link: "human-resources"
        },
        {
          name: "Operations",
          link: "operations"
        },
        {
          name: "Software",
          link: "software"
        },
        {
          name: "Marketing",
          link: "marketing"
        },
      ]
    }
  }
}
</script>

<template>
  <section class="container my-52 lg:top-sep">
    <h2 class="section-title mt-8">latest portfolio jobs.</h2>
    <div class="flex flex-wrap-reverse lg:flex-nowrap justify-between items-center mt-36">
      <div class="w-[100%] mt-20 lg:mt-0 lg:w-7/12">
        <div
          v-for="(job, index) in jobs"
          :key="job.name"
          :class="`flex justify-between md:justify-start md:gap-[30px] xl:gap-[149px] items-center ${ index >= 1 ? 'relative top-sep before:absolute before:-top-10 before:w-[100%] mt-20' : ''}`"
        >
          <div>
            <span class="text-secondary-text text-xs lg:text-base mb-1" v-text="job.brand"></span>
            <h3 class="text-[26px] md:text-[44px] mb-5 lg:w-[471px] leading-7 md:leading-[50px] capitalize" v-html="job.name"></h3>
            <p class="text-sm lg:text-base capitalize" v-text="job.desc"></p>
          </div>
          <img src="../../assets/img/right-arrow-long.png" alt="right arrow" />
        </div>
      </div>
      <div class="lg:w-4/12 mx-auto md:mx-0">
        <h3 class="text-2xl capitalize">job categories</h3>
        <ul class="flex flex-col gap-5">
          <li v-for="cat in jobCategories" :key="cat.name">
            <router-link :to="cat.link" class="view-link !text-secondary-text !w-auto !gap-4 hover:!gap-5 !duration-300 hover:!text-[#99a9ff] text-2xl !capitalize">
              {{ cat.name }}
              <img src="../../assets/img/right-arrow.png" alt="right arrow" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-link to="job" class="view-link !mt-20">
      next jobs
      <img src="../../assets/img/right-arrow.png" alt="right arrow" />
    </router-link>
  </section>
</template>