<template>
    <b-thead class="border d-lg-table-header-group d-none">
        <b-tr class="bg-fafafa text-555">
            <tdSort 
                label="Бренд" 
                SortName="brand" 
            />
            <tdSort 
                label="Артикул" 
                SortName="sku" 
            />
            <b-th v-if="CheckAnalogs == false"> <b-icon-camera-fill></b-icon-camera-fill></b-th>
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
            <b-th v-if="CheckAnalogs == false"><PanelVid/></b-th>
            <b-th v-if="CheckAnalogs == true"></b-th>
        </b-tr>
    </b-thead>
</template>

<script>
import tdSort from "@/components/Search/ProductPanel/tdSort"
import PanelVid from "@/components/Search/ProductPanel/index" // Панель
export default {
    props:{
        CheckAnalogs:{
            default: false,
        }
    },
    components:{
        PanelVid,
        tdSort
    }
}
</script>

