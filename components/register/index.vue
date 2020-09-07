<template>
    <div class="col-4 mb-2">
        <label :for="name">Фамилия:</label>
        <b-form-input v-model.trim="$v.Form[name].$model" :id="name" size="sm"></b-form-input>
        <div class="error-full" v-for="data in error" :key="data">
            <div class="error" v-if="!$v.Form[name][data.ifv] && $v.Form[name].$dirty"> {{data.text}} </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        name:{},
        error:{},
    },
    inject:["$v"],
}
</script>

<style>

</style>