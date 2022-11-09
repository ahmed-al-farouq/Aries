<script>
export default {
  props: {
    className: String,
  }
}
</script>

<template>
  <div :class="className">
    <ul class="flex flex-col items-center gap-8 my-2">
      <li class="uppercase">
        <RouterLink to="/coming"> program </RouterLink>
      </li>
      <li class="uppercase">
        <RouterLink to="/coming"> funding </RouterLink>
      </li>
      <li class="uppercase">
        <RouterLink to="/coming"> jobs </RouterLink>
      </li>
    </ul>
  </div>
</template>
