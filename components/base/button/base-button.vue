<template>
  <b-button class="bg-danger _baseBnt" v-on="$listeners">
    {{text}}
    <slot></slot>
  </b-button>
</template>

<script>
export default {
  name: "base-button",
  props:{
    /***
     * Текст кнопки
     */
    text:{
      type: String,
    }
  }
}
</script>

<style>
._baseBnt{
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-size: 12px;
  border-color: transparent;
}
._baseBnt:focus, ._baseBnt:hover{
  border-color: transparent !important;
}
</style>
