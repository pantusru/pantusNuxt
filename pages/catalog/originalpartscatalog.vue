<template>
  <b-container>
    <iframe
      id="acat-frame"
      style="min-height: 70vh"
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
