<template>
  <b-form-group>
    <h4 class="fz-5 font-weight-bold mb-3">Цена, Р</h4>
    <div class="range-slider">
      <label class="fz-6 mb-4">от {{ valueMin }} до {{ valueMax }}</label>
      <b-form-input
        v-model="valueMin"
        :value="valueMin"
        type="range"
        min="0"
        max="60000"
        step="1"
        @change="CheckValue"
      />
      <b-form-input
        v-model="valueMax"
        :value="valueMax"
        type="range"
        min="0"
        max="60000"
        step="1"
        @change="CheckValue"
      />
    </div>
  </b-form-group>
</template>

<script>
export default {
  computed: {
    valueMin: {
      get() {
        return this.$store.getters["formSearch/GetMinValue"];
      },
      set(value) {
        this.$store.commit("formSearch/SetMinValue", value);
      },
    },
    valueMax: {
      get() {
        return this.$store.getters["formSearch/GetMaxValue"];
      },
      set(value) {
        this.$store.commit("formSearch/SetMaxValue", value);
      },
    },
  },
  methods: {
    async CheckValue() {
      if (Number(this.valueMin) > Number(this.valueMax)) {
        const rav = this.valueMin;
        this.valueMin = this.valueMax;
        this.valueMax = rav;
      }
    },
  },
};
</script>

<style>
.range-slider {
  position: relative;
}
.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}
input[type="range"]::-webkit-slider-thumb,
input[type="range"]::-ms-thumb {
  z-index: 2;
  position: relative;
}

input[type="range"]::-moz-range-track {
  position: relative;
  z-index: -1;
  border: 0;
}
input[type="range"]:last-of-type::-moz-range-track {
  -moz-appearance: none;
  background: none transparent;
  border: 0;
}
.slider input[type="range"]::-moz-focus-outer {
  border: 0;
}
</style>
