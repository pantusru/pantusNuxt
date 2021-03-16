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
      redirect(301, `/products/${res.id}`);
    } else {
      redirect(302, "/404");
    }
  },
};
</script>
