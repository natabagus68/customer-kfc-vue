import { defineStore } from "pinia";
import axios from "axios";
export const useCategoryStore = defineStore("category", {
  state() {
    return {
      data: [],
    };
  },

  actions: {
    fetchCategory: async function () {
      try {
        const responseBody = await axios({
          method: "get",
          url: "https://server-kfc-deploy-production.up.railway.app/customers//categories",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        const response = responseBody.data;
        const result = response.data;
        this.data = result;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
