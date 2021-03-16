<template>
  <b-col cols="12" lg="3" md="6">
    <h6 class="mb-3"><b>Доставка</b></h6>
    <div class="mb-4">
      <nuxt-link to="/delivery">
        <img
          :src="require('@/assets/img/footer/car-footer.png')"
          class="wrapper-icons-delivery mb-2"
        />
      </nuxt-link>
    </div>
    <p>
      {{ text }}
    </p>
    <nuxt-link to="/delivery">Подробнее</nuxt-link>
  </b-col>
</template>

<script>
export default {
  name: "footer-delivery-get",
  data() {
    return {
      text:
        "Доставляем запчасти по всему миру с помощью собственного транспорта, Почты РФ и любых других служб доставки, доступных в нашей стране. Мы бесплатно отвозим заказы в 140 городов РФ и не берем деньги за доставку до терминала транспортной компании.",
    };
  },
};
</script>
<style>
.w-20 {
  width: 20%;
}
</style>
