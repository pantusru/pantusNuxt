<template>
  <div class="d-flex align-items-center mb-3">
    <base-title-filter
      class="cursor-pointer link-danger"
      :text="items"
      @click="getFilterClick"
    />
    <b-icon-arrow-up-circle
      v-if="getFilter"
      class="ml-2 cursor-pointer fz-4 link-danger"
      @click="getFilterClick"
    />
    <b-icon-arrow-down-circle
      v-if="!getFilter"
      class="ml-2 cursor-pointer fz-4 link-danger"
      @click="getFilterClick"
    />
  </div>
</template>

<script>
export default {
  name: "GetFilter",
  props: {
    items: {
      type: String,
    },
    getFilter: {
      type: Boolean,
    },
  },
  methods: {
    getFilterClick() {
      this.$emit("update:getFilter", !this.getFilter);
    },
  },
};
</script>
