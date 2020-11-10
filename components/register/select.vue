<template>
  <b-form-group>
    <span @click="eventCheck" class="form-control form-control-sm check-event"> {{ $v.Form[name].$model }}</span>
    <b-select @input="size=1" :select-size="size" v-model="$v.Form[name].$model" v-if="size !== 1">
      <b-form-select-option class="py-2 pl-1 link-danger cursor-pointer" :value="i" v-for="i in 1000" :key="i">{{
          i
        }}
      </b-form-select-option>
    </b-select>
  </b-form-group>
</template>

<script>
export default {
  // inject: ["$v"],
  props: {
    name: {},
    $v: {},
  },
  data() {
    return {
      size: 1,
      value: '',
    }
  },
  methods: {
    eventCheck() {
      if (event.target.className !== "form-control form-control-sm check-event") {
        this.size = 1;
      } else {
        this.size = 8;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.eventCheck);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.eventCheck);
  }
}
</script>

