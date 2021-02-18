<template>
  <b-col cols="12" lg="3" md="6">
    <h6 class="mb-3"><b>Мы в соцсетях</b></h6>
    <b-row no-gutters class="mb-3">
      <a
        v-for="data in linksImg"
        :key="data.id"
        :href="data.href"
        class="mr-2 wrapper-icons-social"
      >
        <img :src="data.src" :alt="data.alt" />
      </a>
    </b-row>
    <b-row class="flex-column mb-2">
      <b-col cols="4" md="6" class="mb-2">
        <a href="https://apps.apple.com/us/app/pantus/id1475702773">
          <img src="@img/footer/googleplay.svg" alt="googleplay" />
        </a>
      </b-col>
      <b-col cols="4" md="6">
        <a
          href="https://play.google.com/store/apps/details?id=ru.sigmadigital.pantus"
        >
          <img src="@img/footer/appstore.svg" alt="appstore" />
        </a>
      </b-col>
    </b-row>
    <div>
      Интернет-магазин автозапчастей <br />
      Опт, розница, доставка
    </div>
    <div>
      <a
        class="fz-3 text-decoration-none text-2d414e"
        href="tel:8 800 555 8721"
      >
        <b>8 800 555 8721 </b></a
      >
      <div>
        © 2003–2020 ООО «ПАНТУС»<br />
        Все права защищены
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "FooterSocial",
  data() {
    return {
      linksImg: [
        {
          src: require("@img/footer/vk.png"),
          href: "https://vk.com/pantusclub",
          alt: "vk.com",
        },
        {
          src: require("@img/footer/youtub.png"),
          href: "https://www.youtube.com/channel/UCwXbMkU-NXMp72xINxamRWQ",
          alt: "youtube",
        },
        {
          src: require("@img/footer/instargam.png"),
          href: "https://www.instagram.com/pantus.ru/",
          alt: "instagram",
        },
        {
          src: require("@img/footer/telegram3.png"),
          href: "https://tgclick.com/pantusclub",
          alt: "telegram",
        },
      ],
    };
  },
};
</script>
<style lang="sass">
//@import "assets/";
</style>
