<template>
  <b-container>
    <iframe
      id="acat-frame"
      src="https://pantus.acat.online"
      width="90%"
      height="100%"
      scrolling="no"
      frameborder="0"
    />
    <script type="text/javascript">
      window.addEventListener(
        "message",
        function (e) {
          try {
            let data = JSON.parse(e.data);
            if (data && data.acatFrameHeight) {
              document.getElementById("acat-frame").style.height =
                data.acatFrameHeight + "px";
            }
          } catch (e) {}
        },
        false
      );
    </script>
  </b-container>
</template>

<script>
export default {
  name: "Originalpartscatalog",
};
</script>
