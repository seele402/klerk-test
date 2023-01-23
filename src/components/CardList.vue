<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
  >
    <CardListItem
      v-for="(card, index) in cardsStore.cards"
      :key="index"
      :card="card"
    />
  </div>
</template>

<script setup lang="ts">
import CardListItem from "./CardListItem.vue";
import { useCardsStore } from "../stores/cards";

const cardsStore = useCardsStore();
</script>
