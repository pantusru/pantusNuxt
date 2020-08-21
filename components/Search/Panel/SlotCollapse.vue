<template>
    <Panel :items="item">
        <template v-slot:input>
             <b-input v-model="search" class="mb-3" placeholder="Поиск"></b-input>
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
import Panel from "./index"
import ChexboxCollapse from "./ChexboxCollapse"
export default {
    props:["data", "id", "SetName", "GetName","AddName", "item", "DeleteName"],
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
        setCheck(data){
            let check = false;
            //  Определяем Массив
            let dataset;
            if(data.length === undefined){
                dataset = [];
                dataset.push(data);
            }else{
                dataset = data;
            }
             //  Прогоняем Массив
            dataset.forEach(element => {
                let visible;
                let name = element.name;
                if(data.children != undefined){ // Есть потомок
                    visible = this.setCheck(data.children);
                }
                if(visible == false) {
                    if( (name.indexOf(this.search) != -1)){
                        visible = true;
                    }else{
                        visible = false;
                    }    
                }
                // ПРОВЕРЯЕМ СТРОКУ
                else if((name.indexOf(this.search) != -1)){
                    visible = true;
                }else{
                   visible = false;
                }
                //  Сохраняем значения
                if(visible){    
                    check = true;
                }
                // alert(check);
                this.$store.commit("Catalog/Visible/SetVisible", {data: element, value: visible});
            });
            return check;
        }
    },
     watch: {
        search() {
            this.setCheck(this.data);
            return this.data;
        },
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