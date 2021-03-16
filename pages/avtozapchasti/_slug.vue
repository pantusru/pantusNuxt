<template />

<script>
export default {
  name: "AvtozapchastiSlug",
  async fetch({ store, redirect, dispatch, route }) {
    const res = await store.dispatch(
      "avtozapchasti/axios/_avtozapchasti",
      route.params.slug
    );
    if (res.id !== null) {
      redirect(`/products/${res.id}`);
    } else {
      redirect("/404");
    }
  },
};
</script>
