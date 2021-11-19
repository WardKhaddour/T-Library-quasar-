<template>
  <div>
    <div class="q-pa-md user">
      <q-title class="user-name">
        {{ name }}
      </q-title>
      <q-avatar @click="onMainClick">
        <img src="imgUrl" height="30" width="30" />
        <q-menu transition-show="rotate" transition-hide="rotate">
          <q-list>
            <q-item clickable v-close-popup @click="logOut">
              <q-item-section>
                <q-icon name="logout"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label class="logout-btn">Log Out</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="logOut">
              <q-item-section>
                <q-icon name="logout"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label class="logout-btn">Log Out</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-avatar>
    </div>
    <!-- <q-list v-if="isUserSettingsOpen" class="settings"> -->
    <!-- <EssentialLink
        v-for="setting in userSettings"
        :key="setting.title"
        v-bind="setting"
      /> -->
    <!-- </q-list> -->
  </div>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import { mapActions } from "vuex";
import store from "../store/index";
export default {
  props: ["name", "imgUrl"],
  data() {
    return {
      isUserSettingsOpen: false,
      userSettings: [
        {
          title: "Log Out",
        },
        {
          title: "Account Settings",
        },
        {
          title: "Switch Account",
        },
      ],
    };
  },
  components: {
    // EssentialLink,
  },
  methods: {
    logOut() {
      const myStore = store();
      myStore.dispatch("User/logOut");
      this.$router.back();
    },
    toggleUserSettings() {
      this.isUserSettingsOpen = !this.isUserSettingsOpen;
    },
    onItemClick(method) {
      method === "logOut"
        ? console.log("log out")
        : console.log("another method");
    },
    onMainClick() {},
  },
};
</script>

<style scoped>
* {
  font-size: 120%;
  display: inline-block;
}
.user {
  display: flex;
}
.user-name {
  margin-right: 10px;
}
.logout-btn {
  color: black;
  font-size: 60%;
}
</style>
