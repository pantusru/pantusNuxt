<template>
    <b-form > 
        <VueRange/> <!-- ЦЕНА-->
        <!-- Категории -->  
        <Panel 
            items="Категории"
            ArrayData="Categories/CategoriesAll/GetCategories"
            name="categories"
            >
        </Panel>
        <!-- ПРиминимости -->
        <Panel 
            items="Принимаемость"
            ArrayData="Applicabilities/ApplicabilitiessAll/GetApplicabilities"
            name="applicabilities"
            >
        </Panel>


        <b-button-group>
            <Submit/>
            <Reset/>
        </b-button-group>
    </b-form>
</template> 

<script>
import VueRange  from "../Search/range";
import Panel  from "../Search/Panel/index";
import Reset from "../Search/buttons/buttonsReset"
import Submit from "../Search/buttons/buttonSubmit"
export default {
    components:{
        VueRange,
        Panel,
        Reset,
        Submit,
    },
}
</script>

<style>
</style>