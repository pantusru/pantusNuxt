export const actions = {
  async AxiosContacts({ dispatch }) {
    const { data } = await this.$axios.get("https://api.pantus.ru/contacts");
    return dispatch("_init_Contacts", data);
  },
  _init_Contacts({}, data) {
    const res = [];
    data.forEach(elem => {
      res.push({
        region: elem.region,
        cities: [],
      });
      elem.cities.forEach(elemCity => {
        res[res.length - 1].cities.push({
          code: elemCity.folder,
          name: elemCity.city,
        });
      });
    });
    return res;
  },
};
