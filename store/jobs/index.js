export const state = () => ({
  jobs: undefined,
});
export const mutations = {
  SetJobs(store, data) {
    store.jobs = data;
  },
};
export const actions = {
  async actionsJobs({ commit, dispatch }) {
    const data = await dispatch("axios/axiosJobs");
    commit("SetJobs", data);
  },
};
export const getters = {
  getJobs: s => s.jobs,
  getJobsId: s => id => s.jobs.filter(elem => elem.id == id),
};
