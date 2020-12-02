<template>
  <div>
    <span class="custom-select">{{ $v.Form[name].$model }}</span>
    <ul class="overflow p-0 border" v-if="get">
      <li
        :class="{ 'active-li': $v.Form[name].$model == i }"
        @click="$v.Form[name].$model = i"
        :value="i"
        v-for="i in 1000"
        :key="i"
        class="py-2 pl-1 link-danger cursor-pointer"
      >
        {{ i }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    name: {},
    $v: {},
  },
  data() {
    return {
      get: false,
      value: "",
    };
  },
  methods: {
    eventCheck(event) {
      if (event.target.className !== "custom-select") {
        this.get = false;
      } else {
        this.get = true;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.eventCheck);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.eventCheck);
  },
};
</script>

<style>
.active-li {
  background-color: #cccccc;
}
</style>
