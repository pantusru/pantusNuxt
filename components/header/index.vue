<template>
<header class="position-relative">
    <VueNavTop/>
    <VueNav/>
    <VueNavBottom/>
    <nav-mobile></nav-mobile>
    <nav-mobile-avto></nav-mobile-avto>

</header>
</template>

<script>
import VueNavTop from "@/components/header/header-nav/navtop"
import VueNavBottom from "@/components/header/header-nav/nav-bottom"
import VueNav from "@/components/header/header-nav/index"
import NavMobile from "@/components/header/header-nav/mobule/nav-mobile";
import NavMobileAvto from "@/components/header/header-nav/mobule/nav-mobile-avto";
export default {
    name: "Header",
    components:{
      NavMobileAvto,
      NavMobile,
        VueNavTop,
        VueNav,
        VueNavBottom
    }
}
</script>
