<template>
    <b-card-body class="p-0 break-avoid">
        <div class="shadow py-3 px-3" v-if="dataset.visible">
            <div class="d-flex align-items-center justify-content-between">
                <nuxt-link class="_text-danger link-danger text-decoration d-block mb-2" :to="'/search?categories=' + dataset.id">{{ dataset.name }} </nuxt-link>
                <b-button v-if="dataset.children.length !=0" v-b-toggle="dataset.id.toString()"
                    class="bg-transparent text-danger border-0 when-open d-flex align-items-center">
                        <b-icon-arrow-down></b-icon-arrow-down> 
                        {{ dataset.children.length }}
                </b-button>
            </div>
            <b-collapse :id="dataset.id.toString()" class="mb-1">
                <div v-for="data in dataset.children" :key="data.id">
                    <nuxt-link class="text-decoration link-decoration-none text-dark pl-3 d-block" :to="'/search?categories=' + data.id">{{ data.name }} </nuxt-link>
                </div>
            </b-collapse>
        </div>
    </b-card-body>
</template>

<script>
export default {
    props:["dataset"],
}
</script>

<style>
</style>

