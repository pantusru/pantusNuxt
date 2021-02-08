<template>
  <b-col cols="12" lg="4" md="6">
    <h6 class="mb-3"><b>Оплата</b></h6>
    <b-row no-gutters class="mb-4 flex-nowrap">
      <!--      <a class="mr-4" v-for="data in linksImg" :key="data.id" :href="data.href">-->
      <div class="mr-4" v-for="data in linksImg" :key="data.id">
        <img :src="data.src" :alt="data.alt" />
      </div>
      <!--      </a>-->
    </b-row>
    <p class="mb-3">
      {{ text }}
    </p>
    <nuxt-link to="pay/" class="mb-3 d-block">Подробнее</nuxt-link>
    <b-row no-gutters class="flex-nowrap">
      <div v-for="data in linksImgManu" :key="data.id" class="mr-4">
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
        { src: require("@img/footer/cards.png"), href: "", alt: "11" },
        { src: require("@img/footer/cash.png"), href: "", alt: "22" },
        { src: require("@img/footer/bank.png"), href: "", alt: "33" },
      ],
      linksImgManu: [
        { src: require("@img/footer/paypal.png"), href: "", alt: "11" },
        { src: require("@img/footer/yandexmoney.png"), href: "", alt: "22" },
        { src: require("@img/footer/webmoney.png"), href: "", alt: "33" },
        { src: require("@img/footer/qiwi.png"), href: "", alt: "33" },
      ],
      text:
        "Мы принимаем банковские карты Visa, MasterCard и Мир. А также предлагаем 10 других безопасных способов оплаты, включая безналичный расчет, электронные деньги и салоны связи. Возможна оплата товара при получении и отсрочка платежа.",
    };
  },
};
</script>
