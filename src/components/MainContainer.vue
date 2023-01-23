<template>
  <main
    class="flex flex-col bg-graybg lg:rounded-2xl items-center lg:w-3/5 p-4 lg:p-6"
  >
    <h2 class="mb-4 xl:mb-6 mt-6 text-2xl font-medium">
      Выберите рассылки, которые подходят именно вам
    </h2>
    <div class="w-full xl:pl-6 xl:pr-6">
      <EmailForm class="w-full" @subscribe-button-pressed="showPopup" />
      <div
        class="flex flex-row mb-8 items-center mt-4 max-w-fit cursor-pointer"
        @click="subToAllToggle = !subToAllToggle"
      >
        <div
          class="w-8 h-4 bg-grayswitchlarge rounded-full flex items-center p-px"
          :class="{ 'bg-buttonblue': subToAllToggle }"
        >
          <div
            class="switch-small bg-white rounded-full ease-linear duration-100"
            :class="{ 'translate-x-4': subToAllToggle }"
          ></div>
        </div>
        <span class="ml-2 text-sm select-none"
          >Подписаться на все рассылки</span
        >
      </div>
    </div>
    <CardList class="mb-12" />
    <transition name="popup">
      <PopupNotification v-if="popupOn" class="mt-auto top-14" />
    </transition>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CardList from "./CardList.vue";
import EmailForm from "./EmailForm.vue";
import PopupNotification from "./PopupNotification.vue";

const popupOn = ref(false);
function showPopup() {
  popupOn.value = true;
  setTimeout(hidePopup, 4000);
}
function hidePopup() {
  popupOn.value = false;
}
const subToAllToggle = ref(false);
</script>

<style>
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.5s ease;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}
</style>
