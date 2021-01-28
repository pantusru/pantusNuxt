<template>
  <section class="section-index">
    <div class="content-categoria col-lg-9 col-12 row">
      <categoriaVue
        class="col-12 col-lg-8 mb-2 mb-lg-0"
        title="Автозапчасти ВАЗ"
        :ul="categoriaUrl[0]"
        src="https://www.pantus.ru/bitrix/templates/main/img/home/home-car-1.png"
        alt="1"
      />
      <div class="col-12 col-lg-4 mb-2 mb-lg-0">
        <div class="blog-mini-categoria">
          <h2 class="pt-2">
            <a href="" class="categoria-title link-hover">Генераторы СОАТЭ</a>
          </h2>
          <div class="mini-categoria-img">
            <img
              style="width: 180px; margin-left: auto; display: block"
              src="https://www.pantus.ru/upload/medialibrary/5cf/mobile_file_2020-11-11_08-16-20 (2).jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <categoriaVue
        class="col-12 col-lg-8 mb-2 mb-lg-0"
        title="Запчасти для корейских Авто"
        :ul="categoriaUrl[1]"
        src="https://www.pantus.ru/upload/medialibrary/4ae/4457741.jpg"
        alt="1"
      />
      <div class="col-12 col-lg-4 mb-2 mb-lg-0">
        <div class="blog-mini-categoria">
          <h2>
            <a href="" class="categoria-title link-hover">Запчасти Renault</a>
          </h2>
          <div class="mini-categoria-img">
            <img
              style="width: 180px; margin-left: auto; display: block"
              src="@/assets/img/home/home-car-4.png"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
    <banner :img="dataImg" />
  </section>
</template>

<script>
import categoriaVue from "~/components/microComponents/categoria";
import banner from "~/components/microComponents/banner";
export default {
  components: {
    categoriaVue,
    banner,
  },
  data() {
    return {
      dataImg: [
        {
          src: "https://www.pantus.ru/bitrix/images/site/optbanner2.jpg",
          alt: "12",
          href: "11",
          id: 1,
        },
        {
          src:
            "https://www.pantus.ru/bitrix/images/site/banner.1millionproducts.jpg",
          alt: "12",
          href: "11",
          id: 2,
        },
        {
          src: "https://www.pantus.ru/bitrix/images/site/appbanner.jpg",
          alt: "12",
          href: "11",
          id: 3,
        },
      ],
      categoriaUrl: [
        [
          { name: "Запчасти на Приору", href: "" },
          { name: "Запчасти на Весту", href: "" },
          { name: "Все запчасти ВАЗ", href: "" },
        ],
        [
          { name: "Daewoo", href: "" },
          { name: "Hyundai", href: "" },
          { name: "Kia", href: "" },
        ],
      ],
    };
  },
};
</script>

<style lang="sass">
.section-index
    display: flex
    justify-content: space-between
    flex-wrap: wrap
.blog-mini-categoria
    box-shadow: 10px 17px 30px rgba(0, 0, 0, 0.05)
    height: 100%
.mini-categoria-img

</style>
