<template>
    <b-form-checkbox :value="dataset.id">{{dataset.name}}</b-form-checkbox>
</template>

<script>
export default {
    props:["dataset"]
}
</script>

<style>

</style>