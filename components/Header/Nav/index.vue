<template>
 <div class="container">
  <b-navbar toggleable="lg">
    <b-navbar-brand to="/"><img src="~assets/img/logo.png" alt=""></b-navbar-brand>
      <!-- center -->
        <b-navbar-nav class="flex-row col-12 col-lg-6 order-4 order-lg-0 mt-2 mt-lg-0">
            <input  class=" border-danger w-100 p-2 rounded-left bl-0" placeholder="Введите номер или название детали"/>
            <button   class="bg-danger px-2 border-danger rounded-right text-light" type="submit">Найти</button>
        </b-navbar-nav>
        <!-- right -->
      <b-navbar-nav class="ml-0 ml-lg-auto flex-row fz-5">
        <div class="d-flex mr-5 align-items-center">
            <div class="icons-nav"><img src="~/assets/img/icons/icon-avatar.png" alt=""/></div>
            <div class="d-flex flex-column ml-3">
                <nuxt-link to="" class="text-secondary link-danger">Вход</nuxt-link>
                <nuxt-link to="" class="text-secondary link-danger">Регистрация</nuxt-link>
            </div>
        </div>
        <div class="d-flex align-items-center">
            <div class="icons-nav"><img src="~/assets/img/icons/icon-shopping-cart.png" alt=""/></div>
            <div class="d-flex flex-column ml-3 text-secondary">
                <div><span>Корзина</span><b>: 2</b></div>
                <strong>1200 р</strong>
            </div>
        </div>
      </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
export default {

}
</script>

<style>
    .icons-nav{
        width: 20px;
    }
</style>