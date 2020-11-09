<template>
    <b-col lg="3" cols="12" sm="6" md="4" class="mb-4 brand-blog">
        <div class="mb-2 catalog-blog-name">{{ source.name }}</div>
         <div class="d-flex flex-column">
             <nuxt-link class="catalog-blog-link text-decoration" :to="'/search?brand=' + source.id">Перейти к товарам </nuxt-link>
                <nuxt-link to="" class="catalog-blog-link text-decoration">О брэнде </nuxt-link>
         </div>
    </b-col>
</template>

<script>
export default {
  name:"brand-blog-get",
    props: {
        source: {
            type: Object,
        }
    }
}
</script>
<style>

.catalog-blog-name{
  font-weight: 600;
  font-size: 18px;
}
.catalog-blog-link{
  color: #436174 !important;
}
.catalog-blog-link:hover{
  text-decoration: none;
}
</style>
