<template>
  <b-col cols="12" lg="2" md="6">
    <h6 class="mb-3"><b>Пантус</b></h6>
    <b-row no-gutters class="flex-column mb-lg-4 mb-1">
      <nuxt-link
        class="text-666 text-decoration-none mb-2"
        v-for="link in links"
        :key="link.id"
        :to="link.href"
        >{{ link.name }}
      </nuxt-link>
    </b-row>
    <h6><b>Партнерство</b></h6>
    <b-row no-gutters class="flex-column">
      <nuxt-link
        class="text-666 text-decoration-none mb-2"
        v-for="link in links_bottom"
        :key="link.id"
        :to="link.href"
        >{{ link.name }}
      </nuxt-link>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: "footer-pantus",
  data() {
    return {
      links: [
        { name: "О компании", href: "" },
        { name: "Вакансии", href: "" },
        { name: "Помощь", href: "" },
        { name: "Возврат", href: "" },
        { name: "Единая служба качества ", href: "" },
        { name: "Контакты", href: "" }
      ],
      links_bottom: [
        { name: "Спецпредложение для оптовиков", href: "" },
        { name: "Поставщикам", href: "" }
      ]
    };
  }
};
</script>
