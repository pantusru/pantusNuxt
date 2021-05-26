<template>
  <header>
    <div v-if="!TypeUser" class="">
      <div class="bg-danger w-100 z-index-top p-2">
        <div class="container">
          <div href="https://proavtozap.ru/" class="fz-4 text-white">
            Для оформления рознчного заказа, пожалуйста, воспользуйтесь сайтом
            <a href="https://proavtozap.ru/" class="text-white text-decoration"
              ><b>proavtozap.ru</b></a
            >
          </div>
        </div>
      </div>
    </div>
    <VueNavTop />
    <VueNav />
    <VueNavBottom />
    <nav-mobile />
    <nav-mobile-avto />
    <nav-mobile-about />
  </header>
</template>

<script>
import VueNavTop from "@/components/header/header-nav/navtop";
import VueNavBottom from "@/components/header/header-nav/nav-bottom";
import VueNav from "@/components/header/header-nav/index";
import NavMobile from "@/components/header/header-nav/mobule/nav-mobile-index";
import NavMobileAvto from "@/components/header/header-nav/mobule/nav-mobile-avto";
import NavMobileAbout from "@/components/header/header-nav/mobule/nav-mobile-about";
import typeUser from "~/mixins/typeUser";
export default {
  name: "TheHeader",
  components: {
    NavMobileAbout,
    NavMobileAvto,
    NavMobile,
    VueNavTop,
    VueNav,
    VueNavBottom,
  },
  mixins: [typeUser],
};
</script>
<style>
.mb-100 {
  margin-bottom: 100px;
}
</style>
