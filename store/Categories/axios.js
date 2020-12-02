export const actions = {
  // Получить все категории товаров с структурой потомок родитель!
  async _CategoriesStrAll({ dispatch }) {
    return await this.$axios
      .$get(`${process.env.api}/product_categories?view=tree`)
      .then(async res => {
        let dataset = [];
        await dispatch("_init_CategoriesStrAll", {
          res: res,
          dataset: dataset,
        });
        return dataset;
      });
  },
  /**
   * @param data.res - data api
   * @param data.dataset - dataset interface
   * @private
   */
  _init_CategoriesStrAll({ dispatch }, data) {
    data.res.forEach(async (array, index) => {
      data.dataset.push({
        id: array.id,
        parentId: array.parentId,
        name: array.name,
        level: array.depthLevel,
        children: [],
        visible: true,
        CheckedType: false,
        Indeterminate: false,
      });
      if (array.childs.length > 0) {
        await dispatch("_init_CategoriesStrAll", {
          res: array.childs,
          dataset: data.dataset[index].children,
        });
      }
    });
  },
};
