<template>
    <Panel :items="item">
        <template v-slot:input>
                <VueInput :data="data"/>
        </template>
        <template v-slot:data>
            <b-form-checkbox-group v-model="chexbox" class="mb-3">  
                <div class="d-flex flex-column">  
                    <ChexboxCollapse  class="mb-2"
                        :dataset="dataset" :SetName="AddName" :DeleteName="DeleteName"
                        v-for="dataset in data.slice(0,5)" 
                        :key="dataset.id"/>
                </div>
                <!--  ОСтальные   ЗАписей показывающиеся при клике -->
                <b-collapse :id="id">
                    <div class="d-flex flex-column">
                        <ChexboxCollapse class="mb-2"
                            :dataset="dataset"  :SetName="AddName" :DeleteName="DeleteName"
                            v-for="dataset in data.slice(5)" 
                            :key="dataset.id"/>
                    </div>
                </b-collapse>
            </b-form-checkbox-group>
        </template>
        <template v-slot:button>
            <b-button variant="white" class="link-danger" v-b-toggle="id" v-if="data.length > 5" >
                <span class = "when-closed">Показать еще</span>
                <span class = "when-open">Скрыть</span>
            </b-button>
        </template>
    </Panel>
</template>

<script>
import Panel from "../index"
import VueInput from "../Input/index"
import ChexboxCollapse from "../ChexboxCollapse"
export default {
    props:["data", "id", "SetName", "GetName","AddName", "item", "DeleteName"],
    components:{
        Panel,
        ChexboxCollapse,
        VueInput
    },
    computed:{    
        chexbox:{
            get() {
                return this.$store.getters[this.GetName]; 
            },
            set(value){
                this.$store.commit(this.SetName, value);
            }
        },
    },
}
</script>

<style>

</style>