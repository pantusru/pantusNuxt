<template>
    <b-form-group class="fz-5 border  px-3 py-2 border-light">
        <h3 class="mb-3">{{items}}</h3>  
        <b-input v-model="search" class="mb-3" placeholder="Поиск"></b-input>
        <div class="overflow mb-2 pb-2 d-flex flex-column">
            <!--  ПЕРВЫЕ 5 ЗАписей -->
            <b-form-checkbox :value="dataset.id"  class="mb-2"
                v-for="dataset in SearchElem.slice(0,5)" 
                :key="dataset.id">
                    {{ dataset.name}}
                </b-form-checkbox>
            <!--  ОСтальные   ЗАписей показывающиеся при клике -->
            <b-collapse :id="id">
                <div class="d-flex flex-column">
                   <b-form-checkbox :value="dataset.id" class="mb-2"
                        v-for="dataset in SearchElem.slice(0,5)" 
                        :key="dataset.id">
                            {{ dataset.name}}
                    </b-form-checkbox>
                </div>
            </b-collapse>
        </div>
        <b-button variant="white" class="link-danger" v-b-toggle="id" v-if="SearchElem.length > 5" >
            <span class = "when-closed">Показать еще</span>
            <span class = "when-open">Скрыть</span>
        </b-button>
    </b-form-group>
</template>

<script>
export default {
    data(){
        return{
            search: "",
        }
    },
    methods:{
       
    },
     computed: {
        SearchElem() {
            return this.data.filter(item => item.name.indexOf(this.search) !== -1)
        },
    },
    props:["items", "data", "id"],
}
</script>

<style>
.overflow{
    overflow:auto;
    max-height: 200px;
}
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
</style>