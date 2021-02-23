<template>
  <b-container>
    <div class='row'>
      <side-bar :items-menu="sideBarItems" />
      <script src="https://yastatic.net/q/forms-frontend-ext/_/embed.js" />
      <iframe
        class='col'
        src="https://forms.yandex.ru/u/602b62b1b12901c5491424fb/?iframe=1"
        frameborder="0"
        name="ya-form-602b62b1b12901c5491424fb"
        style="max-width: 100%; width: 650px"
      />
    </div>

  </b-container>
</template>

<script>
import SideBar from '~/components/static/elements/sidebar'
export default {
  name: "AboutForm",
  components: { SideBar },
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
};
</script>

<style scoped></style>
