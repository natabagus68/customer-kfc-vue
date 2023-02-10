<template>
  <footer class="footer footer-center p-4 bg-base-300 text-base-content">
    <div>
      <p>
        Copyright © {{ yeard() }} - All right reserved by ~Nata Bagus Arisandi~
      </p>
    </div>
  </footer>
</template>

<script>
import { yeard } from "../../helpers/formatData/yeardNow";
export default {
  methods: {
    yeard,
  },
};
</script>
