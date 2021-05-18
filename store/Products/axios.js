export const actions = {
  async _ProductId({ dispatch }, id) {
    const product = await this.$axios.$get(
      `${process.env.api}/products_filter`,
      {
        params: {
          id,
        },
      }
    );
    console.log("product-id");
    const dataProduct = await dispatch("_init_Product", product.data);
    return dataProduct;
  },

  /**
   *
   * @param {Array} data.data  - Массив всех видимых query
   * @param {Number} data.limit - количество отображаемого товара
   */
  async _ProductFilter({ dispatch, commit }, data) {
    const dataset = await dispatch("_init_MapFilter", data.data);
    const product = await this.$axios.$get(
      `${process.env.api}/products_filter`,
      {
        params: {
          ...dataset,
          page_size: data.limit,
        },
      }
    );
    const dataProduct = await dispatch("_init_Product", product.data);
    return { product: dataProduct, count: product.meta.count };
  },
  /**
   *
   * @param {Array} data.data  - Массив всех видимых query
   * @param {Number} data.limit - количество отображаемого товара
   */
  async _ProductPopularFilter({ dispatch }, data) {
    const product = await this.$axios.$get(
      `${process.env.api}/popular_products`,
      {
        params: {
          page_size: data.limit,
        },
      }
    );
    const dataProduct = await dispatch("_init_Product", product);
    return dataProduct;
  },

  async _AnalogsAxios({ dispatch, rootGetters }, data) {
    const brand = data.brand;
    const sku = data.sku;
    const dataset = await this.$axios.$get(
      `${process.env.api}/products/analogs`,
      {
        params: {
          brand,
          sku,
        },
      },
      {
        headers: { Authorization: `Bearer ${rootGetters.GetCookie}` },
      }
    );
    return dispatch("Products/axios/_init_Product", dataset, { root: true });
  },
  /***
   * ### map Продуктов
   * @param {Array} data - Массив товара
   */
  _init_Product({ store, state }, data) {
    const dataset = [];
    if (data.length === 0 || data.error !== undefined) {
      return [];
    }
    // console.log(data);
    data.forEach(elem => {
      dataset.push({
        ProductCard: {
          // Карточка Товара
          id: elem.id, // id Товара
          name: elem.name, // Название товара
          params: {
            // Параметры товара
            measure: elem.params.measure,
            weight: elem.params.weight,
          },
          nomenclature: {
            code: elem?.nomenclature?.code,
          },
          sku: {
            // Артикул товара
            original: elem.sku.origin, // Оригинал
            normalized: elem.sku.custom, // Ссылка
          },
          ProductCardImage: {
            url: elem.images.main, // Изображение
          },
          album: [],
          ProductCardOem: elem.oems, // OEM
          brand: {
            // brand
            id: elem.brand.id,
            name: elem.brand.name,
            code: elem.brand.code,
            deliveryDelay: elem.brand.deliveryDelay,
          },
          categories: [],
          applicabilities: [],
        },
        productOffer: [],
      });
      if (elem.categories.length !== 0) {
        // Категории
        elem.categories.forEach(data => {
          dataset[dataset.length - 1].ProductCard.categories.push({
            id: data.id,
            name: data.name,
          });
        });
      }
      if (elem.applicabilities.length !== 0) {
        // Применяемости
        elem.applicabilities.forEach(data => {
          dataset[dataset.length - 1].ProductCard.applicabilities.push({
            id: data.id,
            name: data.name,
          });
        });
      }
      if (elem.images.extra.length !== 0) {
        // Альбом товара
        elem.images.extra.forEach(data => {
          dataset[dataset.length - 1].images.extra.push({ url: data });
        });
      }
      if (elem.offers.length !== 0) {
        elem.offers.forEach(data => {
          // Предложение Товара
          dataset[dataset.length - 1].productOffer.push({
            active: data.activity,
            id: data.id,
            prices: data.price,
            quantity: data.quantity,
            supplier: {
              name: data.supplier.name,
              deliveryDelay: data.supplier.deliveryDelay,
              deliveryDelayView: data.supplier.deliveryDelayView,
            },
            multiplicity: data.supplier.orderMultiplicity,
          });
        });
      }
    });
    return dataset;
  },
  /***
   * ### map фильтров Продуктов для API
   * @param {Array} data - Массив фильтров
   */
  _init_MapFilter({ store }, data) {
    const filter = {};
    if (data !== undefined) {
      if (data.filter_categories !== undefined) {
        filter.filter_categories = data.filter_categories;
      }
      if (data.filter_brands !== undefined) {
        filter.filter_brands = data.filter_brands;
      }
      if (data.filter_applicabilities !== undefined) {
        filter.filter_applicabilities = data.filter_applicabilities;
      }
      if (data.page_number !== undefined) {
        filter.page_number = data.page_number;
      }
      if (data.filter_substr !== undefined) {
        filter.filter_substr = data.filter_substr;
      }
    }
    return filter;
  },
};
