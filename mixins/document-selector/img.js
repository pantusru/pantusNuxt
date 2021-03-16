export default {
  methods: {
    imgAll() {
      const img = document.querySelectorAll(".container-static img");
      img.forEach(elem => {
        const w = elem.getAttribute("width");
        elem.style = `width:${w};padding-right: 10px`;
      });
    },
  },
};
