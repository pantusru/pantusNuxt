<template>
<header>
    <VueNavTop/>
    <VueNav/>
    <VueNavBottom/>
</header>
</template>

<script>
import VueNavTop from "../Header/Nav/Navtop"
import VueNavBottom from "../Header/Nav/NavBottom"
import VueNav from "../Header/Nav/Index"
export default {
    name: "Header",
    components:{
        VueNavTop,
        VueNav,
        VueNavBottom
    } 
}
</script>