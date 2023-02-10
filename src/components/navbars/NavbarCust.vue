<template>
  <div class="w-full bg-slate-800 flex justify-between">
    <div class="flex justify-between content-center mx-8">
      <div class="dropdown mx-20">
        <label
          tabindex="0"
          class="btn rounded-none bg-red-500 px-6 hover:bg-red-700 m-0"
        >
          <span class="material-symbols-outlined mr-3"> menu </span>
          Categories
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a @click.prevent="this.fetchProduct({})" class="active:bg-red-400"
              >All</a
            >
          </li>
          <li v-for="(item, i) in this.data" :key="i">
            <a
              @click.prevent="this.fetchProduct({ category: item.id })"
              class="active:bg-red-400"
              >{{ item.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="mx-10 flex py-2">
      <!-- <span class="material-symbols-outlined">person</span> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCategoryStore } from "../../stores/category";
import { useProductStore } from "../../stores/product";
export default {
  computed: {
    ...mapState(useCategoryStore, ["data"]),
  },
  methods: {
    ...mapActions(useCategoryStore, ["fetchCategory"]),
    ...mapActions(useProductStore, ["fetchProduct"]),
  },

  created() {
    this.fetchCategory();
  },
};
</script>
