<template>
    <b-col cols=3 class="mb-4">
        <div class="mb-2">{{ source.name }}</div>
         <div class="d-flex flex-column">
             <nuxt-link :to="'/search?brand=' + source.id">Перейти к товарам </nuxt-link>
                <nuxt-link to="">О брэнде </nuxt-link>
         </div>
    </b-col>
</template>

<script>
export default {
    props: {
        source: { 
            type: Object,
        }
    }
}
</script>

<style>

</style>