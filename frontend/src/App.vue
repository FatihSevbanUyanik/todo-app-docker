<template>
  <v-app>
    <transition name="slide" type="transition" mode="out-in">
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  }),
};
</script>


<style>
html {
  overflow-y: auto;
}
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.2s ease-out forwards;
  transition: opacity 0.2s;
  opacity: 1;
}
.slide-leave {
  opacity: 1;
}
.slide-leave-active {
  animation: slide-out 0.2s ease-out forwards;
  transition: opacity 0.2s;
  opacity: 0;
}
@keyframes slide-in {
  from {
    transform: translateX(20px);
  }
  to {
    transform: translateX(0px);
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(20px);
  }
}
</style>
