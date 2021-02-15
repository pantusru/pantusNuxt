<template>
  <div class="d-flex justify-content-end fz-4">
    <div title="Таблица">
      <b-icon-list
        class="link-danger mx-1 cursor-pointer"
        :class="{ 'text-danger': componentsName == 'TableProduct' }"
        @click="SetName('TableProduct')"
      />
    </div>
    <div title="список">
      <b-icon-list-ul
        class="link-danger mx-1 cursor-pointer"
        :class="{ 'text-danger': componentsName == 'productRow' }"
        @click="SetName('productRow')"
      />
    </div>
    <div title="плитка">
      <b-icon-grid-fill
        class="link-danger mx-1 cursor-pointer"
        :class="{ 'text-danger': componentsName == 'productBlog' }"
        @click="SetName('productBlog')"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    componentsName() {
      return this.$store.getters.getProductType;
    },
  },
  methods: {
    SetName(val) {
      this.$store.commit("SetProductType", val);
    },
  },
};
</script>
