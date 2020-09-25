<template>
    <b-table-simple
    class="text-center fz-5_5"
    >
    <b-thead class="border">
        <b-tr class="bg-fafafa text-555">
            <b-th>Бренд</b-th>
            <b-th>Артикул</b-th>
            <b-th> <b-icon-camera-fill></b-icon-camera-fill></b-th>
            <b-th>Наименование</b-th>
            <b-th>Поставщик</b-th>
            <b-th>Наличие</b-th>
            <b-th>Срок</b-th>
            <b-th>Цена</b-th>
            <b-th><PanelVid/></b-th>
        </b-tr>
    </b-thead>
    </b-table-simple>
</template>

<script>
import PanelVid from "@/components/Search/ProductPanel/index" // Панель
export default {
    components:{
        PanelVid
    }
}
</script>

<style>

</style>