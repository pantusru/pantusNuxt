export const actions = {
  async _User({ dispatch, rootGetters }) {
    // const User = await this.$axios.get(`${process.env.api}/personal/profile`);
    // console.log(await this.$axios.get(`${process.env.api}/personal/profile`));
    console.log(rootGetters);
    const User = await this.$axios.get(`${process.env.api}/personal/profile`, {
      headers: { Authorization: `Bearer ${rootGetters["GetCookie"]}` },
    });
    console.log(User);
    return await dispatch("MapUser", User.data);
  },
  async _Authorization({}, data) {
    return await this.$axios.get(`${process.env.api}/auth`, {
      headers: {
        Authorization: `Basic ${window.btoa(data.login + `:` + data.password)}`,
      },
    });
  },
  MapUser({}, data) {
    console.log(data);
    if (data.error === undefined) {
      const dataset = {};
      dataset.login = data.contacts.email;
      dataset.name = data.name.first;
      dataset.surname = data.name.last;
      dataset.patronymic = data.name.patronymic;
      dataset.telephone = data.contacts.phone.personal;
      dataset.type = data.account.type;
      return dataset;
    }
  },
};
