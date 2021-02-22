<template>
  <b-container class="container-static">
    <b-row>
      <side-bar :items-menu="sideBarItems" />
      <b-col class="pl-lg-4">
        <h1 class="long my-3">Вакансии ООО "Пантус"</h1>
        <b-row class="justify-content-start">
          <b-col cols="5" lg="2"
            ><h4>
              <nuxt-link to="/about/career/">Условия труда </nuxt-link>
            </h4>
          </b-col>
          <b-col cols="4" lg="2"><h4>Вакансии</h4></b-col>
        </b-row>
        <jobs-id :jobs="jobsId" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SideBar from "@/components/static/elements/sidebar/index";
import Jobs from "@/components/jobs/jobs";
import JobsId from "@/components/jobs/jobs-id";
export default {
  name: "PageJobs",
  components: { JobsId, SideBar },
  data() {
    return {
      sideBarItems: [
        { to: "/about/career/", name: "Работа в компании" },
        { to: "/about/career/jobs/", name: "Вакансии" },
        {
          to: "/about/career/form/",
          name: "Анкета для соискателя",
        },
      ],
    };
  },
  async fetch({ store, params }) {
    await store.dispatch("jobs/actionsJobs");
  },
  computed: {
    jobsId() {
      return this.$store.getters["jobs/getJobsId"](this.$route.params.id);
    },
  },
};
</script>

<style>
@import "assets/css/static-page-main.css";
</style>
