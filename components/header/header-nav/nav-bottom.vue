<template>
  <div class="container">
    <div class="d-none d-lg-flex align-items-center">
      <!-- Выплывающий список все запчасти -->

      <!-- Выплывающий список все запчасти -->
      <div class="d-flex justify-content-between w-100 align-items-center">
        <VueDropdown />
        <b-button
          v-for="data in links"
          :key="data.id"
          tabindex="-1"
          :href="data.to"
          class="bg-transparent border-0 text-555 link-ec0e1d font-weight-bold fz-5"
          @click.prevent="pushSearch(data.to)"
        >
          {{ data.text }}
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import VueDropdown from "@/components/header/dropdown/navbottom";
export default {
  name: "NavBottom",
  components: {
    VueDropdown,
  },
  data() {
    return {
      links: [
        { to: "/catalog/originalpartscatalog", text: "Автокаталоги" },
        {
          to: "/carbrands/zapchasti-vaz",
          text: "Запчасти для а/м ВАЗ",
        },
        {
          to: "/carbrands/zapchasti-kamaz",
          text: "Запчасти для а/м КАМАЗ",
        },
        {
          to: "/carbrands/zapchasti-gaz",
          text: "Запчасти для а/м ГАЗ",
        },
        {
          to: "/categories/rti",
          text: "РТИ",
        },
        { to: "/popular", text: "Популярные" },
        { to: "/sale", text: "Акции" },
      ],
    };
  },
  methods: {
    pushSearch(to) {
      this.$router.push(to);
    },
  },
};
</script>
<style>
.not-pr-0:nth-last-child {
  padding-right: 0 !important;
}
</style>
