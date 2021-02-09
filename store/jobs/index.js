export const state = () => ({
  jobs: undefined,
  jobsId: undefined,
});
export const mutations = {
  SetJobs(store, data) {
    store.jobs = data;
  },
  SetJobsId(store, data) {
    store.jobsId = data;
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
  getJobsId: s => s.jobsId,
};
