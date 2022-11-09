<script>
export default {
  data() {
    return {
      showPassword: false,
    }
  },
  computed: {
    signInError() {
      if (this.$store.state.signInError) {
        return this.$store.state.signInError === "auth/wrong-password" ? "Password Is Wrong" : "Email Is Wrong";
      }
    }
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
      this.$refs.password.type = this.showPassword ? "text" : "password";
    },
    signIn() {
      return this.$store.dispatch('signIn', {
        email: this.$refs.email.value,
        password: this.$refs.password.value
      });
    },
  }
}
</script>

<template>
  <div
    class="flex flex-col gap-10 lg:flex-row lg:h-screen"
  >
    <div
      class="bg-secondary lg:w-1/2 flex items-center flex-col justify-center gap-5 px-5 py-10 lg:px-[105px] lg:pb-[75px]"
    >
    <div>
      <h1 class="text-secondary-text text-4xl">Welcome To</h1>
    </div>
      <router-link to="/signin">
        <img src="/src/assets/img/logo.png" alt="logo" />
      </router-link>
    </div>
    <div class="flex flex-col justify-center items-center">
      <form class="w-[80%] md:w-auto" @submit.prevent>
        <div class="mb-10 input-under-line">
          <input
            type="email"
            ref="email"
            placeholder="Email in use"
            class="input input-under-line flex-1 w-full lg:w-[380px]"
            required
          />
        </div>
        <div class="mb-10 input-under-line">
          <input
            ref="password"
            type="password"
            placeholder="Password"
            class="input input-under-line flex-1 w-full lg:w-[380px]"
            required
          />
          <button
            type="button"
            class="absolute top-0 right-0 pr-4"
            @click="togglePassword"
          >
            <IconEye v-if="!showPassword" class="w-6 h-6" />
            <IconEyeOff v-if="showPassword" class="w-6 h-6" />
          </button>
        </div>
        <span v-text="signInError" class="block mb-3"></span>
        <button type="submit" class="border rounded border-secondary p-2 mb-2 hover:bg-slate-50 hover:text-secondary transition-all duration-500" @click="signIn">
          log In
        </button>
      </form>
    </div>
  </div>
</template>
