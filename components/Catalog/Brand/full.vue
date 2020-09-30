<template>
    <div>
        <div class="mb-2">{{ source.name }}</div>
         <div class="d-flex flex-column">
             <nuxt-link :to="'/search?brand=' + source.id">Перейти к товарам </nuxt-link>
                <nuxt-link to="">О брэнде </nuxt-link>
         </div>
    </div>
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