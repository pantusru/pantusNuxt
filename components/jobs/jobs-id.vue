<template>
  <div class="jobs-blogs">
    <div class="mb-3">
      <b>Опубликовано: </b><span>{{ jobsId.dataCreate }}</span>
    </div>
    <h3>{{ jobsId.title }}</h3>
    <h3 class='mb-3'>Требования:</h3>
    <div v-html='jobsId.requirements'/>
    <h3 class='mb-3'>Обязанности:</h3>
    <div v-html='jobsId.charge'/>
    <h3 class='mb-3'>Условия:</h3>
    <div v-html='jobsId.conditions'/>
    <h3 class='mb-3'>Оплата:</h3>
    <div v-html='jobsId.payment'/>
    <nuxt-link class='mt-2 d-block' to='/about/career/jobs/'>Вернутся к списку</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "JobsId",
  computed: {
    jobsId() {
      return this.$store.getters["jobs/getJobsId"](this.$route.params.id)[0];
    },
  },
};
</script>

<style scoped></style>
