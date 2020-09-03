<template>
    <b-col cols="4" class="mb-4">
        <div class="shadow py-3 px-3">
        <nuxt-link class="_text-danger link-danger text-decoration " :to="'/search?categories=' + dataset.id">{{ dataset.name }} </nuxt-link>
            <div class="mb-1" v-for="data in dataset.children" :key="data.id">
                <nuxt-link class="text-decoration link-decoration-none text-dark" :to="'/search?categories=' + data.id">{{ data.name }} </nuxt-link>
            </div>
        </div>
    </b-col>
</template>

<script>
export default {
    props:["dataset"],
}
</script>

<style>
 
</style>

