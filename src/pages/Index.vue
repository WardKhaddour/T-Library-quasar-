<template>
  <q-page class="flex flex-center bg-img"></q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
<style scoped>
.bg-img {
  background-image: url(../assets/background.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.bg-img::before {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.9;
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
