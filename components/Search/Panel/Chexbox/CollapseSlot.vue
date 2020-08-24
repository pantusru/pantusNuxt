<template>
    <div class="d-flex flex-column">  
        <div v-for="data in dataset" :key="data.id" >
            <div class="min-h-auto"  v-if="data.visible != undefined">
                <Collapse 
                    :id="data.id.toString()"
                    :name="data.name" 
                    :flavours="data.children"  v-if="data.children != undefined" />
                <VueChexbox :dataset="data" v-if="data.children === undefined" />
            </div>
        </div>
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