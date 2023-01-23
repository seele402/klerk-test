<template>
  <header class="flex flex-col items-center">
    <img class="max-h-20" src="../../assets/Logo.svg" alt="Logo" />
    <HeaderBreadcrumbs />
    <h1 class="text-4xl xl:text-6xl mt-2 mb-6 xl:m-7 font-medium">
      Подписки «Клерка»
    </h1>
    <HeaderNav class="" />
  </header>
</template>

<script setup lang="ts">
import HeaderBreadcrumbs from "./HeaderBreadcrumbs.vue";
import HeaderNav from "./HeaderNav.vue";
</script>
