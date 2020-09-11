<template>
  <b-button v-b-modal="toString(modalId)" class="py-1 px-2 bg-danger border-0">{{ text }}</b-button>
</template>

<script>
export default {
    data() {
        return {
            text: "Купить",
        }
    },
    props:{
        modalId:{
            default: null
        },
    },
}
</script>

<style>

</style>