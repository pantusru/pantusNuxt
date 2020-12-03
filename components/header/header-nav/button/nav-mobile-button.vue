<template>
  <div>
    <base-button v-if="NavMobile === false" @click="GetMainNav('main')">
      <b-icon-list class="fz-3" />
    </base-button>
    <base-button v-if="NavMobile !== false" @click="GetMainNav(false)">
      <b-icon-x class="fz-3" />
    </base-button>
  </div>
</template>

<script>
import mixinsNav from "@/mixins/nav-mobule/index";
import BaseButton from "@/components/base/button/base-button";
export default {
  name: "nav-mobile-button",
  components: { BaseButton },
  mixins: [mixinsNav],
};
</script>

<style></style>
