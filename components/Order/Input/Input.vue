<template>
    <div :class="addClass">
        <div class="d-flex justify-content-between">
            <label class="mr-3  pl-0" :for="name">{{ items }}</label>
            <b-form-input v-if="slots== false"
                v-mask="Vmask"
                :type="type" 
                v-model.trim="value" 
                :id="name"
                class="w-75" 
                size="sm">
            </b-form-input>
            <slot v-if="slots == true">
                
            </slot>
        </div>
        <div class="error-full text-center">
            <div class="error" v-for="data in error" :key="data.id">
                <span v-if="!$v.Form[name][data.ifv] && $v.Form[name].$dirty">{{data.text}} </span>     
            </div>
        </div>
    </div>
</template>

<script>
import mixit from "@/mixins/Input/order"
export default {
    mixins:[mixit],
    props:{
        Vmask: {
            default: null,
        },
        addClass:{
            default: "mb-2"
        },
        name:{},
        error:{},
        items:{},
        type:{
            default: "text",
        },
        slots: {
            default: false,
        }
    },
}
</script>

<style>

</style>