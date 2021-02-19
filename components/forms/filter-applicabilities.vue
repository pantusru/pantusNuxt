<template>
  <div class="mb-4">
    <button
      v-show="showAll === false"
      :class="BntClass"
      @click.prevent="showAll = true"
    >
      Указать применяемости
    </button>
    <b-card
      v-show="showAll === true"
      class="text-666 border-e1 bg-transparen"
      no-body
    >
      <b-card-body class="px-3 py-2">
        <span class="cursor-pointer link-danger" @click="showAll = false">
          Указать применяемости
          <b-icon-arrow-up />
        </span>
        <div class="mt-3 mb-2">
          <Vpanel v-for="data in Panels" :key="data.id" :panel-id="data.id" />
          <ButtonAdd />
          <ButtonReset />
          <ButtonSubmit />
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import Vpanel from "@/components/search/panel-applicabilities/panel";
import ButtonAdd from "@/components/search/panel-applicabilities/button/button-add";
import ButtonReset from "@/components/search/panel-applicabilities/button/reset";
import ButtonSubmit from "@/components/search/buttons/button-submit";
export default {
  name: "FilterApplicabilities",
  components: {
    Vpanel,
    ButtonAdd,
    ButtonReset,
    ButtonSubmit,
  },
  data() {
    return {
      BntClass:
        "text-666 border-e1 bg-transparent link-danger border-link-danger px-3 py-2 cursor-pointer",
      showAll: false,
    };
  },
  computed: {
    Panels() {
      return this.$store.getters["Applicabilities/Panel/GetPanel"];
    },
  },
};
</script>
