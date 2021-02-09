<template>
  <div class="jobs-blogs">
    <div class="mb-4">
      <b>Опубликовано: </b><span>{{ jobs.dataCreate }}</span>
    </div>
    <h2>
      <nuxt-link :to="jobs.id.toString()">{{ jobs.title }}</nuxt-link>
    </h2>
    <p class="col-md-8 col-12 px-0">{{ jobs.text }}</p>
  </div>
</template>

<script>
export default {
  name: "jobs",
  props: {
    jobs: { type: Object },
  },
};
</script>

<style>
.jobs-blogs {
  margin-top: 30px;
}
</style>
