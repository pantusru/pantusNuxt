<template>
  <b-form class="pt-3">
    <vInput
      :$v="$v"
      items="Фамилия:"
      name="surname"
      :error="error['surname']"
    />
    <vInput :$v="$v" items="Имя:" name="name" :error="error['name']" />
    <vInput
      :$v="$v"
      vmask="+7(###) ###-##-##"
      items="Телефон:"
      name="telephone"
      :name="'telephone'"
      :error="error['telephone']"
    />
    <Town :$v="$v" items="Город:" name="Town" :error="error['Town']" />
    <BaseTextareaValid
      class=""
      :$v="$v"
      items="Адрес:"
      name="companyAddress"
      :error="error['companyAddress']"
    />
    <div v-if="UserStatus === 'wholesale'">
      <!--      <vInput-->
      <!--        :$v="$v"-->
      <!--        items="Страна"-->
      <!--        name="companyCountry"-->
      <!--        :error="error['companyCountry']"-->
      <!--      />-->
      <vInput
        :$v="$v"
        items="Название:"
        name="companyName"
        :error="error['companyName']"
      />
      <!--      <vInput $v="$v"  items="Страна"></vInput>-->
    </div>
  </b-form>
</template>

<script>
import mixitError from "@/mixins/form/order/contact/error";
import vInput from "@/components/order/order-input/index";
// import vInput from "@/components/base/base-input-valid";
import Town from "@/components/order/order-input/town";
import BaseTextareaValid from "@/components/base/base-textarea-valid";
export default {
  components: {
    vInput,
    Town,
    BaseTextareaValid,
  },
  mixins: [mixitError],
  props: {
    $v: {},
  },
  computed: {
    UserStatus() {
      return this.$store.getters["User/FormData"].type;
    },
  },
};
</script>
