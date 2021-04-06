<template>
  <b-container>
    <section class="section">
      <b-row>
        <nuxt-link
          to="/search"
          class="col-12 col-sm-6 col-lg-3 d-flex align-self-center justify-content-center flex-column mb-2"
        >
          <div class="col-8 mx-auto mb-3 text-center">
            <b-img
              :src="require('@img/advantage/feature-new-01.png')"
              class="img-advantage"
            />
          </div>
          <div class="text-center">
            <b class="home-advantage-content-title"
              >Более
              <span class="home-advantage-content-link"> 22000 </span>
            </b>
            <br >
            <p class="home-advantage-content-text text-body">
              автозапчастей в каталогах
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/delivery"
          class="col-12 col-sm-6 col-lg-3 d-flex align-self-center justify-content-center flex-column mb-2"
        >
          <div class="col-8 mx-auto mb-3 text-center">
            <b-img
              :src="require('@img/advantage/feature-new-02.png')"
              class="img-advantage"
            />
          </div>
          <div class="text-center">
            <b class="home-advantage-content-title">
              Доставка
              <span class="home-advantage-content-link"> по всему миру </span>
            </b>
            <br >
            <p class="home-advantage-content-text text-body">
              От 0 руб. по России
            </p>
          </div>
        </nuxt-link>
        <b-col
          class="col-12 col-sm-6 col-lg-3 d-flex align-self-center justify-content-center flex-column mb-2"
        >
          <div class="col-8 mx-auto mb-3 text-center">
            <b-img
              :src="require('@img/advantage/feature-new-03.png')"
              class="img-advantage"
            />
          </div>
          <div class="text-center">
            <b class="home-advantage-content-title"> ИНДИВИДУАЛЬНОЕ </b>
            <br >
            <p class="home-advantage-content-text">производство деталей</p>
          </div>
        </b-col>
        <nuxt-link
          to="/pay"
          class="col-12 col-sm-6 col-lg-3 d-flex align-self-center justify-content-center flex-column mb-2"
        >
          <div class="col-8 mx-auto mb-3 text-center">
            <b-img
              :src="require('@img/advantage/feature-new-04.png')"
              class="img-advantage bag-img"
            />
          </div>
          <div class="text-center">
            <b class="home-advantage-content-title">
              <span to="/pay" class="home-advantage-content-link"> 20 </span>
              СПОСОБОВ ОПЛАТЫ
            </b>
            <br >
            <p class="home-advantage-content-text text-body">
              с возможностью отсрочки и оплаты при получении
            </p>
          </div>
        </nuxt-link>
      </b-row>
    </section>
  </b-container>
</template>

<script>
export default {
  name: "Advantage",
};
</script>
<style>
.section {
  margin-top: 60px;
}
.home-advantage-content-title {
  font-size: 14px;
  color: #2d414e;
}
.home-advantage-content-link {
  color: #c32836 !important;
}
.home-advantage-content-text {
  font-size: 13px;
}
.img-advantage {
  height: 95px;
}
.bag-img {
  max-width: 86px;
}
</style>
