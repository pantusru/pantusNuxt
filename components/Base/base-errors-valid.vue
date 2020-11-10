<template>
  <div>
    <div class="error-full" v-for="data in error" :key="data.id">
      <div
        class="error"
        v-if="!$v.Form[name][data.ifv] && $v.Form[name].$dirty"
      >
        {{data.text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "base-errors-valid",
  props:{
    $v:{
      request: true,
    },
    error:{
      request: true,
    },
    name:{
      request: true,
      type:String,
    }
  }
}
</script>

<style>

</style>
