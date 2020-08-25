<template>
    <div class="d-flex flex-column">  
        <div v-for="data in dataset" :key="data.id" >
            <div class="min-h-auto"  v-if="data.visible != false">
                <Collapse 
                    :GetName="GetName"
                    :id="data.id.toString()"
                    :childrenAll="data.childrenAll"
                    :name="data.name" 
                    :flavours="data.children"  v-if="data.children.length != 0" />
                <VueChexbox :dataset="data" v-if="data.children.length === 0" />
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
        "dataset","GetName"
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