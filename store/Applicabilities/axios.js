export const actions = {
  /**
   * #Запрос на все применимости
   * @returns {Object} массив объектов применимости
   * @async
   *
   */
  async _Applicabilities({ dispatch }) {
    return await this.$axios
      .$get(`${process.env.api}/product_applicabilities?view=tree`)
      .then(async res => {
        const dataset = [];
        await dispatch("_init_Applicabilities", {
          res,
          dataset,
          TopParent: undefined,
        });
        return dataset;
      });
  },

  async _ApplicabilitiesDescription({ dispatch }, id) {
    const res = await this.$axios.$get(
      `${process.env.api}/product_applicabilities/${id}`
    );
    return dispatch("_init_ApplicabilitiesDescription", res);
  },

  /**
   * @param data.res - data api
   * @param data.dataset - dataset interface
   * @param data.TopParent - высший parent for children
   * @private
   */
  _init_Applicabilities({ dispatch }, data) {
    data.res.forEach(async (array, index) => {
      if (array.parentId !== null && data.TopParent === undefined) {
        data.TopParent = array.parentId;
      }
      data.dataset.push({
        id: array.id,
        parentId: array.parentId,
        name: array.name,
        level: array.depthLevel,
        children: [],
        code: array.code,
        visible: true,
        TopParent: data.TopParent,
        selectChecked: false,
      });
      if (array.childs.length > 0) {
        await dispatch("_init_Applicabilities", {
          res: array.childs,
          dataset: data.dataset[index].children,
          TopParent: data.TopParent,
        });
      }
    });
  },
  _init_ApplicabilitiesDescription({}, data) {
    return {
      description: data.description,
    };
  },
};
