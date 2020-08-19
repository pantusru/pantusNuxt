<template>
    <Panel :items="item">
        <template v-slot:input>
             <b-input v-model="search" class="mb-3" placeholder="Поиск"></b-input>
        </template>
        <template v-slot:data>
            <b-form-checkbox-group v-model="chexbox" class="mb-3">  
                <div class="d-flex flex-column">  
                    <ChexboxCollapse  class="mb-2"
                        :dataset="dataset"
                        v-for="dataset in SearchElem.slice(0,5)" 
                        :key="dataset.id"/>
                </div>
                <!--  ОСтальные   ЗАписей показывающиеся при клике -->
                <b-collapse :id="id">
                    <div class="d-flex flex-column">
                        <ChexboxCollapse class="mb-2"
                            :dataset="dataset"
                            v-for="dataset in SearchElem.slice(5)" 
                            :key="dataset.id"/>
                    </div>
                </b-collapse>
            </b-form-checkbox-group>
        </template>
        <template v-slot:button>
            <b-button variant="white" class="link-danger" v-b-toggle="id" v-if="SearchElem.length > 5" >
                <span class = "when-closed">Показать еще</span>
                <span class = "when-open">Скрыть</span>
            </b-button>
        </template>
    </Panel>
</template>

<script>
import Panel from "./index"
import ChexboxCollapse from "./ChexboxCollapse"
export default {
    props:["data", "id", "SetName", "GetName", "item"],
    components:{
        Panel,
        ChexboxCollapse
    },
    data(){
        return{
            search: "",
            ResultSearch:[],
        }
    },
    methods:{
    },
     computed: {
        SearchElem() {
            return this.data.filter(item => item.name.indexOf(this.search) !== -1);
        },
        chexbox:{
            get() {
                return this.$store.getters[this.GetName]; 
            },
            set(value){
                this.$store.commit(this.SetName, value);
                console.log(this.$store.getters[this.GetName]);
            }
        }
    },
}
</script>

<style>

</style>