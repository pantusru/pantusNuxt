<template>
    <b-form-group>
        <span @click="size = 8" class="form-control form-control-sm"> {{ $v.Form[name].$model }}</span>
        <b-select @input="size=1" :select-size ="size" v-model="$v.Form[name].$model" v-if="size != 1">
            <b-form-select-option class="py-2 pl-1 link-danger cursor-pointer" :value="i" v-for="i in 1000" :key="i">{{ i }}</b-form-select-option>
        </b-select>
    </b-form-group>
</template>

<script>
export default {
    inject:["$v"],
    props: {
        name: {}
    },
    data() {
        return {
            size:1 ,
            value: '',
        }
    },
}
</script>

<style>

</style>