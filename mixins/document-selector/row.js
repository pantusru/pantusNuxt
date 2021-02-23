export default {
  methods: {
    rowAll() {
      const row = document.querySelectorAll(".container-static .col-md-12");
      row.forEach(elem => {
        elem.classList.add("row");
        elem.style.paddingLeft = "15px";
      });
    },
  },
};
