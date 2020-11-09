<template>
  <h1 class="mb-5">{{text}}</h1>
</template>

<script>
export default {
name: "base-title-catalog",
  props:{
    text:{
      type: String,
      required: true,
    }
  }
}
</script>

<style>

</style>
