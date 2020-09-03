<template>
    <b-form-checkbox-group v-model="chexbox" class="mb-3 overflow">    
        <div class="d-flex flex-column">
            <b-form-checkbox 
                :value="dataset.id" class="mb-2"
                v-for="dataset in SearchElem" 
                :key="dataset.id">
                    {{dataset.name}}
            </b-form-checkbox>
        </div>
    </b-form-checkbox-group>
</template>

<script>
export default {
    props:["SearchElem"],
    computed: {
        chexbox:{
            get() {
                return this.$store.getters[this.GetChecbox]; 
            },
            set(value){
                this.$store.commit(this.SetChecbox, value);
            }
        }
    },
}

</script>

<style>

</style>