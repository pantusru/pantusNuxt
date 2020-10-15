<template>
    <b-container>
        <b-row>
            <div class="pr-3">
                <NavProfile/>
            </div>
            <b-col>
                <div>
                    <h1 class="mb-4"> Избранный товар </h1>
                    <FuncComponents :array="Products" :Selected="true" />
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>

import NavProfile from "@/components/Nav/Profile/index"
import FuncComponents from "@/components/Func/productRow"
export default {
    async fetch({store}){
        store.dispatch("Selected/selected/_Selected");
    },
    components:{
        NavProfile,
        FuncComponents
    },
    computed:{
        Products(){
            return this.$store.getters["Selected/selected/GetSelected"];
        }
    },
}
</script>