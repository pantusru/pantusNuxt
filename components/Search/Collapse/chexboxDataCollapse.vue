<template>
    <b-form-group class="fz-5 border  px-3 py-2 border-light">
        <h3 class="mb-3">{{items}}</h3>  
        <b-input v-model="search" class="mb-3" placeholder="Поиск"></b-input>
        <div class="overflow mb-2 pb-2 d-flex flex-column">
            <!--  ПЕРВЫЕ 5 ЗАписей -->
            <ChexboxCollapse  class="mb-2"
                :dataset="dataset"
                v-for="dataset in SearchElem.slice(0,5)" 
                :key="dataset.id"/>
            <!--  ОСтальные   ЗАписей показывающиеся при клике -->
            <b-collapse :id="id">
                <div class="d-flex flex-column">
                    <ChexboxCollapse class="mb-2"
                    :dataset="dataset"
                    v-for="dataset in SearchElem.slice(5)" 
                    :key="dataset.id"/>
                </div>
            </b-collapse>
        </div>
        <b-button variant="white" class="link-danger" v-b-toggle="id" v-if="SearchElem.length > 5" >{{ text}}</b-button>
    </b-form-group>
</template>

<script>
import ChexboxCollapse from "./ChexboxCollapse"
export default {
    data(){
        return{
            search: "",
            getAll: false,
            text: "Показать еще"
        }
    },
    methods:{
        bntText(){
            this.text = "Скрыть"
        }
    },
     computed: {
        SearchElem() {
            return this.data.filter(item => item.name.indexOf(this.search) !== -1)
        },
    },
    props:["items", "data", "id"],
    components:{
        ChexboxCollapse,
    }
}
</script>

<style>
.overflow{
    overflow:auto;
    max-height: 200px;
}
</style>