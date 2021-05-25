<template>
  <b-form-group>
    <b-form-radio-group
      v-model="buyer_local"
      @input="GoEmit($event)"
      class="mb-4"
    >
<!--      <b-form-radio name="some-radios" value="retail"-->
<!--        >Розничный покупатель</b-form-radio-->
<!--      >-->
      <b-form-radio name="some-radios" value="wholesale"
        >Оптовый покупатель</b-form-radio
      >
    </b-form-radio-group>
    <div class="mb-3">
      <h3 v-if="buyer === 'retail'">Заполните данные о себе:</h3>
      <h3 v-if="buyer === 'wholesale'">
        Заполните данные о себе и организации:
      </h3>
    </div>
  </b-form-group>
</template>

<script>
export default {
  methods: {
    GoEmit(event) {
      this.$emit("update:buyer", event);
    },
  },
  data() {
    return {
      buyer_local: this.buyer,
    };
  },
  props: {
    buyer: {},
  },
};
</script>
