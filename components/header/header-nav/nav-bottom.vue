<template>
  <div class="container">
    <b-nav class="d-none d-lg-flex align-items-center">
      <!-- Выплывающий список все запчасти -->
      <VueDropdown />
      <!-- Выплывающий список все запчасти -->
      <b-button-group>
        <b-button
          :href="data.to"
          class="bg-transparent border-0 text-555 link-ec0e1d font-weight-bold fz-5 px-3"
          @click.prevent="pushSearch(data.to)"
          v-for="data in links"
          :key="data.id"
        >
          {{ data.text }}
        </b-button>
      </b-button-group>
      <!-- <b-nav-item
        :to="data.to"
        link-classes="text-555 link-ec0e1d font-weight-bold fz-5"
        v-for="data in links"
        :key="data.id"
      >
        {{ data.text }}
      </b-nav-item> -->
    </b-nav>
  </div>
</template>

<script>
import VueDropdown from "@/components/header/dropdown/navbottom";
export default {
  name: "NavBottom",
  methods: {
    pushSearch(to) {
      // this.$store.commit('SetcheckFilterClick', true)
      this.$router.push(to);
    }
  },
  data() {
    return {
      links: [
        { to: "", text: "Оригинальные каталоги" },
        { to: "/search?filter_applicabilities=3138", text: "Ваз" },
        { to: "/search?filter_applicabilities=4921", text: "Камаз" },
        { to: "/search?filter_applicabilities=3140", text: "Газ" },
        { to: "/search?filter_categories=264", text: "Рти" },
        { to: "/popular", text: "Популярные" },
        { to: "", text: "Новинки" }
      ]
    };
  },
  components: {
    VueDropdown
  }
};
</script>
