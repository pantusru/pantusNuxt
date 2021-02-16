<template>
  <b-container>
    <h1>Ошибка 404 страница не найдена</h1>
  </b-container>
</template>

<script>
export default {
  asyncData({ redirect, route }) {
    if (route.name !== "404") {
      redirect("/404");
    }
  },
};
</script>

<style></style>
