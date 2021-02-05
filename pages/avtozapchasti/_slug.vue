<template></template>

<script>
export default {
  name: "avtozapchastiSlug",
  async fetch({ store, redirect, dispatch }) {
    const res = await store.dispatch("avtozapchasti/axios/_avtozapchasti");
    if (res.id !== null) {
      redirect(`/products/${res.id}`);
    } else {
      redirect("/404");
    }
  },
};
</script>

<style scoped></style>
