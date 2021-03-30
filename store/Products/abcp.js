export const actions = {
  async _Analogs({ dispatch }, data) {
    const brand = data.brand;
    const sku = data.number;
    const analog = await this.$axios.$get(
      `${process.env.api}/abcp/articles/info?brand=${brand}&sku=${sku}`
    );
    const mapAnalogs = await dispatch("_mapAnalogs", analog);
    console.log(mapAnalogs);
    return []
    // const dataset = await this.$axios.$post(`${process.env.api}/`, {
    //   mapAnalogs,
    // });
    // return dispatch("Products/axios/_init_Product", dataset, { root: true });
  },
  _mapAnalogs({}, data) {
    const crosses = [];
    data.crosses.forEach(element => {
      crosses.push({
        brand: element.brand,
        sku: element.number,
      });
    });
    return crosses;
  },
};
