<template>
  <li
    :class="{'activ-li': selected}"
    @click="selected = !selected"
    v-on="$listeners"
    class="option-my">
      {{ text }}
  </li>
</template>

<script>
export default {
  name: "panel-applicabilities-li",
  created() {
    if(this.dataset.length > 0){
      if(this.dataset.filter( (data) => data.id === this.id )){
          this.selected = true;
      }
    }
  },
  watch:{
    async dataset(){
       this.selected = await false;
    }
  },
  data() {
    return {
      selected: false,
    }
  },
  props: {
    text: {},
    dataset: {},
    id: {},
  }
}
</script>

<style>
.activ-li{
  background-color: #436174;
}

</style>
