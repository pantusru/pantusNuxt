<template>
        <button v-on:click="All" class="mr-2 border link-danger">Отправить</button>
</template>

<script>
import SearchSubmit from "@/mixins/SearchSubmit/index"
export default {
    mixins:[SearchSubmit],
    methods:{
        async All(event){
            this.$store.commit("SetcheckFilterClick", undefined);
            await this.pushParamsFilter(event);
            this.pushParamsSort();
            this.PushUrl();
        }
    } 
}
</script>



