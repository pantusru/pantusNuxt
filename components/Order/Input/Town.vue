<template>
  <div>
      <div class="d-flex justify-content-between">
            <label class="mr-3  pl-0" :for="name">{{ items }}</label>
            <autocomplete addClass="w-75" @input="SetValue"></autocomplete>
            <!-- <b-input class="w-75" v-on:input="goTown" v-model="value" size="sm" :id="name"></b-input> -->
      </div>
        <div class="error-full text-center">
            <div class="error" v-for="data in error" :key="data.id">
                <span v-if="!$v.Form[name][data.ifv] && $v.Form[name].$dirty">{{data.text}} </span>     
            </div>
        </div>
    </div>
</template>

<script>
import autocomplete from "@/components/vue-suggestion"
import mixitProps from "@/mixins/Input/Props/index"
export default {
    inject:["$v", "VuexSrc"],
    mixins:[mixitProps],
    data() {
        return {
            nameSet: "Order/Form/SetFull", // Изменить
            nameSetTown: "Order/Form/SetFull",
        }
    },
    methods:{
        async SetValue(data){ // Сохранение в VUEX для дальшейшей отправки на API
            this.$v.Form[this.name].$touch();
            this.$store.commit(this.nameSetTown, {data:this.VuexSrc, name: "Town", value: data.data});
            this.$store.commit(this.nameSetTown, {data:this.VuexSrc, name: "TownId", value: data.id});
        },

    },
    components:{
        autocomplete,
    }
}
</script>
