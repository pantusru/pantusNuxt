<template>
  <b-navbar variant="light" class="d-none d-lg-flex">
    <div class="container px-15px">
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="py-1">
          <!-- Выплывающий список и прост ссылка -->
          <VueDropdown class="d-none d-lg-block" />
          <b-nav-item
            to=""
            class=""
            link-classes="text-4a4a4a link-d56971 d-lg-none px-10px pb-lg-0 pb-2"
            >О компании
          </b-nav-item>
          <!-- Выплывающий список и прост ссылка -->
          <b-nav-item
            v-for="data in links"
            :key="data.id"
            :to="data.to"
            link-classes="text-4a4a4a link-d56971 px-10px pb-lg-0 pb-2 pt-0"
          >
            {{ data.text }}
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            link-classes="text-436174 pb-lg-0 pb-2 pt-0"
            href="tel:88005558721"
          >
            <strong>8 (800) 555 87 21</strong></b-nav-item
          >
          <div>Звонок по РФ - бесплатный</div>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
import VueDropdown from "@/components/header/dropdown/navtop";
export default {
  name: "nav-top",
  components: {
    VueDropdown,
  },
  data() {
    return {
      links: [
        { to: "", text: "Мобильное приложение" },
        { to: "", text: "Доставка" },
        { to: "", text: "Оплата" },
        { to: "/news/", text: "Новости" },
        { to: "", text: "Помощь" },
        { to: "", text: "Контакты" },
      ],
    };
  },
};
</script>
