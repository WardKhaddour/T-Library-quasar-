<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-grey-6">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> T Library </q-toolbar-title>
        <user name="user name"></user>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      class="bg-grey-6"
      id="drawer"
      show-if-above
      bordered
    >
      <div class="header">
        <q-icon name="account_balance" id="main-icon" />
        <div id="sideNavBarTitle">T.library</div>
        <div id="sideNavBarSubtitle">cacaca</div>
      </div>
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <div class="account-settings">
          <EssentialLink v-bind="ass" />
          <q-icon
            class="arrow-icon"
            :class="{
              'flip-icon-forward': accoutSettingsOpen,
              'flip-icon-backward': !accoutSettingsOpen,
            }"
            name="arrow_upward"
            @click="toggleAccountSettings"
          ></q-icon>
        </div>
        <div class="account-settings-selections" v-show="accoutSettingsOpen">
          <q-icon class="account-settings-item" name="edit"></q-icon>
          <q-icon class="account-settings-item" name="email"></q-icon>
          <q-icon class="account-settings-item" name="lock"></q-icon>
          <q-icon class="account-settings-item" name="phone"></q-icon>
          <q-icon class="account-settings-item" name="home"></q-icon>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import User from "components/User.vue";
const linksList = [
  {
    title: "Home",
    // caption: 'quasar.dev',
    icon: "home",
    // link: 'https://quasar.dev'
  },
  {
    title: "manage books",
    // caption: 'github.com/quasarframework',
    icon: "library_books",
    // link: 'https://github.com/quasarframework'
  },
  {
    title: "manage users",
    // caption: 'chat.quasar.dev',
    icon: "people_outline",
    // link: 'https://chat.quasar.dev'
  },
  {
    title: "requests",
    // caption: 'forum.quasar.dev',
    icon: "request_quote",
    // link: 'https://forum.quasar.dev'
  },
  {
    title: "library settings",
    // caption: '@quasarframework',
    icon: "settings",
    // link: 'https://twitter.quasar.dev'
  },
  // {
  //   title: "account settings",
  //   // caption: '@QuasarFramework',
  //   icon: "manage_accounts",
  //   // link: 'https://facebook.quasar.dev'
  // },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      ass: {
        title: "account settings",
        // caption: '@QuasarFramework',
        icon: "manage_accounts",
        // link: 'https://facebook.quasar.dev'
      },
      accoutSettingsOpen: false,
    };
  },
  components: {
    EssentialLink,
    user: User,
  },
  methods: {
    toggleAccountSettings() {
      this.accoutSettingsOpen = !this.accoutSettingsOpen;
    },
  },
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style scoped>
.header {
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px;
  column-gap: 10px;
  margin: 5% 2%;
}
.arrow-icon {
  color: #fff;
  font-size: 150%;
  position: relative;
  margin: auto auto;
}
.flip-icon-forward {
  animation: rotateForward;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.flip-icon-backward {
  animation: rotateBackward;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.arrow-icon:hover {
  cursor: pointer;
  background-color: #000;
}
.account-settings {
  display: flex;
}
.account-settings-selections {
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 150%;
  margin: 2%;
}
.account-settings-item {
  margin: 2%;
}
#sideNavBarTitle {
  margin: 3%;
  margin-bottom: 1%;
  font-size: 150%;
}
#sideNavBarSubtitle {
  margin: 3%;
  margin-top: 0;
}
#main-icon {
  font-size: 500%;
}
@keyframes rotateForward {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}
@keyframes rotateBackward {
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
