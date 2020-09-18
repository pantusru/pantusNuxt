<template>
<b-col cols="6" class="mb-2">
        <b-row class="justify-content-between col-10 p-0"> 
            <div class="border-bottom border-dark">
                <div class="mr-1"> {{name}}</div> 
                <!-- ЕСЛИ НЕ МОЖЕТ БЫТЬ МАССИВ -->
                <div>
                    <div v-if="types == 'text'"> {{ dataset}} </div>
                    <nuxt-link :to="link" v-if="types == 'link'"> {{ dataset}} </nuxt-link>
                </div>
            </div>
            <slot v-if="slots"></slot>
        </b-row>
</b-col>
</template>

<script>
export default {
    props:{
        types:{
            type: String,
            default: "link",
        },
        link:{
            type:String,
            default: "",
        },
        dataset:{},
        name:{
            type: String,
        },
        slots:{
            default: false
        }
    }
}
</script>

<style>

</style>