<template>
<div class="mobile-app">
  <div class="header">
    <div class="header-logo-panel">
      <div class="header-logo-panel__col">asdasd</div>
      <div class="header-logo-panel__col">asdasd</div>
      <div class="header-logo-panel__col">dddddddd</div>
    </div>

    <div class="header_text header_title">Pantus AR</div>
    <div class="header_text header_description">
      Отсканируйте упаковку товара с помощью этого приложения, чтобы увидеть его 3D-модели на экране смартфона в
      дополненной
      реальности и получить информацию о его особенностях и преимyhghgugуществах.</div>

  </div>

</div>
</template>

<script>
export default {
  name: "index",
  head() {
    return {
      title: "Мобильное приложение автозапчасти",
      meta: [
        {
          name: "app",
          content:
            "Запчасти, автозапчасти, купить запчасти, каталог запчастей, интернет магазин автозапчастей, продажа запчастей, запчасти ваз, газ, камаз, маз",

        },
      ],
    };
  },



};
</script>

<style >

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  border: 1px solid white;
}

body{
  position: relative;
  width: 100%;
  min-width: 320px;
  height: 100%;
  overflow-x: hidden;
  background-color: #292934 !important;
  color: #272727;
  font-size: 16px;
  font-family: roboto-400, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

.mobile-app:before{
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 1920px;
  height: 950px;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  border-radius: 0px 0px 1000px 1000px;
  background-color: #fff;
}

.header{
  position: absolute;
}

.header-logo-panel{
  display: flex;
  justify-content: space-around;
}

.header_text {
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
}
</style>
