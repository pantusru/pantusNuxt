export const state = () => ({
  brandCarouser: [],
});
export const mutations = {
  setBrandCarouser(store, data) {
    store.brandCarouser = data;
  },
};
export const actions = {
  async actionBrandCarouser({ commit }) {
    // const data = await this.$axios.$get(
    //   `${process.env.api}/product_brands/carousel`
    // );
    const data =
      [
      {
        code: "brt",
        img: "https://bx.pantus.ru/upload/medialibrary/2e9/брт.png",
      },
      {
        code: "ss20",
        img: "https://bx.pantus.ru/upload/medialibrary/d64/ss20.png",
      },
      {
        code: "soate",
        img: "https://bx.pantus.ru/upload/medialibrary/228/соатэ.png",
      },
      {
        code: "sevi",
        img: "https://bx.pantus.ru/upload/medialibrary/cb9/сэви.png",
      },
      {
        code: "promtekhplast",
        img:
          "https://bx.pantus.ru/upload/medialibrary/23d/2c89f191712f674611732dd1bbcc5655.jpg",
      },
      {
        code: "bzak",
        img: "https://bx.pantus.ru/upload/medialibrary/2d9/бзак.png",
      },
      {
        code: "trek",
        img: "https://bx.pantus.ru/opt/media/suppliers/trek.png",
      },
      {
        code: "vrt",
        img: "https://bx.pantus.ru/upload/medialibrary/bf6/vrt.png",
      },
      {
        code: "pantus",
        img: "https://bx.pantus.ru/bitrix/templates/main/img/d/smallogo.png",
      },
      {
        code: "bmrt",
        img: "https://bx.pantus.ru/upload/medialibrary/6b7/бмрт.png",
      },
      {
        code: "ad-plastik",
        img: "https://bx.pantus.ru/bitrix/templates/main/img/home/logo2.png",
      },
      {
        code: "kzate",
        img: "https://bx.pantus.ru/bitrix/templates/main/img/home/logo3.png",
      },
      {
        code: "rezinotekhnika",
        img: "https://bx.pantus.ru/opt/media/suppliers/resinotechnika.png",
      },
      {
        code: "avp",
        img: "https://bx.pantus.ru/media-library/brands/avtopartner.png",
      },
    ];
    commit("setBrandCarouser", data);
  },
};
export const getters = {
  getBrandCarouser: s => s.brandCarouser,
};
