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

    <div class="flex justify-center gap-8 pr-[100px]">
      <div class="flex gap-1">
        <div class="indicator">
          <span class="indicator-item badge badge-secondary"
            >{{ this.favorites.length }}+</span
          >
          <router-link
            to="/cust/favorites"
            class="mask mask-heart bg-red-400 w-9 h-10 hover:bg-red-700 duration-150 hover:scale-110"
          ></router-link>
        </div>
      </div>
      <div>
        <div class="dropdown">
          <label tabindex="0">
            <span class="material-symbols-outlined cursor-pointer">
              person
            </span>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a @click.prevent="logout">Log out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapStores, mapState } from "pinia";
import { useProductStore } from "../../stores/product";
import { useFavoriteStore } from "../../stores/favorite";
export default {
  data() {
    return {
      search: "",
      counter: 0,
    };
  },
  methods: {
    ...mapActions(useProductStore, ["fetchProduct"]),
    onSubmitSearch: function () {
      this.fetchProduct({ name: this.search });
    },
    logout: function () {
      localStorage.removeItem("access_token");
      this.$router.push("/");
    },
  },
  computed: {
    // ...mapState(useFavoriteStore, ["count"]),
    ...mapState(useFavoriteStore, ["favorites"]),
  },
};
</script>
