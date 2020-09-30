<template>
    <b-modal id='img' hide-footer>

        <div  v-if="IdProductsImg != undefined ">
            <div class="col-7 mb-4">
                <b-img class="img-100" :src="UrlMain"></b-img>
            </div>
            <b-row>
                <!-- БЛОК с альбомом -->
                <b-col cols="2">
                    <b-img class="img-100 cursor-pointer" :src="dataset.ProductCard.ProductCardImage.url" @click="MainTrue()"></b-img>
                </b-col>
                <b-col cols="2"
                    v-for="(data,index) in dataset.ProductCard.album"
                    :key="data.id"
                >
                <!-- БЛОК с альбомом -->
                    <b-img class="img-100 cursor-pointer" :src="data.url" @click="MainUrl(index)"></b-img>
                </b-col>
            </b-row>
            <div><h3 class="text-left ml-3 mt-4">{{ dataset.ProductCard.name }}</h3></div>
        </div>
    </b-modal>
</template>

<script>
import mixins from "@/mixins/Product/album"
export default {
    mixins:[mixins],
    computed:{
        IdProductsImg(){
            return this.$store.getters["Modal/GetModaImgIdProduct"]
        },
        dataset(){
            return this.$store.getters["Products/popular/GetProductId"](this.IdProductsImg)
        },
    },
}
</script>