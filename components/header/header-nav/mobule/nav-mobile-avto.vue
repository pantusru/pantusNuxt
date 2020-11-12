<template>
  <BaseNavMobile v-if="NavMobile === 'catalog'">
    <base-nav-mobule>
      <base-nav-mobule-link
        :value="dataset.value"
        :component="dataset.components"
        :nav="dataset.data"
        v-for="dataset in nav"
        :key="dataset.id"
      />
    </base-nav-mobule>
  </BaseNavMobile>
</template>

<script>
import mixinsNav from "@/mixins/nav-mobule/index";
import BaseNavMobile from "@/components/base/nav-mobule/base-nav-mobule"
import BaseNavMobuleLink from "@/components/base/nav-mobule/base-nav-mobule-link";

export default {
  name: "nav-mobile-avto",
  components: {BaseNavMobuleLink, BaseNavMobile},
  mixins: [mixinsNav],
  data() {
    return {
      nav: [
        {data:{text: "Бренд",to: "/brands"}},
        {data:{text: "Марка", to: "/applicabilities"}},
        {data:{text: "Применяемость", to: "/categories"}},
      ]
    }
  }
}
</script>

<style>

</style>
