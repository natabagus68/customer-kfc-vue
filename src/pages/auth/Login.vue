<template>
  <div class="card w-[500px] bg-base-100 shadow-xl pt-3">
    <h2 class="text-center font-asap font-bold text-slate-500">Sign in</h2>
    <div class="card-body">
      <form @submit.prevent="onsubmitLogin">
        <div class="flex flex-col gap-y-3 mt-3">
          <label for="" class="font-asap">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="telek@gmail.com"
            class="input input-bordered input-info w-full"
          />
        </div>
        <div class="flex flex-col gap-y-3 mt-3">
          <label for="" class="font-asap">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="********"
            class="input input-bordered input-info w-full"
          />
        </div>
        <div class="flex justify-center mt-4">
          <button
            type="submit"
            class="btn bg-teal-600 hover:bg-teal-700 border-none w-1/2"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>

  <div class="w-[500px] flex justify-between mt-3">
    <router-link to="/" class="hover:text-teal-400 cursor-pointer font-asap"
      >Back to home</router-link
    >
    <router-link
      to="/auth/register"
      class="hover:text-teal-400 cursor-pointer font-asap"
      >Create new Account</router-link
    >
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    onsubmitLogin: async function () {
      try {
        console.log("login");
        const token = await axios({
          method: "post",
          url: "https://server-kfc-deploy-production.up.railway.app/customers/login",
          data: {
            email: this.email,
            password: this.password,
          },
        });
        const response = token.data;
        localStorage.setItem("access_token", response.access_token);
        this.$router.push({ path: "/cust" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
