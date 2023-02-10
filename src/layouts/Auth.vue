<template>
  <div class="w-screen h-full flex">
    <div
      class="w-[60%] h-screen bg-[url('https://images.unsplash.com/photo-1617870332605-811386314dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGtmY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')] bg-cover bg-center shadow-xl"
    ></div>
    <div class="h-full pt-[17%] md:pl-[6%]">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>
