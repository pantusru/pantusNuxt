<template>
    <Panel :items="item">
        <template v-slot:input>
                <VueInput :data="data" :KolvoVisible="KolvoVisible" />
        </template>
        <template v-slot:data>
            <b-form-checkbox-group>  
                <ChexboxCollapse
                    :GetName="GetName"
                    :dataset="data.slice(0,5)"/>
                <!--  ОСтальные   ЗАписей показывающиеся при клике -->
                <b-collapse :id="id">
                        <ChexboxCollapse
                            :GetName="GetName"
                            :dataset="data.slice(5)" />
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
    props:["data", "id", "item", "GetName" , "KolvoVisible"],
    components:{
        Panel,
        ChexboxCollapse,
        VueInput
    },
}
</script>

<style>

</style>