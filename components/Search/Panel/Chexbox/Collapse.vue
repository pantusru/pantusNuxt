<template>
  <div class="d-flex flex-column">
    <div v-for="data in dataset" :key="data.id" >
      <b-form-group class="mb-0"  v-if="data.children.length != 0">
          <chexbox :dataset="data">
            <b-button variant="white" class="link-danger p-0" v-b-toggle="data.id.toString()">
              <b-icon-chevron-down  font-scale = "0.9"></b-icon-chevron-down>
            </b-button>
          </chexbox>
          <b-collapse :id="data.id.toString()">
              <b-form-checkbox-group
                  class="ml-4"
                  name="flavors"
                  v-for="children in data.children"
                  :key="children.id">
                  <chexbox :dataset="children" v-if="children.children.length == 0" />
                    <VueChexbox
                      :dataset="children.children"
                      v-if="data.children.length != 0"/>
              </b-form-checkbox-group>
          </b-collapse>
      </b-form-group>
      <chexbox :dataset="data" v-if="data.children.length === 0" />
    </div>  
  </div>
</template>

<script>
import chexbox from "./chexbox"
  export default {
    name: "VueChexbox",
    props:["dataset"],
  }
</script>