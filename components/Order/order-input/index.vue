<template>
    <div :class="addClass">
        <div class="d-flex justify-content-between">
            <label class="mr-3  pl-0" :for="name">{{ items }}</label>
            <b-form-input
                v-mask="Vmask"
                :type="type"
                v-model.trim="User"
                :id="name"
                class="w-75"
                size="sm">
            </b-form-input>
        </div>
        <base-errors-valid :name="name" :error="error" :$v="$v" />
    </div>
</template>

<script>
import mixitProps from "@/mixins/input/props/index"
import BaseErrorsValid from "@/components/base/base-errors-valid";
export default {
  components: {BaseErrorsValid},
  created(){
      if(this.User !== undefined && this.User.length !== 0 ){
        this.$v.Form[this.name].$model = this.User;
      }
    },
    // watch:{
    //     value(){
    //         this.$v.Form[this.name].$touch();
    //         this.$store.commit(this.nameSet, {name: this.name, value:this.value});
    //     },
    // },
    mixins:[mixitProps],
    inject:["$v"],
    data(){
        return{
            nameSet: "Order/Form/SetFull",
            value: "",
        }
    },
    props:{
        addClass:{
            default: "mb-2"
        },
    },
    computed:{
        User:{
            get(){
              return this.$store.getters["User/FormData"][this.name];
            },
        set(value){
          this.$v.Form[this.name].$touch();
          this.$store.commit(this.nameSet, {name: this.name, value: value});
        }
      }
    }
}
</script>

