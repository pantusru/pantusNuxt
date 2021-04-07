<template>
  <b-nav-item-dropdown
    id="my-nav-dropdown"
    no-caret
    text="О компании"
    toggle-class="nav-link-custom text-4a4a4a link-d56971 pl-0 pr-10px py-0"
    center
  >
    <b-dropdown-item
      v-for="data in links"
      :key="data.id"
      :link-class="'fz-5_5'"
      :to="data.to"
      >{{ data.text }}</b-dropdown-item
    >
  </b-nav-item-dropdown>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { to: "/about", text: "О компании" },
        { to: "/about/career", text: "Работа в компании" },
        { to: "/opt", text: "ОПТ" },
        { to: "/about/suppliers", text: "Поставщикам" },
        { to: "/documents", text: "Документы и реквизиты" },
        { to: "/about/certificates", text: "Дилерские сертификаты" },
      ],
    };
  },
};
</script>
