<template>
  <b-container>
    <div
      style="width: 50%; height: 15px; position: absolute; background: #fff"
    />
    <script src="https://img.catalogs-parts.com/js/frame.js" />
    <iframe
      id="cp_frame"
      name="cp_frame"
      src="https://wheels.catalogs-parts.com/#{client:sm90kj;page:wheels;lang:ru;group:0}"
      onload="FrameManager.registerFrame(this)"
      scrolling=""
      style="height: 100vh"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      width="100%"
    />
  </b-container>
</template>

<script>
export default {
  name: "Diski",
  head() {
    return {
      title: `Оригинальные каталоги`,
      meta: [
        {
          name: "description",
          content: ``,
        },
        {
          name: "keywords",
          content: `Запчасти, автозапчасти, купить запчасти, каталог запчастей, интернет магазин автозапчастей, продажа запчастей, запчасти ваз, газ, камаз, маз`,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
