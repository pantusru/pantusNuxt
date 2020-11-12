<template>
  <div>
    <base-button
      @click="GetMainNav('main')" v-if="NavMobile === false" class>
        <b-icon-list font-scale="2" />
    </base-button>
    <base-button
      @click="GetMainNav(false)"
      v-if="NavMobile !== false"
      class="py-2">
      X
    </base-button>
  </div>
</template>

<script>
import  mixinsNav from "@/mixins/nav-mobule/index";
import BaseButton from "@/components/base/base-button"
export default {
  name: "nav-mobile-button",
  mixins:[mixinsNav],
  components:{BaseButton},
}
</script>

<style>

</style>
