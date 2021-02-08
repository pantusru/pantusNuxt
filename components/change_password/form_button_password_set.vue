<template>
  <div>
    <base-button text="Подвердить" @click="SetPassword" />
    <base-alert
      :variant="variant"
      class="w-25"
      :get-alert.sync="getAlert"
      :text="text"
    />
  </div>
</template>

<script>
import BaseAlert from "@/components/alert/base-alert";
import BaseButton from "@/components/base/button/base-button";

export default {
  name: "FormButtonPasswordSet",
  components: { BaseButton, BaseAlert },
  props: {
    $v: {},
  },
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
