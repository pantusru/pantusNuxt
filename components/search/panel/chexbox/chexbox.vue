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
    inject: ['ArrayData'], // Асуждаю
    methods: {
        checxboxGo(){
            this.$store.commit("Catalog/Chexbox/SetChecboxCheckedType", { data: this.dataset, value: !this.dataset.CheckedType }); // Изменить состояние
            this.$store.commit("Catalog/Chexbox/SetChecboxIndeterminate", { data: this.dataset, value: false}); // 3 состоияние в false
            this.$store.dispatch("Catalog/Chexbox/ChexboxCheckAll" , //Изменить состояние всем элементам
                {arr:this.$store.getters[ this.ArrayData],
                value: this.dataset.CheckedType,
                id:this.dataset.id} );

        }
    },
}
</script>
<style>
.min-h-auto.mb-2.fz-5_5 label.custom-control-label{
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
}
</style>
