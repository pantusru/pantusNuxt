export const actions = {
  async _Analogs({ dispatch }, data) {
    const brand = data.brand;
    const number = data.number;
    const product = await this.$axios.$get(
      `${process.env.apiAbcp}/articles/info/?brand=${brand}&number=${number}&userlogin=api@id34565&userpsw=c261616c95417a5d072cb9ccbbc10cde&format=bnphic&locale=ru_RU`
    );
    const mapAnalogs = dispatch("_mapAnalogs", product);
    const dataset = await this.$axios.$post(`${process.env.api}/`, {
      mapAnalogs,
    });
    return dispatch("Products/axios/_init_Product", dataset, { root: true });
  },
  _mapAnalogs({}, data) {
    const crosses = [];
    data.crosses.forEach(element => {
      crosses.push({
        brand: element.brand,
        number: element.number,
      });
    });
    return crosses;
  },
};
