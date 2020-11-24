export const actions = {
  // async _ProductId() {
  //   let product = [
  //     {
  //       ProductCard: {
  //         id: 30,
  //         name: "Товар1",
  //         sku: {
  //           original: "6534-ку",
  //           normalized: "6534-ru"
  //         },
  //         ProductCardImage: {
  //           url:
  //             "https://www.pantus.ru//bitrix/templates/main/img/home/home-car-1.png"
  //         },
  //         album: [
  //           {
  //             url:
  //               "https://www.pantus.ru//bitrix/templates/main/img/home/home-car-1.png"
  //           },
  //           {
  //             url:
  //               "https://www.pantus.ru/bitrix/templates/main/img/home-car-3.png"
  //           }
  //         ],
  //         ProductCardOem: [
  //           "21082-1101138",
  //           "1082-1101138-00",
  //           "21082-1101138СИНA-sport",
  //           "210821101138",
  //           "21082110113800"
  //         ],
  //         brand: {
  //           id: 5,
  //           name: "A-Sport"
  //         }
  //       },
  //       productOffer: [
  //         {
  //           id: 3,
  //           prices: 356,
  //           quantity: 411,
  //           supplier: {
  //             name: "Пантус",
  //             deliveryDelay: "Сегодня"
  //           },
  //           multiplicity: 2
  //         },
  //         {
  //           id: 13,
  //           prices: 451,
  //           quantity: 211,
  //           supplier: {
  //             name: "Пумма",
  //             deliveryDelay: "Завтра"
  //           },
  //           multiplicity: 2
  //         },
  //         {
  //           id: 23,
  //           prices: 1566,
  //           quantity: 71,
  //           supplier: {
  //             name: "Зума",
  //             deliveryDelay: "Завтра"
  //           },
  //           multiplicity: 1
  //         }
  //       ]
  //     }
  //   ];
  //   return product;
  // },
  // async _Analogs() {
  //   let product = [
  //     {
  //       ProductCard: {
  //         categories: [
  //           {
  //             name: "Прокладка"
  //           },
  //           {
  //             name: "Двигатель"
  //           }
  //         ],
  //         id: 30,
  //         name: "Товар1",
  //         sku: {
  //           original: "6534-ку",
  //           normalized: "6534-ru"
  //         },
  //         ProductCardImage: {
  //           url:
  //             "https://www.pantus.ru/upload/iblock/38c/10034697ASP%20-%20%D0%9F%D1%80%D0%BE%D0%BA%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0%20%D0%B1%D0%B5%D0%BD%D0%B7%D0%BE%D0%BD%D0%B0%D1%81%D0%BE%D1%81%D0%B0%20%D0%92%D0%90%D0%97%2021082%20%D1%81%D0%B8%D0%BB%D0%B8%D0%BA%D0%BE%D0%BD%20%D1%81%D0%B8%D0%BD%D0%B8%D0%B9%20-%20A-Sport.jpg"
  //         },
  //         album: [
  //           {
  //             url:
  //               "https://www.pantus.ru/upload/iblock/def/00034867ALT%20-%20%D0%9F%D0%B0%D1%82%D1%80%D1%83%D0%B1%D0%BA%D0%B8%20%D0%BF%D0%B5%D1%87%D0%BA%D0%B8%20%D0%92%D0%90%D0%97%201118%20-%20%D0%90%D1%81%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D1%86%D0%B8%D1%8F%20%D0%91%D0%B0%D0%BB%D0%B0%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D1%85%20%D0%9F%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9%20%D0%90%D0%B2%D1%82%D0%BE%D0%B7%D0%B0%D0%BF%D1%87%D0%B0%D1%81%D1%82%D0%B5%D0%B9.jpg"
  //           },
  //           {
  //             url:
  //               "http://www.pantus.ru/upload/iblock/eca/00034867ALT%20-%20Патрубки%20печки%20ВАЗ%201118%20-%20Ассоциация%20Балаковских%20Производителей%20Автозапчастей.jpg"
  //           }
  //         ],
  //         ProductCardOem: [
  //           "21082-1101138",
  //           "1082-1101138-00",
  //           "21082-1101138СИНA-sport",
  //           "210821101138",
  //           "21082110113800"
  //         ],
  //         brand: {
  //           id: 5,
  //           name: "A-Sport"
  //         }
  //       },
  //       productOffer: [
  //         {
  //           id: 3,
  //           prices: 356,
  //           quantity: 411,
  //           supplier: {
  //             name: "Пантус",
  //             deliveryDelay: "Сегодня"
  //           },
  //           multiplicity: 2
  //         },
  //         {
  //           id: 13,
  //           prices: 451,
  //           quantity: 211,
  //           supplier: {
  //             name: "Пумма",
  //             deliveryDelay: "Завтра"
  //           },
  //           multiplicity: 1
  //         },
  //         {
  //           id: 23,
  //           prices: 1566,
  //           quantity: 71,
  //           supplier: {
  //             name: "Зума",
  //             deliveryDelay: "Завтра"
  //           },
  //           multiplicity: 1
  //         }
  //       ]
  //     },
  //     {
  //       ProductCard: {
  //         id: 35,
  //         name: "Товар1",
  //         sku: {
  //           original: "6534-ку",
  //           normalized: "6534-ru"
  //         },
  //         ProductCardImage: {
  //           url:
  //             "https://www.pantus.ru/upload/iblock/38c/10034697ASP%20-%20%D0%9F%D1%80%D0%BE%D0%BA%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0%20%D0%B1%D0%B5%D0%BD%D0%B7%D0%BE%D0%BD%D0%B0%D1%81%D0%BE%D1%81%D0%B0%20%D0%92%D0%90%D0%97%2021082%20%D1%81%D0%B8%D0%BB%D0%B8%D0%BA%D0%BE%D0%BD%20%D1%81%D0%B8%D0%BD%D0%B8%D0%B9%20-%20A-Sport.jpg"
  //         },
  //         album: [
  //           {
  //             url:
  //               "http://www.pantus.ru/upload/iblock/eca/00034867ALT%20-%20Патрубки%20печки%20ВАЗ%201118%20-%20Ассоциация%20Балаковских%20Производителей%20Автозапчастей.jpg"
  //           }
  //         ],
  //         ProductCardOem: [
  //           "21082-1101138",
  //           "1082-1101138-00",
  //           "21082-1101138СИНA-sport",
  //           "210821101138",
  //           "21082110113800"
  //         ],
  //         brand: {
  //           id: 5,
  //           name: "A-Sport"
  //         }
  //       },
  //       productOffer: [
  //         {
  //           id: 3333,
  //           prices: 356,
  //           quantity: 411,
  //           supplier: {
  //             name: "Пантус",
  //             deliveryDelay: "Сегодня"
  //           },
  //           multiplicity: 5
  //         },
  //         {
  //           id: 121,
  //           prices: 451,
  //           quantity: 211,
  //           supplier: {
  //             name: "Пумма",
  //             deliveryDelay: "Завтра"
  //           },
  //           multiplicity: 3
  //         },
  //         {
  //           id: 543,
  //           prices: 1566,
  //           quantity: 71,
  //           supplier: {
  //             name: "Зума",
  //             deliveryDelay: "Завтра"
  //           },
  //           multiplicity: 10
  //         }
  //       ]
  //     }
  //   ];
  //   return product;
  // },

  /**
   *
   * @param {Array} data.data  - Массив всех видимых query
   * @param {Number} data.limit - количество отображаемого товара
   */
  async _ProductFilter({ dispatch }, data) {
    const dataset = await dispatch("_init_MapFilter", data.data);
    const product = await this.$axios.$get(
      "http://api.pantus.ru/products_filter",
      {
        params: {
          ...dataset,
          page_size: data.limit
        }
      }
    );
    const dataProduct = await dispatch("_init_Product", product);
    return dataProduct;
  },

  async _ProductFilterCount({ dispatch, commit, store }, data) {
    const dataset = await dispatch("_init_MapFilter", data);
    const count = await this.$axios.$get(
      "http://api.pantus.ru/products_filter",
      {
        params: {
          ...dataset,
          view: "count"
        }
      }
    );
    commit("Products/SetCountPage", count, { root: true });
  },
  /***
   * ### map Продуктов
   * @param {Array} data - Массив товара
   */
  _init_Product({ store, state }, data) {
    const dataset = [];
    data.forEach(elem => {
      dataset.push({
        ProductCard: {
          // Карточка Товара
          id: elem.id, // id Товара
          name: elem.name, // Название товара
          sku: {
            // Артикуль товара
            original: elem.sku.origin, // Оригинал
            normalized: elem.sku.custom // Ссылка
          },
          ProductCardImage: {
            url: elem.images.main // Изображение
          },
          album: [],
          ProductCardOem: elem.oems, // OEM
          brand: {
            // brand
            id: elem.brand.id,
            name: elem.brand.name
          },
          categories: [],
          applicabilities: []
        },
        productOffer: []
      });
      if (elem.categories.length !== 0) {
        // Категории
        elem.categories.forEach(data => {
          dataset[dataset.length - 1].ProductCard.categories.push({
            id: data.id,
            name: data.name
          });
        });
      }
      if (elem.applicabilities.length !== 0) {
        // Применяемости
        elem.applicabilities.forEach(data => {
          dataset[dataset.length - 1].ProductCard.applicabilities.push({
            id: data.id,
            name: data.name
          });
        });
      }
      if (elem.images.extra.length !== 0) {
        // Альбом товара
        elem.images.extra.forEach(data => {
          dataset[dataset.length - 1].images.extra.push({ url: data });
        });
      }
      elem.offers.forEach(data => {
        // Предложение Товара
        dataset[dataset.length - 1].productOffer.push({
          id: data.id,
          prices: data.price,
          quantity: data.quantity,
          supplier: {
            name: data.supplier.name,
            deliveryDelay: data.supplier.deliveryDelay
          },
          multiplicity: data.supplier.orderMultiplicity
        });
      });
    });
    return dataset;
  },
  /***
   * ### map Продуктов
   * @param {Array} data - Массив товара
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
  }
};
