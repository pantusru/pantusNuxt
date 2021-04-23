export const actions = {
  async _Product({ dispatch, rootGetters }) {
    const product = await this.$axios.$get(
      `${process.env.api}/personal/favorites?view=products`,
      { headers: { Authorization: `Bearer ${rootGetters.GetCookie}` } }
    );
    return await dispatch("Products/axios/_init_Product", product, {
      root: true,
    });
  },
  async _ProductDelete({ dispatch, rootGetters }, id) {
    return await this.$axios.delete(
      `${process.env.api}/personal/favorites/${id}`,
      {
        headers: { Authorization: `Bearer ${rootGetters.GetCookie}` },
      }
    );
  },
  async _ProductPost({ dispatch, rootGetters }, id) {
    return await this.$axios.put(`${process.env.api}/personal/favorites`, id, {
      headers: { Authorization: `Bearer ${rootGetters.GetCookie}` },
    });
  },
};
