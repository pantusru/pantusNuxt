<template>
    <Panel items="Брэнд">
        <template v-slot:input>
             <b-input v-model="search" class="mb-3" placeholder="Поиск"></b-input>
        </template>
        <template v-slot:data>
            <b-form-checkbox-group v-model="chexbox" class="mb-3">    
                <div class="d-flex flex-column">
                    <b-form-checkbox 
                        :value="dataset.id"
                        v-for="dataset in SearchElem.slice(0,5)" 
                        :key="dataset.id">
                            {{dataset.name}}
                    </b-form-checkbox>
                </div>
                <b-collapse :id="id">
                    <div class="d-flex flex-column">
                        <b-form-checkbox :value="dataset.id" class="mb-2"
                            v-for="dataset in SearchElem.slice(5)" 
                            :key="dataset.id">
                                {{ dataset.name}}
                        </b-form-checkbox>
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
import Panel from "../index"
export default {
    props:["data", "id", "SetName", "GetName"],
    components:{
        Panel,
    },
    data(){
        return{
            search: "",
        }
    },
     computed: {
        SearchElem() {
            return this.data.filter(item => item.name.indexOf(this.search) !== -1)
        },
        chexbox:{
            get() {
                return this.$store.getters[this.GetName]; 
            },
            set(value){
                this.$store.commit(this.SetName, value);
            }
        }
    },
}
</script>

<style>

</style>