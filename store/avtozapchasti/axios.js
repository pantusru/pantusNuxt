export const actions = {
  async _avtozapchasti() {
    return await this.$axios.$get(`${process.env.api}`);
    // return { id: 5 };
  },
};
