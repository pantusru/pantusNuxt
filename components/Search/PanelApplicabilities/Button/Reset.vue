<template>
  <b-button @click="ResetAll">Сбросить фильтры</b-button>
</template>

<script>
export default {
    methods:{
        ResetAll(){
            this.$store.commit("Applicabilities/Panel/ResetAll");
        }
    }
}
</script>

<style>

</style>