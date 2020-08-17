<template>
    <b-form-checkbox :value="dataset.id" class="min-h-auto">
        <!-- НЕТ потомков -->
        <span v-if="dataset.children.length ===  0">{{dataset.name}}</span> 
        <!-- ЕСТЬ ПОТОМКИ -->
        <b-form-group class="mb-0" v-if="dataset.children.length !=  0">
            <div class="d-flex align-items-center">
                <p> {{dataset.name}}</p>
                <b-button variant="white" class="link-danger p-0" v-b-toggle="String(dataset.id)">
                    <b-icon-chevron-down  font-scale = "0.9"></b-icon-chevron-down>
                </b-button>
            </div>
            <!-- Отображение в массиве потомков -->
            <b-collapse :id="String(dataset.id)">
                <ChexboxCollapse class="pl-3" 
                :dataset="data"
                v-for="data in dataset.children" 
                :key="data.id" />
            </b-collapse> 
        </b-form-group>
    </b-form-checkbox>
</template>

<script>

export default {
    name: "ChexboxCollapse",
    props:[
        "dataset",
    ],

}
</script>

<style>
    .min-h-auto{
        min-height: auto;
    }
</style>