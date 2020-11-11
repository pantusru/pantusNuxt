<template>
<header>
    <VueNavTop/>
    <VueNav/>
    <VueNavBottom/>
</header>
</template>

<script>
import VueNavTop from "@/components/header/header-nav/navtop"
import VueNavBottom from "@/components/header/header-nav/nav-bottom"
import VueNav from "@/components/header/header-nav/index"
export default {
    name: "Header",
    components:{
        VueNavTop,
        VueNav,
        VueNavBottom
    }
}
</script>
