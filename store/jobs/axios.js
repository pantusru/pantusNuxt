export const actions = {
  async axiosJobs({ dispatch }) {
    const { data }  =  await this.$axios.get(`${process.env.api}/vacancies`)
    return await dispatch("_init_MapJobs", data);
  },
  _init_MapJobs({}, data) {
    if (data.length !== 0) {
      const result = [];
      data.forEach(elem => {
        result.push({
          id: elem.id,
          dataCreate: elem.date_created,
          title: elem.name,
          text: elem.preview_text,
          active: elem.active,
          requirements: elem.requirements,
          charge: elem.charge,
          conditions: elem.conditions,
          payment: elem.payment,
        });
      });
      return result;
    } else {
      return [];
    }
  },
};
