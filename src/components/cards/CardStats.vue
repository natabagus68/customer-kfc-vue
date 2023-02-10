<template>
  <div
    class="border-solid rounded border-[2px] border-red-400 p-6 px-[100px] flex justify-between"
  >
    <div class="flex">
      <span class="material-symbols-outlined text-red-400 m-auto"
        >{{ icon }}
      </span>
    </div>
    <div class="px-1 flex flex-col ml-3">
      <h1 class="font-loro text-xl">{{ title }}</h1>
      <p class="text-slate-500 font-asap">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["icon", "title", "desc"],
};
</script>

<style>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 700, "GRAD" 200, "opsz" 48;
}
</style>
