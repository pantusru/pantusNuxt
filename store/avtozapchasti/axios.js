export const actions = {
  async _avtozapchasti({}, slug) {
    return await this.$axios.$get(
      `${process.env.api}/products/redirect/${slug}`
    );
    // return { id: 5 };
  },
};
