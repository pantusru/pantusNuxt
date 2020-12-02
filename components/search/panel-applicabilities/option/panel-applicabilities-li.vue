<template>
  <li
    :class="{ 'active-li': selected, children: type === 'children' }"
    @click="clickLi"
    v-on="$listeners"
    class="option-my"
  >
    {{ dataset.name }}
  </li>
</template>

<script>
export default {
  name: "panel-applicabilities-li",
  created() {
    if (this.panel.length !== 0) {
      if (typeof this.panel === "object") {
        this.panel.forEach(data => {
          if (data === this.dataset.id) {
            this.selected = true;
          }
        });
      } else if (typeof this.panel === "number") {
        this.selected = this.panel === this.dataset.id;
      }
    }
  },
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    clickLi() {
      this.selected = !this.selected;
      this.$emit("panel", { id: this.dataset.id, value: this.selected });
    },
  },
  props: {
    arr: {},
    dataset: {},
    panel: {},
    type: {},
  },
};
</script>

<style>
.active-li {
  background-color: #cccccc;
}
.active-li.children {
  background-color: #fff;
}
.option-my {
  display: flex;
  cursor: pointer;
  padding: 5px;
}
.option-my.children:before {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  margin-right: 10px;
  content: "";
  border: #adb5bd solid 1px;
  padding: 0 7px;
  border-radius: 0.25rem;
}
.option-my.children.active-li:before {
  content: "\2714";
}
</style>
