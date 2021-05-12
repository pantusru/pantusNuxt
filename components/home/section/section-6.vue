<template>
  <section class="section6">
    <div class="container">
      <div class="row">
        <div class="section6-col">
          <img
            :src="require('@/assets/img/advantage/feature-new-01.png')"
            alt=""
            class="section6-img"
          />
          <div class="section6-wrapper-text">
            <b>
              Более
              <span class="section6-span">22000</span>
            </b>
            <p class="section6-text">автозапчастей в каталогах</p>
          </div>
        </div>
        <div class="section6-col">
          <img
            :src="require('@/assets/img/advantage/feature-new-02.png')"
            alt=""
            class="section6-img"
          />
          <div class="section6-wrapper-text">
            <b>
              Доставка
              <span class="section6-span"> по всему миру </span>
            </b>

            <p class="section6-text">От 0 руб. по России</p>
          </div>
        </div>
        <div class="section6-col">
          <img
            :src="require('@/assets/img/advantage/feature-new-03.png')"
            alt=""
            class="section6-img"
          />
          <div class="section6-wrapper-text">
            <b> ИНДИВИДУАЛЬНОЕ </b>
            <p class="section6-text">производство деталей</p>
          </div>
        </div>
        <div class="section6-col">
          <img
            :src="require('@/assets/img/advantage/feature-new-04.png')"
            alt=""
            class="section6-img section6-img__4"
          />
          <div class="section6-wrapper-text">
            <b>
              <span class="section6-span">20 </span>
              СПОСОБОВ ОПЛАТЫ
            </b>
            <p class="section6-text">
              с возможностью отсрочки и оплаты при получении
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'Section6',
}
</script>

<style lang="sass">
@import "assets/sass/home/section/section6"
</style>
