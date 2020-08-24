<template>
    <div v-if="dataset.visible != undefined" class="min-h-auto">
        <Collapse 
            :id="dataset.id.toString()"
            :name="dataset.name" 
            :flavours="dataset.children"  v-if="dataset.children != undefined" />
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
    },
}
</script>

<style>
    .min-h-auto{
        min-height: auto;
    }
</style>