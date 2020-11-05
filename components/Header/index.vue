<template>
<header>
    <VueNavTop/>
    <VueNav/>
    <VueNavBottom/>
</header>
</template>

<script>
import VueNavTop from "@/components/Header/header-nav/Navtop"
import VueNavBottom from "@/components/Header/header-nav/NavBottom"
import VueNav from "@/components/Header/header-nav/Index"
export default {
    name: "Header",
    components:{
        VueNavTop,
        VueNav,
        VueNavBottom
    }
}
</script>
