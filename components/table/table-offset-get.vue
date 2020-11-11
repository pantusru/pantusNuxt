<template>
   <b-table-simple bordered class="text-center">
       <b-thead>
           <b-tr>
                <b-th>Поставщик</b-th>
                <b-th class="d-none d-lg-table-cell">Наличие</b-th>
                <b-th class="d-none d-sm-table-cell">Срок</b-th>
                <b-th>Цена</b-th>
                <b-th></b-th>
           </b-tr>
       </b-thead>
        <b-tbody>
            <template v-for="data in Linkoffset">
                <tr :key="data.id">
                    <td> {{ data.supplier.name }} </td>
                    <td class="d-none d-lg-table-cell"> {{ data.quantity }} </td>
                    <td class="d-none d-sm-table-cell"> {{ data.supplier.deliveryDelay }} </td>
                    <td> {{ data.prices }}Р </td>
                    <td>
                        <BuyButton
                            :LinkProduct ="LinkProduct"
                            :LinkOffer="data"
                        />
                        </td>
                </tr>
            </template>
        </b-tbody>
   </b-table-simple>
</template>

<script>
import BuyButton from "@/components/products/button/buy-index"
export default {
    props:{
        Linkoffset:{},
        LinkProduct: {},
    },
    components:{
        BuyButton,
    }
}
</script>

