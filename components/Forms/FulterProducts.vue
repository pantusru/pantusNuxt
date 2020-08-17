<template>
    <b-form>
        <VueRange/> <!-- ЦЕНА-->
        <!-- Брэнд-->
        <!-- <b-form-checkbox-group v-model="checkboxBrand" class="mb-3">
            <chexboxData items="Брэнд" :data="brand"  id="brand"  />
        </b-form-checkbox-group> -->
        <!-- Категории -->  
         <b-form-checkbox-group v-model="checkboxCategories" class="mb-3">
            <chexboxDataCollapse items="Категории" :data="categories" id="categories"/>
        </b-form-checkbox-group>
    </b-form>
</template> 

<script>
import VueRange  from "../Search/range";
import chexboxDataCollapse  from "../Search/Collapse/chexboxDataCollapse";
export default {
    data() {
        return {
            checkboxBrand:[],
             checkboxCategories:[],
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
            {id:1 , name:" спорт", children:[{id: 300, name: "Жилеты", children:[{id: 410, name: "Жилеты светоотражающие", children:[]}]}] },
                {id:2 , name:" QUALITY5", children:[], },
                {id:3 , name:" спорт" , children:[] },
                {id:4 , name:" Ablton1", children:[]},
                {id:5 , name:" спорт", children:[]},
                {id:6 , name:" спорт", children:[]},
                {id:7 , name:" 3F", children:[]},
                {id:8 , name:" спорт", children:[]},
                {id:9 , name:" QUALITY5", children:[]},
                {id:10 , name:" спорт", children:[]},
                {id:11 , name:" 3M36", children:[]},
                {id:12 , name:" Bearing2ABC2б", children:[]},
                {id:13 , name:" 4U", children:[]},
                {id:14 , name:" 3ton1", children:[]},
            ],
        }
    },
    methods:{
        // методы 
    },
    components:{
        VueRange,
        chexboxDataCollapse,
    }
}
</script>

<style>
</style>