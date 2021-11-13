<template>
  <q-item>
    <q-item-section>
      <q-icon id="user-img" name="person" @click="toggleUserSettings"></q-icon>
    </q-item-section>
    <q-item-section>
      <q-item-lable>{{ name }}</q-item-lable>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: ["name", "imgUrl"],
  methods: {
    toggleUserSettings() {
      console.log("open user settings");
    },
  },
};
</script>

<style scoped>
* {
  font-size: 120%;
  display: inline-block;
}
#user-img {
  background-color: grey;
  padding: 2%;
  margin: 2%;
  color: #fff;
  border-radius: 45px;
  border-color: black;
}
#user-img:hover {
  cursor: pointer;
  font-size: 130%;
  background-color: black;
}
</style>
