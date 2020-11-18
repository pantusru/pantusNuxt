<template>
  <div>
    <b-form class="d-flex p-0 align-items-center" :class="AddClassForm">
      <b-icon-dash class="cursor-pointer" :class="{'d-none d-lg-block':showIcon}" @click="dash"></b-icon-dash>
      <b-input
        type="number"
        @input="GetError"
        @blur="CheckInput"
        :class="AddClassInput"
        class="ml-2 mr-2 text-center"
        v-model="Count"
      ></b-input>
      <b-icon-plus class="cursor-pointer" :class="{'d-none d-lg-block':showIcon}" @click="plus"></b-icon-plus>
    </b-form>
    <div class="error mt-2" v-if="error === true">
      Не коррентное количество товара
    </div>
  </div>
</template>

<script>
export default {
  name:"product-input-count",
  props: {
    showIcon: {
      default: false,
    },
    AddClassInput: {},
    AddClassForm: {},
    CountProps: {},
    multiplicity: {
      default: 1,
    },
    array: null,
  },
  data() {
    return {
      error: false,
      Count: this.CountProps,
    };
  },
  watch:{
    CountProps(){
      this.Count = this.CountProps;
    }
  },
  methods: {
    //  Передача Emit
    emitGo() {
      this.$emit("Count", {
        Count: this.Count,
        array: this.array,
      });
    },
    //  Уменьшать кол-во товар
    dash() {
      if (this.Count > this.multiplicity) {
        this.Count = this.Count - this.multiplicity;
        this.emitGo();
      }
    },
    //  Увеличить кол-во товар
    plus() {
      this.Count = Number(this.Count) + Number(this.multiplicity);
      this.emitGo();
    },
    // Проверка количество товара
    GetError() {
      if (this.error == true) {
        this.error = false;
      }
      if (
        this.Count < this.multiplicity ||
        this.Count == "" ||
        this.Count % this.multiplicity > 0
      ) {
        this.error = true;
      }
    },
    // ОТРАВКА при потери фокуса
    CheckInput() {
      if (this.Count < this.multiplicity || this.Count == "") {
        this.Count = this.multiplicity;
      }
      if (this.Count % this.multiplicity > 0) {
        this.Count = this.Count - (this.Count % this.multiplicity);
      }
      this.error = false;
      this.emitGo();
    },
  },
};
</script>
