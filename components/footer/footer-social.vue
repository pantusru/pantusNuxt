<template>
  <b-col cols="12" lg="3" md="6">
    <h6 class="mb-3"> <b>Мы в соцсетях</b></h6>
    <b-row no-gutters class="mb-3">
      <a v-for="data in linksImg" :key="data.id" :href="data.href" class="mr-2">
        <img :src="data.src" :alt="data.alt" />
      </a>
    </b-row>
    <b-row class="flex-md-column mb-2">
      <b-col cols="3" md="6" class="mb-2">
        <a href=""><img src="@img/footer/googleplay.svg" alt="" /></a>
      </b-col>
      <b-col cols="3" md="6">
        <a href=""><img src="@img/footer/appstore.svg" alt="" /></a>
      </b-col>
    </b-row>
    <div>
      Интернет-магазин автозапчастей <br />
      Опт, розница, доставка
    </div>
    <div>
      <a class="fz-3 text-decoration-none text-2d414e" href="tel:8 800 555 8721"> <b>8 800 555 8721 </b></a>
      <div>
        © 2003–2020 ООО «ПАНТУС»<br />
        Все права защищены
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "footer-social",
  data() {
    return {
      linksImg: [
        { src: require("@img/footer/vk.png"), href: "", alt: "11" },
        { src: require("@img/footer/youtub.png"), href: "", alt: "22" },
        { src: require("@img/footer/instargam.png"), href: "", alt: "33" },
        { src: require("@img/footer/telegram3.png"), href: "", alt: "33" },
      ],
    };
  },
};
</script>


