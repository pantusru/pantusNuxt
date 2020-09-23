<template>
    <b-icon-bookmark-plus 
        @click="SetChosen" 
        :class="{'activ' : selected}"
        class="cursor-pointer h4 d-none-chosen">

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
            this.selected = true;
            console.log('Сохраненно в избранное' + this.id);
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
    display: none !important;
 }
  svg.d-none-chosen.activ{
    display: block !important;
  }
.d-none-chosen:hover , .activ{
    color: red!important;
}
</style>