<template>
  <b-container>
    <div class="container-static">
      <h1>Контакты Пантус по регионам</h1>
      <ContactMenu />
      <div class="column-count-1 column-count-sm-2 column-count-lg-4 mt-4">
        <div
          v-for="dataset in contacts"
          :key="dataset.id"
          class="break-avoid mb-2"
        >
          <div>
            <b>{{ dataset.region }}</b>
            <div class="mt-2">
              <ul>
                <li v-for="city in dataset.cities" :key="city.id">
                  <nuxt-link
                    class="text-decoration text-555 d-block mb-1"
                    :to="'/contacts/' + city.code"
                  >
                    {{ city.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import ContactMenu from "@/components/static/elements/contact-menu";
export default {
  name: "ContactsGoroda",
  components: { ContactMenu },
  async fetch({ dispatch }) {
    await dispatch("contacts/actionsContacts");
  },
  head() {
    return {
      title: `Автозапчасти по категориям - Интернет-магазин запчастей`,
      meta: [
        {
          name: "description",
          content: `Подбор запчастей по категориям. Найти и купить запчасти по категориям деталей и местам установки, каталог запчастей по категориям и узлам`,
        },
        {
          name: "keywords",
          content: `категории запчастей места установки деталей`,
        },
      ],
    };
  },
  computed: {
    contacts() {
      return this.$store.getters["contacts/getContactsAll"];
    },
  },
};
</script>
<style>
@import "assets/css/static-page-main.css";
</style>
