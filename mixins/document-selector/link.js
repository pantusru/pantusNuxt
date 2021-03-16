export default {
  methods: {
    linkBrand() {
      const link = document.querySelectorAll(".btn.red");
      link.forEach(elem => {
        elem.onclick = event => {
          event.preventDefault();
          this.$router.push(`/search?filter_brands=${this.brand.id}`);
        };
      });
    },
  },
};
