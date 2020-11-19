<template>
  <li
    :class="{'activ-li': selected}"
    @click="clickLi"
    v-on="$listeners"
    class="option-my">
      {{ dataset.name }}
  </li>
</template>

<script>
export default {
  name: "panel-applicabilities-li",
  created() {
    if(this.panel.length !==0){
      if(typeof this.panel === 'object'){
        this.panel.forEach(data =>{
          if(data === this.dataset.id){
            this.selected = true;
          }
        })
      }else if( typeof this.panel === 'number'){
        this.selected = this.panel === this.dataset.id;
      }
    }
  },
  data() {
    return {
      selected: false,
    }
  },
  methods:{
    clickLi(){
      this.selected = !this.selected;
      this.$emit('panel', {id:this.dataset.id, value: this.selected})
    }
  },
  props: {
    arr: {},
    dataset: {},
    panel:{},
  }
}
</script>

<style>
.activ-li{
  background-color: #cccccc;
}
.option-my{
  cursor: pointer;
  padding: 5px;
}
</style>
