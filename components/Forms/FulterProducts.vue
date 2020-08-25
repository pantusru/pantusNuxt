<template>
    <b-form > 
        <VueRange/> <!-- ЦЕНА-->
        <!-- Брэнд-->
        <PanelBrand 
            :data="brand" 
            id="brand" 
            SetName="formSearch/SetBrandChexbox"
            GetName="formSearch/GetBrandChexbox" />
        <!-- Категории -->  
        <Panel
            :data="categories" 
            id="categories" 
            item ="Категории"
            GetName="formSearch/CategoriesChexbox"
        />
        <Panel
            :data="applicabilities" 
            id="applicabilities" 
            item ="Применимость"
           GetName="formSearch/ApplicabilitiesChexbox"
        />
        <b-button-group>
            <Submit/>
            <Reset/>
        </b-button-group>
    </b-form>
</template> 

<script>
import VueRange  from "../Search/range";
import PanelBrand  from "../Search/Panel/Slot/SlotChexbox";
import Panel  from "../Search/Panel/Slot/SlotCollapse";
import Reset from "../Search/buttons/buttonsReset"
import Submit from "../Search/buttons/buttonSubmit"
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
        }
    },
    methods:{
    },
    components:{
        VueRange,
        PanelBrand,
        Panel,
        Reset,
        Submit
    },
    computed:{
        categories(){
            return this.$store.getters["Categories/CategoriesAll/GetCategories"];
        },
        applicabilities(){
            return this.$store.getters["Applicabilities/ApplicabilitiessAll/GetApplicabilities"];
        },
    }

}
</script>

<style>
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
</style>