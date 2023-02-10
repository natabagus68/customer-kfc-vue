<template>
  <div class="w-[80%] m-auto flex flex-wrap py-10 px-6 gap-3 justify-center">
    <card-product
      v-for="(item, key) in data"
      :key="key"
      :data="item"
      :favorite="false"
      :destroy="true"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useFavoriteStore } from "../../stores/favorite";
import CardProduct from "../../components/cards/CardProduct.vue";
export default {
  data() {
    return {
      data: [],
    };
  },
  components: {
    CardProduct,
  },
  computed: {
    ...mapState(useFavoriteStore, ["favorites"]),
  },

  created() {
    this.data = this.favorites;
  },
};
</script>
