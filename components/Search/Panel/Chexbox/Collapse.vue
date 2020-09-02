<template>
  <div class="d-flex flex-column" v-if="dataset.visible">
      <b-form-group class="mb-0"  v-if="dataset.children.length != 0">
          <Vchexbox :dataset="dataset">
            <b-button variant="white" class="link-danger p-0" v-on:click="showGo">
              <b-icon-chevron-down  font-scale = "0.9"></b-icon-chevron-down>
            </b-button>
          </Vchexbox>
          <b-collapse  :visible="show" v-if="show">
              <b-form-checkbox-group
                  class="ml-4"
                  name="flavors"
                  v-for="data in dataset.children"
                  :key="data.id">
                  <Vchexbox 
                    :dataset="data" 
                    v-if="data.children.length === 0"
                  />
                  <VueChexbox
                    :dataset="data"
                    v-if="data.children.length != 0"
                  />
              </b-form-checkbox-group>
          </b-collapse>
      </b-form-group>
      <Vchexbox :dataset="dataset" v-if="dataset.children.length === 0" />
    </div>  
</template>

<script>
import Vchexbox from "./chexbox"
  export default {
    methods:{
      showGo() {
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
  }
</script>