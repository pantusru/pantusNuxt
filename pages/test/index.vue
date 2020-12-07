<template>
  <div>
    <b-container>
      <test component_tag="div" class="input-filter_catalog">
        <test
          type="checkbox"
          id="31"
          component_tag="input"
          class="input-filter_catalog_input"
        ></test>
        <test for="31" component_tag="label" class="input-filter_catalog_label">
          Машина
        </test>
      </test>
    </b-container>
  </div>
</template>

<script>
import test from "@/components/test/test";
export default {
  name: "test-view",
  data() {
    return {
      getBlog: false,
    };
  },
  components: {
    test,
  },
};
</script>

<style lang="sass">
@import "assets/sass/input/input-filter_catalog"
</style>
