<template>
  <div :class="addClass">
    <div class="d-flex justify-content-between">
      <label class="mr-3 pl-0" :for="name">{{ items }}</label>
      <b-form-input
        v-mask="Vmask"
        :type="type"
        v-model.trim="$v.Form[name].$model"
        :id="name"
        class="w-75"
        size="sm"
      >
      </b-form-input>
    </div>
    <div class="error-full text-center">
      <div class="error" v-for="data in error" :key="data.id">
        <span v-if="!$v.Form[name][data.ifv] && $v.Form[name].$dirty"
          >{{ data.text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import mixinsProps from "@/mixins/input/props/index";
export default {
  // created(){
  //   if(this.User !== undefined && this.User.length !== 0 ){
  //     // this.value= this.User;
  //   }
  // },
  mixins: [mixinsProps],
  props: {
    addClass: {
      default: "mb-2"
    }
  }
  // computed:{
  //     User:{
  //         get(){
  //           return this.$store.getters["User/FormData"][this.name];
  //         },
  //       set(value){
  //         this.$v.Form[this.name].$touch();
  //         this.$store.commit("Order/Form/SetFull", {name: this.name, value: value});
  //       }
  //   }
  // }
};
</script>
