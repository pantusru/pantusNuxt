<template>
  <b-navbar-nav
    class="flex-row col-12 col-lg-7 order-4 order-lg-0 pr-0 mt-2 mt-lg-0 align-items-center"
  >
    <nav-mobile-button class="mr-3 d-block d-lg-none" />
    <input
      v-model.trim="search"
      maxlength="256"
      placeholder="Введите номер или название детали"
      class="border-danger border-right-0 w-100 p-2 rounded-left bl-0"
      @keyup.enter="SetSearch"
    />
    <base-button
      class="px-2 py-2 border-danger rounded-right mr-lg-2 mr-0 left-off-rounded"
      @click="SetSearch"
    >
      Найти
    </base-button>
    <!--    <button>Найти</button>-->
  </b-navbar-nav>
</template>

<script>
import ResetFilter from "@/mixins/reset-filter/index";
import BaseButton from "@/components/base/button/base-button";
import NavMobileButton from "@/components/header/header-nav/button/nav-mobile-button";
export default {
  components: { NavMobileButton, BaseButton },
  mixins: [ResetFilter],
  computed: {
    search: {
      get() {
        return this.$store.getters["formSearch/GetSearch"];
      },
      set(value) {
        this.$store.commit("formSearch/SetSearch", value);
      },
    },
  },
  methods: {
    async SetSearch() {
      if (this.search.length !== 0) {
        if (this.$route.name === "search") {
          await this.ResetNoApplicabilitiess(false); // Поиск не удаляется
          await this.$store.dispatch("Applicabilities/Panel/ResetAll");
        }
        console.log(this.$route.query.filter_substr, this.search)
        if(this.search === this.$route.query.filter_substr){
          this.$store.commit("SetCheckCountProducts", false);
          const form = {};
          form.filter_substr = this.$store.getters["formSearch/GetSearch"];
          await this.$store.dispatch("Products/_ProductAll", form);
          this.$store.commit("SetCheckCountProducts", true);
        }
        await this.$router.push({
          name: "search",
          query: {
            filter_substr: this.search,
          },
        });
        this.$store.commit("SetcheckFilterClick", false);
      }
    },
  },
};
</script>

<style>
.left-off-rounded {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
</style>
