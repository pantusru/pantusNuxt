<template>
    <b-button variant="white" class="link-danger" v-b-toggle="name" v-if="data[5].visible" >
        <span class = "when-closed">Показать еще</span>
        <span class = "when-open">Скрыть</span>
    </b-button>
</template>

<script>
export default {
    props:["name", "data"]
}
</script>

<style>
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
/* v-if="data[5].visible == true" */
</style>
