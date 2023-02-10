<template>
  <div class="w-screen">
    <header-cust />
    <navbar-cust />
    <div class="h-screen flex flex-col">
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import HeaderCust from "../components/headers/HeaderCust.vue";
import NavbarCust from "../components/navbars/NavbarCust.vue";
import { mapActions } from "pinia";
import { useFavoriteStore } from "../stores/favorite";
import { useProductStore } from "../stores/product";
import Footer from "../components/footers/Footer.vue";
export default {
  components: {
    HeaderCust,
    NavbarCust,

    Footer,
  },
  methods: {
    ...mapActions(useFavoriteStore, ["getMyFavorite"]),
    ...mapActions(useProductStore, ["fetchProduct"]),
  },
  created() {
    this.getMyFavorite();
    this.fetchProduct({});
  },
};
</script>
