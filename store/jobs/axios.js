export const actions = {
  async axiosJobs({ dispatch }) {
    const data =  this.$axios.get(`${process.env.api}/api.pantus.ru/vacancies`)
    return await dispatch("_init_MapJobs", data);
  },
  _init_MapJobs({}, data) {
    console.log(data);
    if (data.length === 0) {
      const result = [];
      data.forEach(elem => {
        result.push({
          id: elem.id,
          dataCreate: elem.date_created,
          title: elem.name,
          text: elem.preview_text,
          active: elem.active,
          content: elem.detail_text,
        });
      });
      return result;
    } else {
      return [];
    }
  },
};
