<template>
  <b-button @click="Submit">Отправить</b-button>
</template>

<script>
export default {
  data() {
    return {
      ids: [],
    };
  },
  methods: {
    Submit() {
      GetPanel.forEach((element) => {
        if (element.SelectedGenerations.length != 0) {
          console.log(element.SelectedGenerations);
        } else if (element.SelectedModel.length != 0) {
          console.log(element.SelectedGenerations);
        } else if (element.SelectedMarka.length != 0) {
            console.log(element.SelectedMarka);
        }
      });
    },
  },
  computed: {
    GetPanel() {
      return this.$store.getters["Applicabilities/Panel/GetPanel"];
    },
  },
};
</script>
 