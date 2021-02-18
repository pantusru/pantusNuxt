<template>
  <div>
    <div>
      <h2 class="fz-3"><b>Нету доступных товаров.</b></h2>
      <h4 class="fz-4">
        Попробуйте найти нужные запчасти с помощью поиска в верхней части
        страницы
      </h4>
      <p>
        Вы можете перейти на
        <nuxt-link to="/" class="text-436174 link-danger"
          >главную страницу</nuxt-link
        >
        или найти нужную информацию в одном из этих разделов:
      </p>
      <div class="row no-gutters flex-column">
        <nuxt-link class="text-436174 link-danger" to="/brands/"
          >Бренды запчастей</nuxt-link
        >
        <nuxt-link class="text-436174 link-danger" to="/carbrands/"
          >Марки автомобилей</nuxt-link
        >
        <nuxt-link class="text-436174 link-danger" to="/categories/"
          >Категории запчастей</nuxt-link
        >
        <nuxt-link class="text-436174 link-danger" to="/catalog">
          Каталог оригинальных запчастей
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product404",
};
</script>

<style scoped></style>
