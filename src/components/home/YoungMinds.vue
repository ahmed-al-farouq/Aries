<template>
  <section class="home-section justify-start md:justify-between md:flex-row-reverse">
    <div class="relative">
      <img
        src="../../assets/img/robot2.png"
        alt="robot"
        class="mx-auto h-[220px] w-[150px] md:h-[390px] md:w-[268px] absolute top-[60%] md:top-[50%] -right-8 md:-left-96 -translate-y-[50%]"
      />
      <img
        src="../../assets/img/ball2.png"
        alt="ball"
        class="mx-auto h-[250px] w-[290px] md:h-[480px] md:w-[466px]"
      />
    </div>
    <div class="mt-10">
      <h6 class="text-secondary-text">ROXERIN</h6>
      <h3 class="text-[26px] md:text-[44px]">
        Young Minds, Experience <br /> hand &amp; Strong Command.
      </h3>
      <p class="mt-8 sm:w-[318px] lg:w-[471px]">
        We spoke to Robotic and sound designer Ben Lukas Boysen about the evolution of robot soundtracks and some of his top picks.
      </p>
      <router-link to="/project" class="view-link">
        View project
        <img src="../../assets/img/right-arrow.png" alt="right arrow" />
      </router-link>
    </div>
  </section>
</template>