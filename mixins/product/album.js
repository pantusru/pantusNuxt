export default {
  data() {
    return {
      UrlMain: "",
    };
  },
  methods: {
    MainUrl(index) {
      this.UrlMain = this.dataset.ProductCard.album[index].url;
    },
    MainTrue() {
      this.UrlMain = this.dataset.ProductCard.ProductCardImage.url;
    },
    reset() {
      this.UrlMain = this.dataset.ProductCard.ProductCardImage.url;
    },
  },
};
