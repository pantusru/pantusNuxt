const axios = require("axios");
const getBrands = async () => {
  const { data } = await axios.get("https://api.pantus.ru/product_brands");
  return data.map(brand => `brands/${brand.code}`);
};

const getCategoriesParent = (data, id) => {
  return data.filter(elemCheck => elemCheck.id === id)[0];
};

const getRecursion = (data, name) => {
  const categories = [];
  data.forEach(elem => {
    if (elem.depthLevel === 1) {
      categories.push(`${name}/${elem.code}`);
    }
    if (elem.depthLevel === 2) {
      const topCategories = getCategoriesParent(data, elem.parentId);
      categories.push(`${name}/${topCategories.code}/${elem.code}`);
    }
    if (elem.depthLevel === 3) {
      const topCategories = getCategoriesParent(data, elem.parentId);
      const MidCategories = getCategoriesParent(data, topCategories.parentId);
      categories.push(
        `${name}/${MidCategories.code}/${MidCategories.code}/${elem.code}`
      );
    }
  });
  return categories;
};

const getCategories = async () => {
  const { data } = await axios.get("https://api.pantus.ru/product_categories");
  return getRecursion(data, "categories");
};

const getAcceptability = async () => {
  const { data } = await axios.get(
    "https://api.pantus.ru/product_applicabilities"
  );
  return getRecursion(data, "carbrands");
};

const getNews = async () => {
  const { data } = await axios.get("http://api.pantus.ru/news/sitemap");
  return data.map(news => `news/${news.id}`);
};

const getNewsCategories = async () => {
  const { data } = await axios.get("https://api.pantus.ru/news/categories");
  return data.map(news => `news/${news.code}`);
};
// const getContacts = () => {
//   const mapContacts = [];
//   this.$store.getters["contacts/getContactsAll"].forEach(elem => {
//     elem.cities.forEach(elemCity => {
//       mapContacts.push(`/contacts/${elemCity.code}`);
//     });
//   });
//   return mapContacts;
// };
const all = async () => {
  const brand = await getBrands();
  const categories = await getCategories();
  const acceptability = await getAcceptability();
  const news = await getNews();
  const newsCategories = await getNewsCategories();
  // const contacts = await getContacts();
  return [
    ...brand,
    ...categories,
    ...acceptability,
    ...news,
    ...newsCategories,
    // ...contacts,
  ];
};
export default all;
