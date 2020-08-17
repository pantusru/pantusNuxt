<template>
    <b-form>
        <VueRange/>
        <chexboxData items="Брэнд" :data="brand"  id="brand"   />
        <chexboxData items="Категории" :data="categories" id="categories"   />
    </b-form>
</template>

<script>
import VueRange  from "../Search/range";
import chexboxData  from "../Search/chexboxData";
export default {
    data() {
        return {
            brand:[
                {id:1 , name:" спорт"},
                {id:2 , name:" QUALITY5"},
                {id:3 , name:" спорт"},
                {id:4 , name:" Ablton1"},
                {id:5 , name:" спорт"},
                {id:6 , name:" спорт"},
                {id:7 , name:" 3F"},
                {id:8 , name:" спорт"},
                {id:9 , name:" QUALITY5"},
                {id:10 , name:" спорт"},
                {id:11 , name:" 3M36"},
                {id:12 , name:" Bearing2ABC2б"},
                {id:13 , name:" 4U"},
                {id:14 , name:" 3ton1"},
            ],
             categories:[
                {id:1 , name:" спорт"},
                {id:2 , name:" QUALITY5"},
                {id:3 , name:" спорт"},
                {id:4 , name:" Ablton1"},
                {id:5 , name:" спорт"},
                {id:6 , name:" спорт"},
                {id:7 , name:" 3F"},
                {id:8 , name:" спорт"},
                {id:9 , name:" QUALITY5"},
                {id:10 , name:" спорт"},
                {id:11 , name:" 3M36"},
                {id:12 , name:" Bearing2ABC2б"},
                {id:13 , name:" 4U"},
                {id:14 , name:" 3ton1"},
            ],
        }
    },
    methods:{
        // методы 
    },
    components:{
        VueRange,
        chexboxData,
    }
}
</script>

<style>
.range-slider{
    position: relative;
}
.range-slider input[type=range]{
    position: absolute;
    left: 0;
    bottom: 0;
}
input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
}
</style>