<template>
  <div class="w-screen">
    <header-auth />
    <navbar-auth />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavbarAuth from "../components/navbars/NavbarAuth.vue";
import HeaderAuth from "../components/headers/HeaderAuth.vue";
import Footer from "../components/footers/Footer.vue";

export default {
  components: {
    NavbarAuth,
    HeaderAuth,
    Footer,
  },
};
</script>
