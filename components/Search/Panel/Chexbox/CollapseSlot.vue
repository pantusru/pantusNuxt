<template>
    <div v-if="dataset.visible != undefined">
        <Collapse :dataset="dataset" v-if="dataset.children != undefined" />
        <VueChexbox :dataset="dataset" v-if="dataset.children === undefined" />
    </div>
</template>

<script>
import Collapse from "./Collapse"
import VueChexbox from "./chexbox"
export default {
    name: "ChexboxCollapse",
    props:[   
        "dataset"
    ],
    components:{
        VueChexbox,
        Collapse
    }
}
</script>

<style>
    .min-h-auto{
        min-height: auto;
    }
</style>