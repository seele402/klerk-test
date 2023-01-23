<template>
  <div class="w-full flex flex-row justify-center">
    <input
      type="text"
      placeholder="Электронная почта"
      class="w-full rounded-l-lg p-4 text-base text-gray6 outline-none"
    />
    <div class="rounded-r-full bg-white">
      <button
        class="subscribe-button bg-buttonblue text-white h-14 rounded-full w-14 xl:w-44 z-10 hover:bg-blue-400"
        @click="$emit('subscribe-button-pressed')"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.subscribe-button:after {
  content: "Подписаться";
}

@media screen and (max-width: 1200px) {
  .subscribe-button:after {
    content: ">";
  }
}
</style>
