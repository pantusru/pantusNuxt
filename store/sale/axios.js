export const actions = {
  async _saleAxios({ dispatch }) {
    const data = await this.$axios.$get(`${process.env.api}/sale_products`);
    return await dispatch("Products/axios/_init_Product", data, { root: true });
  },
};
