<template>
  <b-col :cols="mobileCols" :lg="pcCols" class="sidebar py-3 px-0">
    <div class="sidebar-box d-none d-lg-block">
      <nav class="nav-sidebar">
        <a href="/help/">Помощь</a>
        <a href="/help/#kak-sdelat-zakaz">Заказ</a>
        <a href="/delivery/">Доставка</a>
        <a href="/delivery/#freedeliverу">Условия бесплатной доставки</a>
        <a href="/pay/">Оплата</a>
        <a href="/help/#returns">Возврат</a>
        <a href="/documents/privacypolicy/">Обработка персональных данных</a>
        <a href="/documents/user-agreement/">Пользовательское соглашение</a>
        <a href="/help/feedback/">Единая служба качества</a>
      </nav>
    </div>
    <div class="w-100 px-3">
      <nav class="d-block d-lg-none w-100 side-bar-mobile-box">
        <b-row>
          <b-col>
            <b-row cols="1" class="px-3">
              <a href="/help/">Помощь</a>
              <a href="/help/#kak-sdelat-zakaz">Заказ</a>
              <a href="/delivery/">Доставка</a>
              <a href="/delivery/#freedeliverу">Условия бесплатной доставки</a>
              <a href="/pay/">Оплата</a>
            </b-row>
          </b-col>

          <b-col>
            <b-row cols="1" class="px-3">
              <a href="/help/#returns">Возврат</a>
              <a href="/documents/privacypolicy/"
                >Обработка персональных данных</a
              >
              <a href="/documents/user-agreement/"
                >Пользовательское соглашение</a
              >
              <a href="/help/feedback/">Единая служба качества</a>
            </b-row>
          </b-col>
        </b-row>
      </nav>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "Index",
  props: {
    mobileCols: {
      type: String,
      default: "12",
    },
    pcCols: {
      type: String,
      default: "2",
    },
  },
};
</script>

<style scoped>
.sidebar a {
  color: #436174;
  -webkit-transition: color linear 300ms;
  -o-transition: color linear 300ms;
  transition: color linear 300ms;
  text-decoration: underline;
  margin-bottom: 10px;
}

.sidebar a:hover {
  text-decoration: none;
}

.sidebar-box {
  /*max-width: 228px;*/
  background: #a7d2ee
    url(https://www.pantus.ru/bitrix/templates/main/img/d/bg-sidebar.jpg) 0 0
    no-repeat;
  position: relative;
  padding: 20px 13px 10px 13px;
}

.nav-sidebar {
  font-size: 15px;
  color: #555;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  line-height: 20px;
}
.sidebar-box:after {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 52px;
  background: transparent
    url(https://www.pantus.ru/bitrix/templates/main/img/d/bg-sidebar-01.png) 0 0
    no-repeat;
  bottom: -52px;
  left: 0;
}

.side-bar-mobile-box {
  line-height: 20px;
}
</style>
