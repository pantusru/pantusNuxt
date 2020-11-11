<template>
  <b-container>
    <b-collapse
      id="nav-mobile-avto"
      is-nav
      class="nav-mobile pl-5 pb-3 d-lg-none"
    >
      <b-navbar-nav class="py-1">
        <b-nav-item to="/brands" class="nav-item-mobile">Бренд</b-nav-item>
        <b-nav-item to="/applicabilities" class="nav-item-mobile">Марка</b-nav-item>
        <b-nav-item to="/categories" class="nav-item-mobile">Применяемость</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-container>
</template>

<script>
export default {
  name: "nav-mobile-avto"
}
</script>

<style>
 #nav-mobile-avto{
   position: absolute;
   z-index:200;
 }
</style>
