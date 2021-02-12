export const actions = {
  async _User({ dispatch, rootGetters }) {
    // const User = await this.$axios.get(`${process.env.api}/personal/profile`);
    // console.log(await this.$axios.get(`${process.env.api}/personal/profile`));
    const User = await this.$axios.get(`${process.env.api}/personal/profile`, {
      headers: { Authorization: `Bearer ${rootGetters.GetCookie}` },
    });
    return await dispatch("MapUser", User.data);
  },
  async _UserCreate({ dispatch }, user) {
    const userRegister = await dispatch("mapUserCreate", user);
    return await this.$axios.post(`${process.env.api}/users`, userRegister, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  async _UserUpdate({ dispatch, rootGetters }, user) {
    const userUpdate = await dispatch("mapUserUpdate", user);
    return await this.$axios.patch(`${process.env.api}/users`, userUpdate, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters.GetCookie}`,
      },
    });
  },
  async getToken() {
    const res = await this.$axios.get(`${process.env.api}/auth`, {
      headers: {
        Authorization: ``,
      },
    });
    return res.data.token;
  },
  async _Authorization({}, data) {
    return await this.$axios.get(`${process.env.api}/auth`, {
      headers: {
        Authorization: `Basic ${window.btoa(data.login + `:` + data.password)}`,
      },
    });
  },
  MapUser({}, data) {
    if (data.error === undefined) {
      const dataset = {};
      dataset.login = data.contacts.email;
      dataset.name = data.name.first;
      dataset.surname = data.name.last;
      dataset.patronymic = data.name.patronymic;
      dataset.telephone = data.contacts.phone.personal;
      dataset.type = data.account.type;
      return dataset;
    } else {
      return data;
    }
  },
  mapUserUpdate({}, user) {
    return {
      name: {
        first: user.name,
        last: user.surname,
        patronymic: user.patronymic,
      },
      contacts: {
        phone: {
          personal: user.telephone,
        },
      },
    };
  },
  mapUserCreate({}, user) {
    return {
      passwd: user.password,
      organization: {
        name: user.organization,
        address: user.address,
        tin: user.inn,
      },
      account: {
        type: user.type,
      },
      name: {
        first: user.name,
        last: user.surname,
      },
      contacts: {
        email: user.email,
        phone: {
          personal: user.telephone,
        },
      },
    };
  },
};
