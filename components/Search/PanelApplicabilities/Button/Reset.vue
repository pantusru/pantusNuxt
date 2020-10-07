<template>
<div class="mt-2">
  <span class="cursor-pointer" @click="ResetAll">Сбросить фильтры</span>
</div>
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

 