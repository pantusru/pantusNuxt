<template />

<script>
export default {
  name: "NewsCatIdRedirect",
  asyncData({ redirect, params }) {
    redirect(`/news/${params.id}`);
  },
};
</script>
