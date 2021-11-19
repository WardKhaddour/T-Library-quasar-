<template>
  <div class="container">
    <p id="title">T.Library</p>
    <q-form @submit="submitForm" class="q-gutter-md" style="max-width: 400px">
      <q-input
        rounded
        outlined
        bg-color="grey"
        v-model="email"
        placeholder="email"
        lazy-rules
        :rules="[
          (val) =>
            (val && val.length > 0 && val.includes('@') && val.includes('.')) ||
            'Please type valid email',
        ]"
      />

      <q-input
        rounded
        outlined
        bg-color="grey"
        type="password"
        v-model="password"
        placeholder="password"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 6) || 'Please type valid password',
        ]"
      />

      <div>
        <q-btn type="submit" no-caps id="submit">
          <q-spinner color="dark" size="1em" :thickness="2" v-if="isLoading">
          </q-spinner>
          <span class="label text-black" v-if="!isLoading">login</span>
        </q-btn>
      </div>
    </q-form>
  </div>
</template>
<script>
import { api } from "src/boot/axios";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "kub.meggie@example.com",
      password: "password",
      // email: "",
      // password: "",
      passwordVisibilty: "password",
      isLoading: false,
      emailAlert: "",
      passwordAlert: "",
    };
  },
  methods: {
    ...mapActions(["saveUser"]),
    async submitForm() {
      console.log(this.email);
      console.log(this.password);
      try {
        this.isLoading = true;
        let res = await api.post("loginAdmin", {
          email: this.email,
          password: this.password,
        });
        this.isLoading = false;
        console.log(res);
        let token = res.data.token;
        console.log(token);
        this.$store.dispatch("User/saveUser", token);
        // console.log(this.saveUser());
        // this.saveUser(token);
        // this.$store.state.token = token;
        // this.$store.commit("saveUser");
        // console.log(this.$store + "fasfakfasfkasl ");
        this.$router.push({ path: "home" }).catch((error) => {
          console.log(error);
        });
      } catch (error) {
        console.log("asddaksdas");
        this.isLoading = false;
        this.password = "";
        console.log(error);
      }
    },
  },
};
</script>

<style>
body {
  background-image: url("../assets/background.png");
}
.input {
  /* margin: 10px; */
  border-radius: 25px;
  background-color: white;
  opacity: 0.49;
}

#title {
  font-size: 36px;
  color: #ffffff;
  /* justify-content: center; */
}
.container {
  margin-right: 7%;
  margin-top: 10%;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-end;
  text-align: center;
  gap: 26px;
  justify-content: center;
}

#submit {
  padding: 0% 15%;
  margin-top: 5%;
  border-radius: 25px;
  width: fit-content;
  background-color: white;
  opacity: 0.55;
  color: #1f211f;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
}
#submit:hover {
  cursor: pointer;
}
</style>
