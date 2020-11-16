<template>
  <div class="input">
        <b-input @input="searchBrand" v-model.trim="search" class="mb-3 fz-6" :placeholder="placeholders"></b-input>
       <div class="error mb-3" v-if="error">Строка поиска не может содержать указанный вами символ</div>
  </div>
</template>

<script>
export default {
    props:{
        GetName:{},
        placeholders:{
            default: "Поиск по списку"
        }
    },
    data(){
        return{
            search: "",
            error: false,
        }
    },
  methods:{
    searchBrand() {
      let data = [];
      let reg = /^[0-9A-Za-zА-Яа-яЁ\s]+$/gui
      let check = reg.test(this.search);
      if(check || this.search.length === 0){
        this.error = false;
        data = this.data.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()))
      }else{
        this.error = true;
        data = this.data;
      }
      this.$emit("Vsearch", {data:data, search:this.search.length});
    }
  },
    computed: {
        data(){
            return this.$store.getters[this.GetName];
        },
    }
}
</script>
