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
    props:["data", "id", "valueName", "item"],
    components:{
        Panel,
        ChexboxCollapse
    },
    data(){
        return{
            search: "",
            chexbox: [],
            ResultSearch:[],
        }
    },
    methods:{
        checkParent(){
            this.ResultSearch = [];
            console.log("----------------------------------------")
            this.data.filter( (item, index) =>{
                if(item.name.indexOf(this.search) !== -1){
                    console.log("Данные с поиском совпадают" + item);
                    this.ResultSearch.push(item);
                }else if(item.children.length > 0){
                    console.log('нету совпадении но есть потомки');
                    this.CheckChildren(item.children);
                }else{
                   console.log('нету совпадении нету потомков'); 
                }
            })
        },
        CheckChildren(dataset){
            dataset.filter( (item, index) =>{
                if(item.name.indexOf(this.search) !== -1){
                    console.log("Данные потомка с поиском совпадают" + item);
                    // this.ResultSearch.push(item);
                }else{
                    console.log("Данные потомка с поиском не совпадают");
                }
            })
        }
    },
    // ДРУГАЯ ЛОГИКА ПОИСКА
     computed: {
        SearchElem() {
            this.checkParent();
            return this.ResultSearch;
        },
    },
    // ДРУГАЯ ЛОГИКА ПОИСКА
    watch:{
        // Метод когда будет отправка на поиск товара или оставлять так!!
        chexbox(){
            this.$store.commit(this.valueName, this.chexbox);
        }
        // 
    }
}
</script>

<style>

</style>