<template>
    <b-form-checkbox :value="dataset.id" class="min-h-auto" :data-level="dataset.level"  @change="checkClilndren()">
        <!-- НЕТ потомков -->
        <span v-if="dataset.children ==  undefined">{{dataset.name}}</span> 
        <!-- ЕСТЬ ПОТОМКИ -->
        <b-form-group class="mb-0" v-if="dataset.children !=  undefined">
            <div class="d-flex align-items-center">
                <p> {{dataset.name}}</p>
                <b-button variant="white" class="link-danger p-0" v-b-toggle="String(dataset.id)">
                    <b-icon-chevron-down  font-scale = "0.9"></b-icon-chevron-down>
                </b-button>
            </div>
            <!-- Отображение в массиве потомков -->
            <b-collapse :id="String(dataset.id)">
                <div class="d-flex flex-column">
                    <ChexboxCollapse class="pl-3" 
                    :dataset="data"  :SetName="SetName" :DeleteName="DeleteName"
                    v-for="data in dataset.children" 
                    :key="data.id" />
                </div>
            </b-collapse> 
        </b-form-group>
    </b-form-checkbox>
</template>

<script>

export default {
    name: "ChexboxCollapse",
    props:[   
        "dataset", "SetName", "DeleteName",
    ],
    methods:{
        checkClilndren(elem=this){
            console.log(elem);
        },
    }
}
</script>

<style>
    .min-h-auto{
        min-height: auto;
    }
</style>