import { defineStore } from "pinia";
import axios from "axios";

export const useFavoriteStore = defineStore("favorite", {
  state() {
    return {
      favorites: [],
    };
  },
  actions: {
    getMyFavorite: async function () {
      try {
        const responseBody = await axios({
          method: "get",
          url: "https://server-kfc-deploy-production.up.railway.app/customers/favorite",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        const response = responseBody.data;
        const result = response.data;

        result.forEach((e) => {
          e.product.favoriteId = e.id;
          this.favorites.push(e.product);
        });
      } catch (error) {
        console.log(error);
      }
    },

    addFavorite: async function (id) {
      try {
        const security = this.favorites.find((e) => e.id === id);
        if (security) {
          throw { message: "sudah ada di list favorite" };
        }
        await axios({
          method: "post",
          url:
            "https://server-kfc-deploy-production.up.railway.app/customers//favorite/" +
            id,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.favorites = [];
        this.getMyFavorite();
      } catch (error) {
        console.log(error);
      }
    },

    destroyFavorite: async function (id) {
      try {
        const newData = this.favorites.filter((e) => e.favoriteId !== id);
        this.favorites = newData;
        window.location.reload();
        await axios({
          method: "delete",
          url:
            "https://server-kfc-deploy-production.up.railway.app/customers//favorite/" +
            id,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    countAll: function () {
      return this.favorite.length;
    },
  },
});
