<template>
  <b-th class="border-top-0">
    <span class="cursor-pointer" @click="SortSet"> {{ label }} </span>
    <b-icon-arrow-down
      v-if="(GetSortType == 'ask' || GetSortType == '') && SortName == GetSortName"
      class="pt-1"
    >
    </b-icon-arrow-down>
    <b-icon-arrow-down
      v-if="GetSortType == 'desk' && SortName == GetSortName"
      class="pt-1"
      rotate="180"
    >
    </b-icon-arrow-down>
  </b-th>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    SortName: {
      type: String,
    },
  },
  watch: {
    GetSortName() {
      if (this.GetSortName != this.SortName) {
        this.SortType = "";
      }
    },
  },
  computed: {
    GetSortName() {
      return this.$store.getters["formSearch/GetSortName"];
    },
    GetSortType() {
      return this.$store.getters["formSearch/GetSortType"];
    },
  },
  methods: {
    SetName(SortType, SortName) {
      this.$store.commit("formSearch/SetSort", {
        SortType: this.SortType,
        SortName: this.SortName,
      });
      window.scrollTo(0, 0);
      this.$router.push({
        name: "search",
        query: { ...this.$route.query, sort_type: this.GetSortType , sort_name: this.GetSortName  },
      });
    },
    SortSet() {
      switch (this.SortType) {
        case "":
          this.SortType = "ask";
          break;
        case "ask":
          this.SortType = "desk";
          break;
        case "desk":
          this.SortType = "ask";
          break;
      }
      this.SetName();
    },
  },
};
</script>

