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
            KolvoVisible="CategoriesKolvoVisible"
        />
        <Panel
            :data="applicabilities" 
            id="applicabilities" 
            item ="Применимость"
           GetName="formSearch/ApplicabilitiesChexbox"
           KolvoVisible="ApplicabilitiesKolvoVisible"
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
        brand(){
            return this.$store.getters["Brand/BrandAll/GetBrand"];
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