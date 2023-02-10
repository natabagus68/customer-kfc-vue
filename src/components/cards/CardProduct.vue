<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img :src="data.imgUrl" alt="food" class="w-18 object-cover h-[18rem]" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ data.name }}
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <p>{{ rupiah(data.price) }}</p>
      <div class="card-actions justify-end">
        <div
          v-if="favorite && !disabled"
          @click.prevent="onaddFavorite(data.id)"
          class="badge badge-outline p-3 gap-2 hover:scale-110 hover:bg-slate-600 cursor-pointer"
        >
          Favorite
          <span class="material-symbols-outlined"> favorite </span>
        </div>
        <div
          v-if="favorite && disabled"
          class="badge badge-outline p-3 gap-2 bg-slate-600 cursor-pointer"
        >
          Favorite
          <span class="material-symbols-outlined"> favorite </span>
        </div>
        <div
          v-if="destroy"
          @click.prevent="destroyMyFavorite(data.favoriteId)"
          class="badge badge-outline p-3 gap-2 hover:bg-red-400 hover:scale-110 duration-200 hover:border-none cursor-pointer"
        >
          delete
          <!-- <span class="material-symbols-outlined"> favorite </span> -->
        </div>

        <router-link
          :to="`/detail/${data.id}`"
          class="badge badge-outline p-3 hover:scale-125 hover:bg-slate-600 cursor-pointer"
        >
          Detail
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useFavoriteStore } from "../../stores/favorite";
import { rupiah } from "../../helpers/formatData/formatIDR";
export default {
  data() {
    return {
      disabled: false,
    };
  },
  props: ["data", "favorite", "destroy"],
  computed: {
    ...mapState(useFavoriteStore, ["favorites"]),
  },
  methods: {
    ...mapActions(useFavoriteStore, ["addFavorite", "destroyFavorite"]),
    rupiah,
    onaddFavorite: function (id) {
      console.log(id);
      this.addFavorite(id);
      this.disabled = true;
    },
    yesOrtrue: function () {
      //   console.log(this.data.id, "id");
      for (let i = 0; i < this.favorites.length; i++) {
        console.log(this.favorites[i]["id"]);
        if (this.favorites[i]["id"] == this.data.id) {
          this.disabled = true;
        }
      }
    },
    destroyMyFavorite: function (id) {
      this.destroyFavorite(id);
    },
  },

  created() {
    this.yesOrtrue();
  },
};
</script>

<style>
.material-symbols-outlined {
  font-variation-settings: "FILL" 10, "wght" 10, "GRAD" 0, "opsz" 18;
}
</style>
