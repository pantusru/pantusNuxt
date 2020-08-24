<template>
  <b-form-checkbox v-model="selected" :value="dataset.id">{{ dataset.name }}</b-form-checkbox>
</template>

<script>
export default {
    props:["dataset"],
    data() {
        return {
            selected: [],
        }
    },
}
</script>

<style>

</style>