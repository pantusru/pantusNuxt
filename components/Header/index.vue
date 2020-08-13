<template>
<header>
    <VueNavTop/>
    <VueNav/>
    <VueNavBottom/>
</header>
</template>

<script>
import VueNavTop from "../Header/Nav/navtop"
import VueNavBottom from "../Header/Nav/navBottom"
import VueNav from "../Header/Nav/index"
export default {
    components:{
        VueNavTop,
        VueNav,
        VueNavBottom
    } 
}
</script>

<style>

</style>