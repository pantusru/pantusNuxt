<template>
    <div :class="addClass">
        <label :for="name">{{ items }}</label>
        <b-form-input v-if="slots === false"
            v-mask="Vmask"
            :type="type"
            v-model.trim="$v.Form[name].$model"
            :id="name"
            size="sm">
        </b-form-input>
        <slot v-if="slots === true">

        </slot>
        <div class="error-full" v-for="data in error" :key="data.id">
            <div class="error" v-if="!$v.Form[name][data.ifv] && $v.Form[name].$dirty"> {{data.text}} </div>
        </div>
    </div>
</template>

<script>
import mixitProps from "@/mixins/input/props/index"
export default {
    mixins:[mixitProps],
    props:{
        addClass:{
            default: "col-4 mb-2"
        },
        slots: {
            default: false,
        }
    },
    inject:["$v"],
}
</script>

