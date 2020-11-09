<template>
    <b-col  cols="12" lg="2" sm="6" md="4" v-if="dataset.visible">
        <b-alert :show="true"  variant="secondary"   >
            <nuxt-link
                :to="'/search?applicabilities=' + dataset.id" class="text-danger"
            >
                {{ dataset.name }}
            </nuxt-link>
        </b-alert>
    </b-col>
</template>

<script>
export default {
    name: "applicabilities-blog-get",
    props:["dataset"],
}
</script>

