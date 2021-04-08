export const actions = {
  async _Analogs({ dispatch }, data) {
    const brand = data.brand;
    const sku = data.number;
    const analog = await this.$axios.$get(
      `${process.env.api}/abcp/articles/info?brand=${brand}&sku=${sku}`
    );
    return await dispatch("_mapAnalogs", analog);
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
