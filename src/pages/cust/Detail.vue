<template>
  <div class="w-screen flex gap-3 justify-center py-10 h-screen">
    <div class="avatar">
      <div class="w-[100%] h-[50%] rounded-xl">
        <img :src="detail.imgUrl" />
      </div>
    </div>
    <div class="w-[60%] flex flex-col gap-y-6 px-10">
      <h1 class="font-bold font-loro">~{{ detail.name }}</h1>
      <div>
        <h1>Description:</h1>
        <p>{{ detail.description }}</p>
      </div>
      <div>
        <h1>Price:</h1>
        <p>{{ detail.price }}</p>
      </div>
      <div>
        <h1>Stock:</h1>
        <p>{{ detail.stock }} items</p>
      </div>
    </div>

    <div class="w-[10%] rounded-xl">
      <img
        src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
      />
    </div>
  </div>
</template>

<script>
import { rupiah } from "../../helpers/formatData/formatIDR";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../../stores/product";
import axios from "axios";
export default {
  data() {
    return {
      detail: {},
    };
  },
  computed: {
    ...mapState(useProductStore, ["detail"]),
  },
  methods: {
    fetchById: async function (id) {
      try {
        const responseBody = await axios({
          method: "get",
          url:
            "https://server-kfc-deploy-production.up.railway.app/customers/products/" +
            id,
        });
        const response = responseBody.data;
        const result = response.data;
        this.detail = result;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    let id = this.$route.params.id;
    this.fetchById(id);
  },
};
</script>
