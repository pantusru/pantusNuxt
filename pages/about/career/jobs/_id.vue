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
          to:
            "/upload/files/%D0%90%D0%9D%D0%9A%D0%95%D0%A2%D0%90%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0.docx",
          name: "Анкета для соискателя",
        },
      ],
    };
  },
  async fetch({ store, params }) {
    await store.dispatch("jobs/actionsJobsId", params.id);
  },
  computed: {
    jobsId() {
      return this.$store.getters["jobs/getJobsId"];
    },
  },
};
</script>

<style>
@import "assets/css/static-page-main.css";
</style>
