<template></template>

<script>
export default {
  name: "bestsellers",
  fetch({ redirect }) {
    redirect("/popular");
  },
};
</script>

<style scoped></style>
