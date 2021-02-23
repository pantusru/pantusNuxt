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
        <jobs-id />
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
  async fetch({ store,  params, redirect }) {
    await store.dispatch("jobs/actionsJobs");
    if(!store.getters["jobs/getJobsId"](params.id)[0]){
      redirect("/404");
    }
  },
};
</script>

<style>
@import "assets/css/static-page-main.css";
</style>
