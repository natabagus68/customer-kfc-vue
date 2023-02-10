import { defineStore } from "pinia";
// import { serverApi } from "../helpers/serverApi/serverApi";
import axios from "axios";
export const useProductStore = defineStore("product", {
  state() {
    return {
      data: [],
      detail: [],
      isLoading: false,
      name: null,
      category: null,
      offset: 0,
      count: 0,
    };
  },

  actions: {
    fetchProduct: async function (obj) {
      try {
        if (obj.name) {
          this.name = obj.name;
        } else if (obj.category) {
          this.category = obj.category;
        } else if (obj.offset) {
          this.offset = obj.offset;
        } else {
          this.name = null;
          this.category = null;
          this.offset = 0;
        }

        this.isLoading = true;
        const responseBody = await axios({
          method: "get",
          url: "https://server-kfc-deploy-production.up.railway.app/customers/products",
          params: {
            name: this.name,
            category: this.category,
            offset: this.offset,
          },
        });
        const response = responseBody.data;
        const result = response.data;
        this.data = result.rows;
        console.log(this.data, "access");
        this.count = Math.ceil(parseInt(result.count) / 8);
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
