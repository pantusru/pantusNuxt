<template>
        <b-form-checkbox class="min-h-auto mb-2 fz-5_5"
        @change="checxboxGo"
        v-model="dataset.CheckedType"
        :indeterminate="dataset.Indeterminate"
        :id="dataset.id.toString()">
            {{ dataset.name }}
            <slot></slot>
        </b-form-checkbox>
</template>

<script>
export default {
    props:["dataset"],
    inject: ['ArrayData'],
    methods: {
        checxboxGo(){
            this.$store.commit("Catalog/Chexbox/SetChecboxCheckedType", { data: this.dataset, value: !this.dataset.CheckedType });
            this.$store.commit("Catalog/Chexbox/SetChecboxIndeterminate", { data: this.dataset, value: false});
            this.$store.dispatch("Catalog/Chexbox/ChexboxCheckAll" ,
                {arr:this.$store.getters[ this.ArrayData],
                value: this.dataset.CheckedType,
                id:this.dataset.id} );

        }
    },
}
</script>
<style>

</style>
