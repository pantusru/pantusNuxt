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
            <template v-for="data in offset">
                <tr :key="data.id">
                    <td> {{ data.supplier.name }} </td>
                    <td> {{ data.quantity }} </td>
                    <td> {{ data.supplier.deliveryDelay }} </td>
                    <td> {{ data.prices }}Р </td>
                    <td> 
                        <BuyButton  
                            :idsProduct="data.id" 
                            :product ="Product"
                            :offer="data"
                        />
                        </td>
                </tr>
            </template>
        </b-tbody>
   </b-table-simple>
</template>

<script>
import BuyButton from "@/components/Products/Button/buyIndex"
import mixinsBuy from "@/mixins/Modal/buyProduct"
export default {
    mixins:[mixinsBuy],
    props:{
        offset:{},
        Product: {},
    },
    components:{
        BuyButton,
    }
}
</script>

<style>

</style>