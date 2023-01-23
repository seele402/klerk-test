<template>
  <nav class="flex flex-row gap-6 text-gray6">
    <button
      class="h-12 pb-11"
      :class="{
        'header-nav-checked': selectedOption === 1,
        'hover:header-nav-hover': selectedOption != 1,
      }"
      @click="selectedOption = 1"
    >
      Рассылки
    </button>
    <button
      class="h-12 pb-11 hover:header-nav-hover"
      :class="{
        'header-nav-checked': selectedOption === 2,
        'hover:header-nav-hover': selectedOption != 2,
      }"
      @click="selectedOption = 2"
    >
      Соцсети
    </button>
    <button
      class="h-12 pb-11 hover:header-nav-hover"
      :class="{
        'header-nav-checked': selectedOption === 3,
        'hover:header-nav-hover': selectedOption != 3,
      }"
      @click="selectedOption = 3"
    >
      Мессенджеры
    </button>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
const selectedOption = ref(1);
</script>
