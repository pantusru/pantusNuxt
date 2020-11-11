<template>
  <div class="d-flex flex-column" v-if="dataset.visible">
      <b-form-group class="mb-0"  v-if="dataset.children.length != 0">
          <Vchexbox :dataset="dataset">
            <button variant="white" class="link-danger p-0 text-555 border-0 bg-transparent" v-on:click="showGo">
                <b-icon-chevron-down v-if="show" font-scale = "0.9" rotate="180"></b-icon-chevron-down>
                <b-icon-chevron-down  v-if="show === false" font-scale = "0.9"></b-icon-chevron-down>
            </button>
          </Vchexbox>
          <b-collapse  :visible="show" v-if="show">
              <b-form-group
                  class="ml-4 mb-0"
                  v-for="data in dataset.children"
                  :key="data.id">
                  <Vchexbox  
                    :dataset="data" 
                    v-if="data.children.length === 0"/>
                  <VueChexbox
                    :dataset="data"
                    v-if="data.children.length != 0"
                  />
              </b-form-group>
          </b-collapse>
      </b-form-group>
      <Vchexbox :dataset="dataset" v-if="dataset.children.length === 0" />
    </div>  
</template>

<script> 
import Vchexbox from "@/components/search/panel/chexbox/chexbox"
  export default {
    methods:{
      showGo(event) {
        event.preventDefault();
        this.show = !this.show;
      }
    },
    data() {
      return {
        show: false,
      }
    },
    name: "VueChexbox",
    props:["dataset"],
    components: {
      Vchexbox,
    },
    created(){
      // if(this.dataset.CheckedType || this.dataset.Indeterminate){
      //   this.show = true;
      // }
    }
  }
</script>