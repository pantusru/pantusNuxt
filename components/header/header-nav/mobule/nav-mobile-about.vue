<template>
  <div v-if="NavMobile === 'about'">
    <BaseNavMobile :link="nav">
      <template #header>
        <base-nav-mobule-back value="main" :nav="{ text: 'Главная' }" />
      </template>
    </BaseNavMobile>
  </div>
</template>

<script>
import BaseNavMobile from "@/components/base/nav-mobule/base-nav-mobule";
import BaseNavMobuleBack from "@/components/base/nav-mobule/base-nav-mobule-back";

export default {
  name: "NavMobileAbout",
  components: { BaseNavMobuleBack, BaseNavMobile },
  data() {
    return {
      nav: [
        { data: { to: "/about", text: "О компании" } },
        { data: { to: "/about/career", text: "Работа в компании" } },
        { data: { to: "/opt", text: "ОПТ" } },
        { data: { to: "/about/suppliers", text: "Поставщикам" } },
        { data: { to: "/documents", text: "Документы и реквизиты" } },
        { data: { to: "/about/certificates", text: "Дилерские сертификаты" } },
      ],
    };
  },
  computed: {
    NavMobile() {
      return this.$store.getters.GetNavMobile;
    },
  },
};
</script>

<style></style>
