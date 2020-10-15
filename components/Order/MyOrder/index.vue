<template>
  <div class="mt-4">
      <!--  компонент -->
    <div class="mb-3">
      <div class="d-flex justify-content-between">
        <div>
          <h4 class="mb-2 text-decoration">Заказ №<span> 1234 </span></h4>
          <time datetime=" 24.09.2020 " class="d-block"> 24.09.2020 </time>
          <nuxt-link class="text-my-body text-decoration-none" to="">Скопировать заказ в корзину</nuxt-link>
        </div>
        <div>
          <div class="mb-2"><b>Статус заказа:</b><span> Обрабатывается </span></div>
          <nuxt-link to="">Отменить заказ</nuxt-link>
        </div>
      </div>
    </div>
     <!--  компонент -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>