<template>
    <div class="d-flex justify-content-end fz-4">
        <b-icon-list 
            class="link-danger mx-1 cursor-pointer" 
            :class="{'text-danger': componentsName=='TableProduct' }"
            @click="SetName('TableProduct')"
        >
        </b-icon-list>
        <b-icon-list-ul 
            class="link-danger mx-1 cursor-pointer"
            :class="{'text-danger': componentsName=='productRow' }"
            @click="SetName('productRow')"
        >
        </b-icon-list-ul>
        <b-icon-grid-fill 
            class="link-danger mx-1 cursor-pointer"
            :class="{'text-danger': componentsName=='productBlog' }"
            @click="SetName('productBlog')"
        >
        </b-icon-grid-fill>

    </div> 
</template>

<script>
export default {
   computed:{
        componentsName() {
            return this.$store.getters["getProductType"]; 
        },
   },
   methods:{
        SetName(val){
            this.$store.commit("SetProductType", val);
        }
   }
}
</script>

<style>
</style>