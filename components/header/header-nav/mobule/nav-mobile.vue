<template>
  <b-container>
    <b-collapse is-nav id="nav-collapse-mobile" class="nav-mobile pl-5 pb-3 d-lg-none">
      <b-navbar-nav class="py-1">
        <b-nav-item  class="nav-item-mobile" v-b-toggle.nav-mobile-avto>Автозапчасти</b-nav-item>
        <b-nav-item to="" class="nav-item-mobile">О компании</b-nav-item>
        <b-nav-item to="" class="nav-item-mobile">Новости</b-nav-item>
        <b-nav-item to="" class="nav-item-mobile">Помощь</b-nav-item>
        <b-nav-item to="" class="nav-item-mobile">Контакты</b-nav-item>
        <b-nav-item to="" class="nav-item-mobile">Новинки</b-nav-item>
        <div class="nav-mobile-blog-tlf nav-item-mobile">
          <b class="nav-mobile-link-tfl d-block"><a href="tel:88005558721" class="text-515151">8 (800) 555-87-21</a></b>
          <span class="nav-mobile-text-tfl">Звонок по РФ -  бесплатный</span>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-container>
</template>

<script>
export default {
  name: "nav-mobile"
}
</script>

<style>
.nav-mobile {
  position: absolute;
  background-color: #fff;
  width: 100%;
  left: 0;
}

#nav-collapse-mobile {
  z-index: 100;
}

.nav-mobile-link-tfl {
  font-size: 22px;
}

.nav-mobile-blog-tlf {
  /*background: #eee;*/
}

.nav-mobile-text-tfl {

}

.nav-item-mobile {
  text-decoration: none !important;
  color: #000;
  margin-bottom: 10px;
}
</style>
