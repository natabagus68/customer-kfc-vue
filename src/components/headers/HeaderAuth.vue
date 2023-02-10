<template>
  <div class="navbar p-6 flex justify-between">
    <div>
      <img src="../../assets/img/kfc-logo.png" class="w-[100px]" alt="" />
    </div>
    <form @submit.prevent="onSubmitSearch">
      <div class="form-control">
        <div class="input-group">
          <input
            type="text"
            placeholder="Search…"
            class="input input-bordered border-red-500 focus:outline-none"
            v-model="search"
          />
          <button
            class="btn btn-square bg-red-500 border-red-500 hover:bg-red-700 hover:outline-red-700"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useProductStore } from "../../stores/product";
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    ...mapActions(useProductStore, ["fetchProduct"]),
    onSubmitSearch: function () {
      this.fetchProduct({ name: this.search });
    },
  },
};
</script>
