<template>
    <b-thead class="border">
        <b-tr class="bg-fafafa text-555">
            <tdSort 
                label="Бренд" 
                SortName="brand" 
            />
            <tdSort 
                label="Артикул" 
                SortName="sku" 
            />
            <b-th> <b-icon-camera-fill></b-icon-camera-fill></b-th>
            <tdSort 
                label="Наименование" 
                SortName="name" 
            />
            <tdSort 
                label="Поставщик" 
                SortName="supplier" 
            />
            <tdSort 
                label="Наличие" 
                SortName="quantity" 
            />
            <tdSort 
                label="Срок" 
                SortName="deliverydelay" 
            />
            <tdSort 
                label="Цена" 
                SortName="prices" 
            />
            <b-th><PanelVid/></b-th>
        </b-tr>
    </b-thead>
</template>

<script>
import tdSort from "@/components/Search/ProductPanel/tdSort"
import PanelVid from "@/components/Search/ProductPanel/index" // Панель
export default {
    components:{
        PanelVid,
        tdSort
    }
}
</script>

<style>

</style>