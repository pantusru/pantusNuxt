<template>
    <Panel :items="item">
        <template v-slot:input>
                <VueInput :data="data"/>
        </template>
        <template v-slot:data>
            <b-form-checkbox-group class="mb-3">  
                <div class="d-flex flex-column">  
                    <ChexboxCollapse
                        :dataset="dataset"
                        v-for="dataset in data.slice(0,5)" 
                        :key="dataset.id"/>
                </div>
                <!--  ОСтальные   ЗАписей показывающиеся при клике -->
                <b-collapse :id="id">
                    <div class="d-flex flex-column">
                        <ChexboxCollapse
                            :dataset="dataset"
                            v-for="dataset in data.slice(5)" 
                            :key="dataset.id" />
                    </div>
                </b-collapse>
            </b-form-checkbox-group>
        </template>
        <!-- ПЕРЕДЕЛАТЬ ЛОГИКУ -->
        <template v-slot:button>
            <b-button variant="white" class="link-danger" v-b-toggle="id" v-if="data.length > 5" >
                <span class = "when-closed">Показать еще</span>
                <span class = "when-open">Скрыть</span>
            </b-button>
        </template>
        <!-- ПЕРЕДЕЛАТЬ ЛОГИКУ -->
    </Panel>
</template>

<script>
import Panel from "../index"
import VueInput from "../Input/index"
import ChexboxCollapse from "../Chexbox/CollapseSlot"
export default {
    props:["data", "id", "item"],
    components:{
        Panel,
        ChexboxCollapse,
        VueInput
    },
}
</script>

<style>

</style>