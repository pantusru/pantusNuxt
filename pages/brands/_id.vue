<template>
  <b-container>
    <div
      v-if="brand !== undefined"
      class="container-static"
      v-html="brand.description"
    />
  </b-container>
</template>

<script>
export default {
  name: "IdVue",
  async fetch({ params, store, getters, commit, redirect }) {
    await store.dispatch("Brand/BrandAll/_Brands");
    await store.dispatch("Brand/BrandAll/_BrandId", params.id);
    if (store.getters["Brand/BrandAll/GetBrandId"].id === undefined) {
      redirect("/404");
    }
  },
  head() {
    return {
      title: `Купить автозапчасти ${this.brand.name}`,
      meta: [
        {
          name: "description",
          content: `Производитель запчастей ${this.brand.name} - страна происхождения, преимущества, категории запчастей, условия гарантии. Купить запчасти ${this.brand.name} оптом и в розницу с доставкой.`,
        },
        {
          name: "keywords",
          content: `${this.brand.name}, запчасти, производитель автозапчастей, оптом, в розницу, купить`,
        },
      ],
    };
  },
  computed: {
    brand() {
      return this.$store.getters["Brand/BrandAll/GetBrandId"];
    },
  },
  mounted() {
    const link = document.querySelectorAll(".btn.red");
    link.forEach(elem => {
      elem.onclick = event => {
        event.preventDefault();
        this.$router.push(`/search?filter_brands=${this.brand.id}`);
      };
    });
  },
};
</script>
<style>
.container-static li::before {
  content: "";
  width: 5px;
  height: 5px;
  margin-left: -12px;
  margin-top: 8px;
  border-radius: 5px;
  background: #c8312b;
  position: absolute;
  color: #c8312b;
}
.container-static .btn {
  color: #fff;
  background: darkred;
}
</style>
