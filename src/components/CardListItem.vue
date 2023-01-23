<template>
  <div
    class="h-fit bg-white rounded-2xl p-4 xl:p-6 flex flex-row card-shadow justify-end"
  >
    <img
      class="absolute w-10 h-10 xl:w-20 xl:h-20"
      :src="card.icon"
      alt="Icon"
    />
    <div class="flex flex-col break-words">
      <span class="text-xs text-gray9">{{ card.updateFrequency }}</span>
      <span class="text-xl font-medium mb-2">{{ card.title }}</span>
      <span class="text-sm text-gray6 mb-4">{{ card.description }} </span>
      <div class="mb-4">
        <li
          class="flex flex-row mb-2"
          v-for="(aspect, id) in card.positiveAspects"
          :key="id"
        >
          <img src="../assets/Check.svg" alt="Check" />
          <span class="text-sm ml-2">{{ aspect }}</span>
        </li>
      </div>
      <div
        class="flex flex-row items-center cursor-pointer"
        @click="subToggle = !subToggle"
      >
        <div
          class="w-12 h-6 bg-grayswitchlarge rounded-full flex items-center p-px"
          :class="{ 'bg-buttonblue': subToggle }"
        >
          <div
            class="switch-large bg-white rounded-full transform ease-linear duration-100"
            :class="{ 'translate-x-6': subToggle }"
          ></div>
        </div>
        <span class="ml-2 text-sm select-none"
          >Уже получает {{ formatNumber(card.subscribers) }} человек
        </span>
      </div>
    </div>
    <div class="xl:min-w-fit xl:pl-6">
      <img class="w-0 h-0 xl:w-20 xl:h-20" :src="card.icon" alt="Icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CardInfo } from "@/stores/cards";
import { ref } from "vue";

defineProps<{
  card: CardInfo;
}>();

function formatNumber(value: number) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const subToggle = ref(false);
</script>
