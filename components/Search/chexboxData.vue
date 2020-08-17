<template>
    <b-form-group class="mb-3">
        <h3 class="mb-3">{{items}}</h3>  
        <b-input v-model="search" class="mb-2" placeholder="Поиск"></b-input>
        <div class="overflow mb-2">
            <!--  ПЕРВЫЕ 5 ЗАписей -->
            <b-form-checkbox :value="dataset.id" v-model="checkbox" v-for="dataset in SearchElem.slice(0,5)" :key="dataset.id">
            {{dataset.name}}
            </b-form-checkbox>
            <!--  ОСтальные   ЗАписей показывающиеся при клике -->
            <b-collapse :id="id">
                <b-form-checkbox v-model="checkbox" :value="dataset.id" v-for="dataset in SearchElem.slice(5)" :key="dataset.id">
                {{dataset.name}}
                </b-form-checkbox>
            </b-collapse>
        </div>
        <b-button variant="white" class="link-danger" v-b-toggle="id" v-if="SearchElem.length > 5" >Показать еще</b-button>
    </b-form-group>
</template>

<script>
export default {
    data(){
        return{
            search: "",
            checkbox:[],
        }
    },
     computed: {
        SearchElem() {
            return this.data.filter(item => item.name.indexOf(this.search) !== -1)
        },
    },
    props:["items", "data", "id"]
}
</script>

<style>
.overflow{
    overflow:scroll;
    max-height: 200px;
}
</style>