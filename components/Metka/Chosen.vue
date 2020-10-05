<template>
    <b-icon-bookmark-plus 
        @click="SetChosen" 
        :class="{'activ' : selected}"
        class="cursor-pointer h4 d-none-chosen fz-5">
    </b-icon-bookmark-plus>
</template>

<script>
export default {
    data() {
        return {
            selected: false,
        }
    },
    props:{
        id:{
            type: Number,
        }
    },
    methods:{
        SetChosen(){
            if(this.selected){
                this.selected = false;
                let index = this.SelectedProducts.findIndex(s => s.ProductCard.id == this.id);
                this.$store.commit("Selected/selected/DeleteSelected", index);
            }else{
                this.selected = true;
            }
        }
    },
    computed:{
        SelectedProducts(){
            return this.$store.getters["Selected/selected/GetSelected"]; 
        }
    },
    created(){
        let data = this.SelectedProducts;
            for (const key in data) {
                if(data[key].ProductCard.id == this.id){
                    this.selected = true;
                    break;
                }
            }
    }
}
</script>

<style>
 svg.d-none-chosen{
    display: none ;
 }
  svg.d-none-chosen.activ{
    display: block;
  }
.d-none-chosen:hover , .activ{
    color: red!important;
}
</style>