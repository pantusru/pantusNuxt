<template>
  <div class="col-4 text-center">
    <b-button @click="go" size="md" class="bg-danger border-danger"
      >Зарегистрироваться</b-button
    >
  </div>
</template>

<script>
export default {
  inject: ["$v"],
  methods: {
    go() {
      this.$v.Form.$touch();
      if (this.$v.Form.$error === false) {
        // Временное решение
        this.$store.commit("User/SetFull", {
          name: "login",
          value: this.$v.Form.$model.email,
        });
        this.$store.commit("User/SetFull", {
          name: "name",
          value: this.$v.Form.$model.name,
        });
        this.$store.commit("User/SetFull", {
          name: "surname",
          value: this.$v.Form.$model.surname,
        });
        this.$store.commit("User/SetFull", {
          name: "tlf",
          value: this.$v.Form.$model.telephone,
        });
        this.$store.commit("User/SetFull", {
          name: "id",
          value: 1,
        });

        this.$cookies.set("Authorization", this.$v.Form.$model.email);
        this.$store.commit("User/AuthorizationTrue");
        this.$router.push({name:"index"});
      }
    },
  },
};
</script>

