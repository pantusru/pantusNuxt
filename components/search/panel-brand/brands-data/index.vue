<template>
  <b-form-checkbox-group v-model="chexbox" class="mb-3">
    <div class="d-flex flex-column">
      <VirtualList
        ref="scroll"
        class="overflow"
        :keeps="20"
        :data-key="'id'"
        :data-sources="SearchElem"
        :data-component="itemComponent"
      />
      <div v-if="SearchElem.length === 0">Нет результатов</div>
    </div>
  </b-form-checkbox-group>
</template>

<script>
import ChecboxBrand from "@/components/search/panel-brand/chexbox/index";
import VirtualList from "vue-virtual-scroll-list";
export default {
  components: {
    VirtualList,
    ChecboxBrand,
  },
  props: {
    SearchElem: {},
    GetChecbox: {},
    SetChecbox: {},
  },
  data() {
    return {
      itemComponent: ChecboxBrand,
    };
  },
  computed: {
    chexbox: {
      get() {
        return this.$store.getters[this.GetChecbox];
      },
      set(value) {
        this.$store.commit(this.SetChecbox, value);
      },
    },
  },
  watch: {
    SearchElem() {
      this.$refs.scroll.scrollToOffset(0);
    },
  },
};
</script>
