<template>
  <div class="container">
    <b-nav class="d-none d-lg-flex align-items-center">
      <!-- Выплывающий список все запчасти -->
      <VueDropdown />
      <!-- Выплывающий список все запчасти -->
      <b-button-group>
        <b-button
          v-for="data in links"
          :key="data.id"
          tabindex="-1"
          :href="data.to"
          class="bg-transparent border-0 text-555 link-ec0e1d font-weight-bold fz-5 px-3"
          @click.prevent="pushSearch(data.to)"
        >
          {{ data.text }}
        </b-button>
      </b-button-group>
    </b-nav>
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
        { to: "", text: "Оригинальные каталоги" },
        { to: "/search?filter_applicabilities=3138", text: "Ваз" },
        { to: "/search?filter_applicabilities=4921", text: "Камаз" },
        { to: "/search?filter_applicabilities=3140", text: "Газ" },
        {
          to:
            "/search?filter_categories=265,3009,266,267,297,268,271,272,273,277,281,5342,287,308,322,326,335,334,336,337,369,371,373,375,3059,3060,3069,3072,5327,264",
          text: "Рти",
        },
        { to: "/popular", text: "Популярные" },
        { to: "", text: "Новинки" },
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
