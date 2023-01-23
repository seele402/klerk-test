import { defineStore } from "pinia";
import { ref } from "vue";

export const useCardsStore = defineStore(`cards`, () => {
  const cards = ref([] as CardInfo[]);
  return { cards };
});

export interface CardInfo {
  updateFrequency: string;
  title: string;
  description: string;
  positiveAspects: string[];
  subscribers: number;
  icon: string;
}
