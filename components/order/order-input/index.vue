<template>
  <div :class="addClass">
    <div class="d-flex justify-content-between flex-column flex-sm-row">
      <label class="mr-3 pl-0" :for="name"
        >{{ items }}<span v-if="request" class="text-danger"> *</span></label
      >
      <b-form-input
        :id="name"
        v-model.trim="$v.Form[name].$model"
        v-mask="Vmask"
        :type="type"
        class="w-75"
        size="sm"
      />
    </div>
    <base-errors-valid
      class="text-center"
      :error="error"
      :name="name"
      :$v="$v"
    />
    <!--    <div class="error-full text-center">-->
    <!--      <div class="error" v-for="data in error" :key="data.id">-->
    <!--        <span v-if="!$v.Form[name][data.ifv] && $v.Form[name].$dirty"-->
    <!--          >{{ data.text }}-->
    <!--        </span>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
import mixinsProps from "@/mixins/input/props/index";
import BaseErrorsValid from "@/components/base/base-errors-valid";
export default {
  components: { BaseErrorsValid },
  // created(){
  //   if(this.User !== undefined && this.User.length !== 0 ){
  //     // this.value= this.User;
  //   }
  // },
  mixins: [mixinsProps],
  props: {
    addClass: {
      default: "mb-2",
    },
  },
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
