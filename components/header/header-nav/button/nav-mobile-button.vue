<template>
  <div>
    <base-button
      @click="GetMainNav('main')" v-if="NavMobile === false">
        <b-icon-list class="fz-3"/>
    </base-button>
    <base-button
      @click="GetMainNav(false)"
      v-if="NavMobile !== false">
      <b-icon-x class="fz-3" />
    </base-button>
  </div>
</template>

<script>
import  mixinsNav from "@/mixins/nav-mobule/index";
import BaseButton from "@/components/base/button/base-button"
export default {
  name: "nav-mobile-button",
  mixins:[mixinsNav],
  components:{BaseButton},
}
</script>

<style>

</style>
