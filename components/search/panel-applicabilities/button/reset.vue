<template>
<!--  <div class="mt-2 mb-1">-->
<!--    <span-->
<!--      class="link-danger cursor-pointer"-->
<!--      @click.prevent="ResetApplicabilities"-->
<!--    >-->
<!--      Сброс применяемостей-->
<!--    </span>-->
<!--  </div>-->

  <b-button variant="secondary" class="btn _baseBnt py-1 px-2 btn-secondary" @click.prevent="ResetApplicabilities">Сбросить</b-button>

<!--  <b-icon-bootstrap-reboot-->
<!--    @click.prevent="ResetApplicabilities"-->
<!--    class="applicabilities-reset-btn text-danger"-->

<!--  >-->

<!--  </b-icon-bootstrap-reboot>-->

</template>

<script>
export default {
  destroyed() {
    this.$store.commit("Applicabilities/Panel/DeleteAllPanel");
  },
  methods: {
    async ResetApplicabilities() {
      this.$store.commit("SetcheckFilterClick", "resetApplicabilities");
      await this.$store.dispatch("Applicabilities/Panel/ResetAll");
      if (this.$route.query.filter_applicabilities !== undefined) {
        await this.$router.push({
          path: this.$route.path,
          query: {
            ...this.$route.query,
            filter_applicabilities: undefined,
            page_number: undefined,
          },
        });
      } else {
        await this.$store.dispatch("Applicabilities/Panel/ResetAll");
      }
    },
  },
};
</script>
<style lang="sass">
  .applicabilities-reset-btn
    font-size: 31px
    cursor: pointer
    &:hover, &:focus
      color: #bd2130 !important

</style>
