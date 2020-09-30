<template>
  <b-form-group>
        <b-form-radio-group v-model="buyer_local" class="mb-4">
                <b-form-radio name="some-radios" value="Retail">Розничный покупатель</b-form-radio>
                <b-form-radio name="some-radios" value="Wholesale">Оптовый покупатель</b-form-radio>
        </b-form-radio-group>
        <div class="mb-3">
                <h3 v-if="buyer === 'Retail'">Заполните данные о себе:</h3>
                <h3 v-if="buyer === 'Wholesale'">Заполните данные о себе и организаци:</h3>
        </div>
  </b-form-group>
</template>

<script>
export default {
    data(){
        return{
            buyer_local: this.buyer
        }
    },
    watch:{
        buyer_local(){
            this.$emit("update:buyer", this.buyer_local);
        }
    },
    props:{
        buyer:{}
    }
}
</script>

