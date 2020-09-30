<template>
   <b-table-simple bordered class="text-center">
       <b-thead>
           <b-tr>
                <b-th>Поставщик</b-th>
                <b-th>Наличие</b-th>
                <b-th>Срок</b-th>
                <b-th>Цена</b-th>
                <b-th></b-th>
           </b-tr>
       </b-thead>
        <b-tbody>
            <template v-for="data in Linkoffset">
                <tr :key="data.id">
                    <td> {{ data.supplier.name }} </td>
                    <td> {{ data.quantity }} </td>
                    <td> {{ data.supplier.deliveryDelay }} </td>
                    <td> {{ data.prices }}Р </td>
                    <td> 
                        <BuyButton  
                            :idsProduct ="ProductId"
                            :LinkOffer="data"
                        />
                        </td>
                </tr>
            </template>
        </b-tbody>
   </b-table-simple>
</template>

<script>
import BuyButton from "@/components/Products/Button/buyIndex"
export default {
    props:{
        Linkoffset:{},
        ProductId: {},
    },
    components:{
        BuyButton,
    }
}
</script>

