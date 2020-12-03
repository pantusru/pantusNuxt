<template>
  <b-container>
    <section class="section">
      <b-row>
        <b-col
          class="col-lg-3 d-flex align-self-center justify-content-center flex-column"
        >
          <div class="col-8 mx-auto mb-3">
            <b-img :src="require('@img/advantage/feature-new-01.png')" />
          </div>
          <div class="text-center">
            <b class="home-advantage-content-title">
              Более
              <nuxt-link to="/search" class="home-advantage-content-link">
                22000
              </nuxt-link>
            </b>
            <br />
            <p class="home-advantage-content-text">автозапчастей в каталогах</p>
          </div>
        </b-col>
        <b-col
          class="col-lg-3 d-flex align-self-center justify-content-center flex-column"
        >
          <div class="col-8 mx-auto mb-3">
            <b-img :src="require('@img/advantage/feature-new-02.png')" />
          </div>
          <div class="text-center">
            <b class="home-advantage-content-title">
              Доставка
              <nuxt-link to="/search" class="home-advantage-content-link">
                по всему миру
              </nuxt-link>
            </b>
            <br />
            <p class="home-advantage-content-text">От 0 руб. по России</p>
          </div>
        </b-col>
        <b-col
          class="col-lg-3 d-flex align-self-center justify-content-center flex-column"
        >
          <div class="col-8 mx-auto mb-3">
            <b-img :src="require('@img/advantage/feature-new-03.png')" />
          </div>
          <div class="text-center">
            <b class="home-advantage-content-title"> ИНДИВИДУАЛЬНОЕ </b>
            <br />
            <p class="home-advantage-content-text">производство деталей</p>
          </div>
        </b-col>
        <b-col
          class="col-lg-3 d-flex align-self-center justify-content-center flex-column"
        >
          <div class="col-8 mx-auto mb-3">
            <b-img
              :src="require('@img/advantage/feature-new-04.png')"
              class="img-advantage-h120px"
            />
          </div>
          <div class="text-center">
            <b class="home-advantage-content-title">
              <nuxt-link to="/search" class="home-advantage-content-link">
                20
              </nuxt-link>
              СПОСОБОВ ОПЛАТЫ
            </b>
            <br />
            <p class="home-advantage-content-text">
              с возможностью отсрочки и оплаты при получении
            </p>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <nuxt-link to=""> </nuxt-link>
        </b-col>
      </b-row>
    </section>
  </b-container>
</template>

<script>
export default {};
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
.img-advantage-h120px {
  max-height: 120px;
}
</style>
