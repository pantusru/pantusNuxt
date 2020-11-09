<template>
  <b-navbar toggleable="lg" class="d-lg-none navbar-mobile">
    <b-navbar-toggle target="nav-collapse-mobile"></b-navbar-toggle>
    <b-collapse id="nav-collapse-mobile" is-nav class="">
      <b-navbar-nav class="py-1">
        <b-nav-item class="nav-item-mobile">Автозапчасти</b-nav-item>
        <b-nav-item class="nav-item-mobile">О компании</b-nav-item>
        <b-nav-item class="nav-item-mobile">Новости</b-nav-item>
        <b-nav-item class="nav-item-mobile">Помощь</b-nav-item>
        <b-nav-item class="nav-item-mobile">Контакты</b-nav-item>
        <b-nav-item class="nav-item-mobile">Новинки</b-nav-item>
        <b-nav-item>
          <div class="nav-mobile-blog-tlf">
            <b class="nav-mobile-link-tfl d-block"><a href="tel:88005558721" class="text-515151">8 (800) 555-87-21</a></b>
            <span class="nav-mobile-text-tfl">Звонок по РФ -  бесплатный</span>
          </div>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
name: "nav-mobile"
}
</script>

<style>
#nav-collapse-mobile{
  padding-left: 15px;
  padding-top: 10px;
  position: absolute;
  top: 50px;
  z-index: 100;
  background-color: #fff;
  width: 80vw;
  left: 0;
}
.nav-mobile-link-tfl{
  font-size: 22px;
}
.nav-mobile-blog-tlf{
  /*background: #eee;*/
}
.nav-mobile-text-tfl{

}
.nav-item-mobile{

}
</style>
