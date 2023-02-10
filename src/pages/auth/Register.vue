<template>
  <div class="card w-[500px] bg-base-100 shadow-xl pt-3 mt-[-150px]">
    <h2 class="text-center font-asap font-bold text-slate-500">Sign up</h2>
    <div class="card-body">
      <form @submit.prevent="onsubmitRegister">
        <div class="flex flex-col gap-y-3 mt-3">
          <label for="" class="font-asap">Username</label>
          <input
            v-model="username"
            type="text"
            placeholder="Bagussss"
            class="input input-bordered input-info w-full"
            required
          />
        </div>
        <div class="flex flex-col gap-y-3 mt-3">
          <label for="" class="font-asap">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="telek@gmail.com"
            class="input input-bordered input-info w-full"
            required
          />
        </div>
        <div class="flex flex-col gap-y-3 mt-3">
          <label for="" class="font-asap">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="*******"
            class="input input-bordered input-info w-full"
            required
          />
        </div>
        <div class="flex flex-col gap-y-3 mt-3">
          <label for="" class="font-asap">Phone</label>
          <input
            v-model="phone"
            type="tel"
            placeholder="0851 ...."
            class="input input-bordered input-info w-full"
            required
          />
        </div>
        <div class="flex flex-col gap-y-3 mt-3">
          <label for="" class="font-asap">Address</label>
          <textarea
            v-model="address"
            class="textarea textarea-info"
            placeholder="Jakarta Selatan,..."
          ></textarea>
        </div>
        <div class="flex justify-center mt-4">
          <button class="btn bg-teal-600 hover:bg-teal-700 border-none w-1/2">
            Register
          </button>
        </div>
      </form>
    </div>
  </div>

  <div class="w-[500px] flex justify-between mt-3">
    <router-link to="/" class="hover:text-teal-400 cursor-pointer font-asap"
      >Back to home</router-link
    >
    <router-link to="/auth" class="hover:text-teal-400 cursor-pointer font-asap"
      >Have an Account</router-link
    >
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      phone: "",
      address: "",
    };
  },
  methods: {
    onsubmitRegister: async function () {
      try {
        await axios({
          method: "post",
          url: "https://server-kfc-deploy-production.up.railway.app/customers/register",
          data: {
            username: this.username,
            email: this.email,
            password: this.password,
            phone: this.phone,
            address: this.address,
          },
        });

        this.$router.push("/auth/login");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
