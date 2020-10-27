<template>
    <b-form>
        <b-form-radio-group v-model="value" class="d-flex flex-column" :options="chexbox" value-field="id"  text-field="name">
        </b-form-radio-group>
    </b-form>
</template>

<script>
export default {
    watch:{
        value(){
            this.$store.commit("Order/Form/SetPayment" , this.value)
        }
    },
    data(){
        return{
            value: this.$store.getters["Order/Form/GetPayment"],
        }
    },
    computed:{
        chexbox(){
            return this.$store.getters["Order/Payment/Index/GetPayment"];
        },
    }
}
</script>

