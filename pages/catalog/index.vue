<template>
  <b-container>
    <div class="catalog-frame">
      <div class="row">
        <div class="col-md-5 mr-3">
          <h2 class="fz-5">
            <nuxt-link to="/catalog/originalpartscatalog">
              Оригинальные каталоги</nuxt-link
            >
          </h2>
        </div>
        <div class="col-md-5 mr-3">
          <h2 class="fz-5">
            <nuxt-link to="/catalog/diski"> Каталог дисков</nuxt-link>
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5 mr-3">
          <h2 class="fz-5">
            <nuxt-link to="/catalog/aftermarket">Каталог аналогов</nuxt-link>
          </h2>
        </div>
        <div class="col-md-5 mr-3">
          <h2 class="fz-5">
            <nuxt-link to="/catalog/kolpaki"> Каталог колпаков</nuxt-link>
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5 mr-3">
          <h2 class="fz-5">
            <nuxt-link to="/catalog/aksessuary"> Каталог аксессуаров</nuxt-link>
          </h2>
        </div>
        <div class="col-md-5 mr-3">
          <h2 class="fz-5">
            <nuxt-link to="/catalog/masla">Каталог масла</nuxt-link>
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5 mr-3">
          <h2 class="fz-5">
            <nuxt-link to="/catalog/akkumulyatory">
              Каталог аккумуляторов</nuxt-link
            >
          </h2>
        </div>
        <div class="col-md-5 mr-3">
          <h2 class="fz-5">
            <nuxt-link to="/catalog/to"> Каталог ТО</nuxt-link>
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5 mr-3">
          <h2 class="fz-5">
            <nuxt-link to="/catalog/bolty"> Каталог болтов, гаек</nuxt-link>
          </h2>
        </div>
        <div class="col-md-5 mr-3">
          <h2 class="fz-5">
            <nuxt-link to="/catalog/shiny"> Каталог шин</nuxt-link>
          </h2>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "IndexVue",
};
</script>
<style>
.catalog-frame a {
  color: #436174;
  font-weight: 600;
  text-decoration: underline;
  margin-bottom: 10px;
  display: block;git fetch origin
git checkout master
}
.catalog-frame a:hover {
  text-decoration: none;
}
</style>
