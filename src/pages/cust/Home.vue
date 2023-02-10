<template>
  <div>
    <Jumbotron />
    <div class="flex justify-center p-10 gap-3">
      <card-stats
        icon="local_shipping"
        title="Fast Delivery"
        desc="Order Over Rp.20k IDR"
      />
      <card-stats icon="savings" title="Economic" desc="affordable prices" />
      <card-stats icon="history" title="24 hours" desc="we are open 24 hours" />
    </div>
    <main class="w-full my-5 m-auto">
      <section class="flex flex-wrap gap-8 justify-center">
        <card-product
          v-for="(item, key) in this.data"
          :key="key"
          :data="item"
          :favorite="true"
        />
      </section>
      <div>
        <Pagination />
      </div>
    </main>
  </div>
</template>

<script>
import CardStats from "../../components/cards/CardStats.vue";
import Jumbotron from "../../components/jumbotron/Jumbotron.vue";
import CardProduct from "../../components/cards/CardProduct.vue";
import Pagination from "../../components/buttons/Pagination.vue";
import { mapActions, mapState } from "pinia";
import { useProductStore } from "../../stores/product";
export default {
  data() {
    return {
      dataProducts: [],
      loading: false,
    };
  },
  components: {
    CardStats,
    Jumbotron,
    CardProduct,
    Pagination,
  },
  computed: {
    ...mapState(useProductStore, ["data", "isLoading"]),
  },
  methods: {
    ...mapActions(useProductStore, ["fetchProduct"]),
  },

  created() {
    this.fetchProduct({});
  },
};
</script>
