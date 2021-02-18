<template>
  <b-col cols="12" lg="4" md="6">
    <h6 class="mb-3"><b>Оплата</b></h6>
    <b-row no-gutters class="mb-4 flex-nowrap">
      <!--      <a class="mr-4" v-for="data in linksImg" :key="data.id" :href="data.href">-->
      <div
        class="mr-4 wrapper-icons-footer"
        :class="data.class"
        v-for="data in linksImg"
        :key="data.id"
      >
        <img :src="data.src" :alt="data.alt" class="" />
      </div>
      <!--      </a>-->
    </b-row>
    <p class="mb-3">
      {{ text }}
    </p>
    <nuxt-link to="pay/" class="mb-3 d-block">Подробнее</nuxt-link>
    <b-row no-gutters class="flex-nowrap">
      <div
        v-for="data in linksImgManu"
        :key="data.id"
        class="mr-4 wrapper-icons-footer"
        :class="data.class"
      >
        <img :src="data.src" :alt="data.alt" />
      </div>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: "FooterPayment",
  data() {
    return {
      linksImg: [
        {
          src: require("@img/footer/cards.png"),
          href: "",
          alt: "cards",
          class: "wrapper-icons-vista_mir",
        },
        {
          src: require("@img/footer/cash.png"),
          href: "",
          alt: "cash",
          class: "wrapper-icons-cash",
        },
        {
          src: require("@img/footer/bank.png"),
          href: "",
          alt: "bank",
          class: "wrapper-icons-bank",
        },
      ],
      linksImgManu: [
        {
          src: require("@img/footer/paypal.png"),
          href: "",
          alt: "paypal",
          class: "wrapper-icons-paypal",
        },
        {
          src: require("@img/footer/yandexmoney.png"),
          href: "",
          alt: "yandexmoney",
          class: "wrapper-icons-payment_system",
        },
        {
          src: require("@img/footer/webmoney.png"),
          href: "",
          alt: "webmoney",
          class: "wrapper-icons-payment_system",
        },
        {
          src: require("@img/footer/qiwi.png"),
          href: "",
          alt: "qiwi",
          class: "wrapper-icons-payment_system",
        },
      ],
      text:
        "Мы принимаем банковские карты Visa, MasterCard и Мир. А также предлагаем 10 других безопасных способов оплаты, включая безналичный расчет, электронные деньги и салоны связи. Возможна оплата товара при получении и отсрочка платежа.",
    };
  },
};
</script>
<style lang="sass"></style>
