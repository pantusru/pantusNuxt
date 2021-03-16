<template>
  <div class="row mb-3 mt-3 align-items-center" style="">
    <div class="col-md-2" style="">
      <h4>
        <nuxt-link
          :exact-active-class="'text-decoration-none'"
          to="/contacts"
          class="fz-5"
        >
          Балаково
        </nuxt-link>
      </h4>
    </div>
    <div class="col-md-2" style="">
      <h4>
        <nuxt-link
          :exact-active-class="'text-decoration-none'"
          to="/contacts/moscow/"
          class="fz-5"
          >Москва</nuxt-link
        >
      </h4>
    </div>
    <div class="col-md-2" style="">
      <h4>
        <nuxt-link
          :exact-active-class="'text-decoration-none'"
          to="/contacts/tolyatti/"
          class="fz-5"
          >Тольятти</nuxt-link
        >
      </h4>
    </div>
    <div class="col-md-2" style="">
      <h4>
        <nuxt-link
          :exact-active-class="'text-decoration-none'"
          to="/contacts/astrakhan/"
          class="fz-5"
          >Астрахань</nuxt-link
        >
      </h4>
    </div>
    <div class="col-md-2" style="">
      <h4>
        <nuxt-link
          :exact-active-class="'text-decoration-none'"
          to="/contacts/goroda/"
          class="fz-5"
          >Все города</nuxt-link
        >
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactMenu",
};
</script>

<style>
.container-static a {
  color: #555;
}
.container-static li::before {
  position: absolute;
  color: #c8312b;
  content: "";
  width: 5px;
  height: 5px;
  margin-left: -12px;
  margin-top: 8px;
  border-radius: 5px;
  background: #c8312b;
}
.container-static td {
  padding-right: 15px;
}
.container-static h3 {
  font-size: 18px;
}
</style>
