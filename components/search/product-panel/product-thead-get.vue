<template>
    <b-thead class="border d-lg-table-header-group" :class="{'d-none': !CheckAnalogs}">
        <b-tr class="bg-fafafa text-555">
            <tdSort :class="{'d-none d-sm-table-cell': CheckAnalogs}"
                label="Бренд"
                SortName="brand"
            />
            <tdSort
                label="Артикул"
                SortName="sku"
            />
            <b-th v-if="CheckAnalogs == false"> <b-icon-camera-fill></b-icon-camera-fill></b-th>
            <tdSort  :class="{'d-none d-sm-table-cell': CheckAnalogs}"
                label="Название"
                SortName="name"
            />
            <tdSort
                label="Поставщик"
                SortName="supplier"
            />
            <tdSort :class="{'d-none d-md-table-cell': CheckAnalogs}"
                label="Наличие"
                SortName="quantity"
            />
            <tdSort  :class="{'d-none d-sm-table-cell': CheckAnalogs}"
                label="Срок"
                SortName="deliverydelay"
            />
            <tdSort
                label="Цена"
                SortName="prices"
            />
            <b-th v-if="CheckAnalogs === false"><PanelVid/></b-th>
            <b-th v-if="CheckAnalogs === true"></b-th>
        </b-tr>
    </b-thead>
</template>

<script>
import tdSort from "@/components/search/product-panel/th-sort-get"
import PanelVid from "@/components/search/product-panel/index" // Панель
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

