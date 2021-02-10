<template>
  <div class="jobs-blogs" v-if="getJobsId">
    <div class="mb-4">
      <b>Опубликовано: </b><span>{{ getJobsId.dataCreate }}</span>
    </div>
    <h2>
      <nuxt-link :to="getJobsId.id.toString()">{{ getJobsId.title }}</nuxt-link>
    </h2>
    <div class="mt-3" v-html="getJobsId.content" />
  </div>
</template>

<script>
export default {
  name: "JobsId",
  computed: {
    getJobsId() {
      return this.$store.getters["jobs/getJobsId"];
    },
  },
};
</script>

<style scoped></style>
