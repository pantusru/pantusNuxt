<template>
    <b-form-checkbox :value="dataset.id" class="min-h-auto" :data-level="dataset.level"  @change="getStatus()">
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
        checkParent(elem){
            if(elem.dataset.parent != null){
                this.$store.commit(this.SetName, elem.dataset.parent );
                console.log(elem);
                let parend = elem.$parent.$parent.$parent.$parent; // добираемся до следующего chexbox
                this.checkParent(parend);
            }
        },
        getStatus(){
            if(this.dataset.parent != null){// Есть родитель
                this.checkParent(this);
            }
            if(this.dataset.children != undefined ){// Есть потомок
            }
        }
    }
}
</script>

<style>
    .min-h-auto{
        min-height: auto;
    }
</style>