<template>
    <b-button variant="white" class="link-danger" v-b-toggle="name" >
        <span class = "when-closed">Показать еще</span>
        <span class = "when-open">Скрыть</span>
    </b-button>
</template>

<script>
export default {
    props:["name"]
}
</script>

<style>
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
</style>