<template>
  <b-container>
    <h1>Ошибка 404 страница не найдена</h1>
  </b-container>
</template>

<script>
export default {
  asyncData({ redirect }) {
    redirect("/404");
  },
};
</script>

<style></style>
