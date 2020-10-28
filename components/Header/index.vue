<template>
<header>
    <VueNavTop/>
    <VueNav/>
    <VueNavBottom/>
</header>
</template>

<script>
import VueNavTop from "@/components/Header/Nav/Navtop"
import VueNavBottom from "@/components/Header/Nav/NavBottom"
import VueNav from "@/components/Header/Nav/Index"
export default {
    name: "Header",
    components:{
        VueNavTop,
        VueNav,
        VueNavBottom
    } 
}
</script>