<template>
  <b-th class="border-top-0">
        <span class="cursor-pointer" @click="SortSet"> {{  label }} </span> 
        <b-icon-arrow-down 
            v-if="SortType == 'ask' && SortName == GetSortName" 
            class="pt-1">
        </b-icon-arrow-down> 
        <b-icon-arrow-down 
        v-if="SortType == 'desk' && SortName == GetSortName" 
            class="pt-1" 
            rotate="180">
        </b-icon-arrow-down>   
    </b-th>
</template>

<script>
import SearchSubmit from "@/mixins/SearchSubmit/index"
export default {
    mixins:[SearchSubmit],
    created(){
        if(this.GetSortType != undefined){
            this.SortType = this.GetSortType;
        }
    },
    data() {
        return {
            SortType: "",
        }
    },
    props:{
        label:{
            type: String,
        },
        SortName:{
            type:String,
        }
    },
    watch:{
        GetSortName(){
            if(this.GetSortName != this.SortName){
                this.SortType = "";
            }
        }
    },
    computed:{
        GetSortName(){
            return this.$store.getters["formSearch/GetSortName"];
        },
         GetSortType(){
            return this.$store.getters["formSearch/GetSortType"];
        },  
    },
    methods:{
        async SetName(SortType, SortName){
            this.$store.commit("formSearch/SetSort" , 
            {SortType: this.SortType, SortName: this.SortName});
            await this.pushParamsFilter();
            this.pushParamsSort();
            this.PushUrl();
        },
        SortSet(){  
            switch (this.SortType) {
                case "": 
                    this.SortType = "ask"
                    break;
                case "ask":
                    this.SortType = "desk"
                    break;
                case "desk":
                    this.SortType = "ask"
                    break;
            }
            this.SetName();
        }
    }
}
</script>

<style>

</style>