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
  async actionsJobsId({ commit, dispatch }, id) {
    const data = await dispatch("axios/axiosJobsId", id);
    commit("SetJobsId", data);
  },
};
export const getters = {
  getJobs: s => s.jobs,
  getJobsId: s => id => s.jobs.filter(elem => elem.id === id),
};
