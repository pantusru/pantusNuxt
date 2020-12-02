<template>
  <div>
    <base-button text="Подвердить" @click="SetPassword"></base-button>
    <base-alert
      :variant="variant"
      class="w-25"
      :getAlert.sync="getAlert"
      :text="text"
    >
    </base-alert>
  </div>
</template>

<script>
import BaseAlert from "@/components/alert/base-alert";
import BaseButton from "@/components/base/button/base-button";

export default {
  props: {
    $v: {},
  },
  name: "form_button_password_set",
  components: { BaseButton, BaseAlert },
  data() {
    return {
      variant: undefined,
      text: "Пароль успешно изменен!",
      getAlert: false,
    };
  },
  methods: {
    SetPassword() {
      this.$v.Form.$touch();
      if (this.$v.$error === false) {
        console.log(this.$v.Form.$model.password); // передать к API
        console.log(this.$route.query.check_user);
        console.log("Запрос на изменение");
        // Вывести алерт
        if (false) {
          // Все гуд
          this.variant = undefined;
          this.getAlert = true;
          this.text = undefined;
        } else {
          // error
          this.variant = "danger";
          this.text = "Ошибка";
          this.getAlert = true;
        }
      }
    },
  },
};
</script>
