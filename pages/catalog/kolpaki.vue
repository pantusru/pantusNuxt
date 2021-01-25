<template>
  <b-container>
    <div
      style="width: 50%; height: 15px; position: absolute; background: #fff"
    />
    <script src="https://img.catalogs-parts.com/js/frame.js" />
    <iframe
      id="cp_frame"
      name="cp_frame"
      src="https://caps.catalogs-parts.com/#{client:sm90kj;page:caps;lang:ru}"
      onload="FrameManager.registerFrame(this)"
      scrolling="no"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      width="100%"
    />
  </b-container>
</template>

<script>
export default {
  name: "Kolpaki",
};
</script>

<style scoped></style>
