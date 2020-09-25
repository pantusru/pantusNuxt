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
export default {
    created(){
        if(this.GetSortType != undefined){
            this.SortType = this.GetSortType;
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
    props:{
        label:{
            type: String,
        },
        SortName:{
            type:String,
        }
    },
    data() {
        return {
            SortType: undefined,
        }
    },
    methods:{
        SetName(SortType, SortName){
            this.$store.commit("formSearch/SetSort" , 
            {SortType:this.SortType, SortName: this.SortName});
            console.log(this.$route);
        },
        SortSet(){  
            switch (this.SortType) {
                case undefined: 
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