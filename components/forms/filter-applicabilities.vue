<template>
  <div class="mb-4 ">



    <button
      v-show="showAll === false"
      :class="BntClass"
      @click.prevent="showAll = !showAll"
    >

<!--      <div class="motionblur">-->
<!--        <div class="box">-->
          <img
            class="icon-filters mr-3"
            src="@img/icons/filters-applicabilities-red-6.svg"
            alt="Icon Applicabilities"
          />
<!--        </div>-->
<!--      </div>-->


      <span class="fz-5 font-weight-bold">Указать применяемости</span>
      <b-icon-arrow-down-circle
        v-if="!showAll"
        class="cursor-pointer arrow-icon-filters link-danger ml-3"
      />
      <b-icon-arrow-up-circle
      v-else
      class="cursor-pointer arrow-icon-filters link-danger ml-3"
      />

    </button>
    <b-card
      v-show="showAll === true"
      class="text-666 border-e1 bg-transparen block-shadow"
      no-body
    >
      <b-card-body class="px-3 py-2">
<!--        <span class="cursor-pointer link-danger" @click="showAll = false">-->
<!--          Указать применяемости-->
<!--          <b-icon-arrow-up />-->
<!--        </span>-->
        <div class="mt-3 mb-2">

          <div class="px-3 mb-3">
            <ButtonAdd class="mr-2"/>
            <ButtonReset />

          </div>
          <hr>
          <Vpanel v-for="data in Panels" :key="data.id" :panel-id="data.id" />
          <hr>
          <div class="px-3">
            <ButtonSubmit />
          </div>

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
        "text-666 border-e1 bg-transparent link-danger border-link-danger px-3 py-0 cursor-pointer w-100 block-shadow block-radius d-flex align-items-center justify-content-between applicabilities-btn",
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
<style>
.icon-filters{
  height: 45px !important;
  width: auto !important;
  display: block;
}
.applicabilities-btn:hover .icon-filters{
  opacity: 1;
}

</style>
