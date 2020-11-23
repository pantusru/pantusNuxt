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
        let dataset = [];
        await dispatch("_init_Applicabilities", {
          res: res,
          dataset: dataset,
          TopParent: undefined
        });
        return dataset;
      });
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
        visible: true,
        TopParent: data.TopParent,
        selectChecked: false
      });
      if (array.childs.length > 0) {
        await dispatch("_init_Applicabilities", {
          res: array.childs,
          dataset: data.dataset[index].children,
          TopParent: data.TopParent
        });
      }
    });
  }
};
