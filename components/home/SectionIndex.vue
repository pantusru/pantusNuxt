<template>
  <section class="section-index row no-gutters">
    <div class="content-categoria col-md-9 col-12 row">
      <categoriaVue
        srcIndex="/search?filter_applicabilities=3138"
        class="col-12 col-lg-8 mb-2 mb-lg-0"
        title="Автозапчасти для а/м ВАЗ"
        :ul="categoriaUrl[0]"
        :src="urlPantus + '/bitrix/templates/main/img/home/home-car-1.png'"
        alt="home-car-1"
      />
      <div class="col-12 col-lg-4 mb-2 mb-lg-0">
        <div class="blog-mini-categoria">
          <h2 class="pt-4">
            <nuxt-link
              to="/search?filter_brands=453"
              class="categoria-title link-hover"
              >Генераторы СОАТЭ</nuxt-link
            >
          </h2>
          <div class="mini-categoria-img">
            <img
              class="img-100-auto"
              style="width: 180px; margin-left: auto; display: block"
              :src="
                urlPantus +
                '/upload/medialibrary/5cf/mobile_file_2020-11-11_08-16-20 (2).jpg'
              "
              alt="home-car-2"
            />
          </div>
        </div>
      </div>

      <categoriaVue
        srcIndex="/search?filter_applicabilities=4837,4798,4800"
        class-img="w-250px img-100-auto"
        class="col-12 col-lg-8 mb-2 mb-lg-0"
        title="Новые бренды на Pantus.ru"
        :ul="categoriaUrl[1]"
        :src="urlPantus + '/upload/medialibrary/4ae/4457741.jpg'"
        alt="home-car-3"
      />
      <div class="col-12 col-lg-4 mb-2 mb-lg-0">
        <div class="blog-mini-categoria">
          <h2 class="pt-4">
            <nuxt-link
              to="search?filter_applicabilities=4802"
              class="categoria-title link-hover"
              >Запчасти для а/м Renault</nuxt-link
            >
          </h2>
          <div class="mini-categoria-img">
            <img
              class="img-100-auto"
              style="width: 180px; margin-left: auto; display: block"
              src="@/assets/img/home/home-car-4.png"
              alt="home-car-3"
            />
          </div>
        </div>
      </div>
    </div>
    <banner :img="dataImg" class="d-none d-lg-block" />
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
      urlPantus: process.env.pantus,
      dataImg: [
        {
          src: `${process.env.pantus}/bitrix/images/site/optbanner2.jpg`,
          alt: "Специальное предложение оптовикам",
          href: "/opt",
          id: 1,
        },
        {
          src: `${process.env.pantus}/bitrix/images/site/banner.1millionproducts.jpg`,
          alt: "Новый товар в каталогах",
          href: "/news/3416139",
          id: 2,
        },
        {
          src: `${process.env.pantus}/bitrix/images/site/appbanner.jpg`,
          alt: "Слайдер мобильного приложения",
          href: "/app",
          id: 3,
        },
      ],
      categoriaUrl: [
        [
          {
            name: "Запчасти для а/м Приору",
            href: "/search?filter_applicabilities=4864",
          },
          {
            name: "Запчасти для а/м а Весту",
            href: "/search?filter_applicabilities=4973",
          },
          {
            name: "Запчасти для а/м  ВАЗ",
            href: "/search?filter_applicabilities=3138",
          },
        ],
        [
          { name: "Daewoo", href: "/search?filter_applicabilities=4798" },
          { name: "Hyundai", href: "/search?filter_applicabilities=4800" },
          { name: "Kia", href: "/search?filter_applicabilities=4837" },
        ],
      ],
    };
  },
};
</script>

<style lang="sass">
.w-250px
  width: 250px
.section-index
    display: flex
    justify-content: space-between
    flex-wrap: wrap
.blog-mini-categoria
    box-shadow: 10px 17px 30px rgba(0, 0, 0, 0.05)
    height: 100%
    display: flex
    flex-direction: column
    justify-content: space-between
</style>
