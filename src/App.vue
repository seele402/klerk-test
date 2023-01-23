<template>
  <div class="flex flex-col items-center">
    <HeaderContainer />
    <MainContainer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import HeaderContainer from "./components/header/HeaderContainer.vue";
import MainContainer from "./components/MainContainer.vue";

import { useCardsStore } from "./stores/cards";

import jsonCards from "./assets/cards.json";

const cardsStore = useCardsStore();

onMounted(() => {
  cardsStore.cards = jsonCards;
});
</script>
