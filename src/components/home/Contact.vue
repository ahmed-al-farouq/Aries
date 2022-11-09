<template>
  <section class="container grid lg:grid-cols-2 gap-16 lg:gap-0 xl:gap-32">
    <div>
      <h2 class="section-title capitalize">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#76b9f5] to-[#b8d7f1]">we help</span> you to turn 
        <span class="text-[#76b9f5]">
          ideas into
        </span>
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#76b9f5] to-[#b8d7f1]">
          reality.
        </span>
      </h2>
      <p class="text-secondary-text mt-10">
        if your research processes have unique features, and you are looking for an individual funding solution - we can help.
      </p>
    </div>
    <form action="" @submit.prevent>
      <div class="mb-10 input-under-line">
        <label for="name" class="sr-only">Name</label>
        <input
          type="text"
          id="name"
          class="input"
          placeholder="Name*"
          required
        />
      </div>
      <div class="mb-10 input-under-line">
        <label for="email" class="sr-only">Email</label>
        <input
          type="email"
          id="email"
          class="input"
          placeholder="Email*"
          required
        />
      </div>
      <div class="mb-10 input-under-line">
        <label for="message" class="sr-only">Message</label>
        <input
          type="text"
          id="message"
          class="input"
          placeholder="Message*"
          required 
        />
      </div>
      <button type="submit" class="view-link mt-16">
        get in touch
        <img src="../../assets/img/right-arrow.png" alt="right arrow" />
      </button>
    </form>
  </section>
</template>