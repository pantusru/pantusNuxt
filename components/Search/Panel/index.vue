<template>
  <b-form-group class="fz-5 border  px-3 py-2 border-light">
        <h3 class="mb-3">{{items}}</h3> 
        <slot name="input"></slot> 
        <div class="overflow">
            <slot name="data">
            </slot>
        </div>
        <slot name="button" ></slot>

  </b-form-group>
</template>

<script>
export default {
    props:["items"],
}
</script>

<style>
.overflow{
    overflow:auto;
    max-height: 200px;
}
</style>