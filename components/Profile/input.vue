<template>
  <b-row class="align-items-center mb-3">
        <b-col cols="2" class="mr-4"><label :for="name"> {{items}}</label></b-col>
        <b-col cols="5">
            <b-form-input   
                v-mask="Vmask"
                :type="type" 
                v-model.trim="value" 
                :id="name"
                class="w-75" 
                size="sm">
            </b-form-input>
        </b-col>
    </b-row>
</template>

<script>
import mixitProps from "@/mixins/Input/Props/index"
export default {
    mixins:[mixitProps],
        inject:["VuexSrc"],
    data() {
        return {
            nameSet: "User/SetFull",
            value: this.$store.getters["User/FormData"][this.name],
        }
    },
}
</script>

