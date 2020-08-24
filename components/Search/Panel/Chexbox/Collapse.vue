<template>
  <div>
    <b-form-group class="mb-2">
      <template v-slot:label>
            <b-form-checkbox
            v-model="allSelected"
            :indeterminate="indeterminate"
            aria-describedby="flavours"
            aria-controls="flavours"
            @change="toggleAll">
                {{ name }}
                <b-button variant="white" class="link-danger p-0" v-b-toggle="id">
                        <b-icon-chevron-down  font-scale = "0.9"></b-icon-chevron-down>
                </b-button>
            </b-form-checkbox>
        </template>
        <!--  ПОТОМКИ -->
         <b-collapse :id="id">
            <b-form-checkbox-group
                :id="id"
                v-model="selected"
                name="flavors"
                class="ml-4 mb-2"
                aria-label="Individual flavours"
                stacked
                v-for="data in flavours"
                :key="data.id">
                <b-form-checkbox  v-if="data.children === undefined"
                    :value="data.id.toString()">
                        {{ data.name}}
                </b-form-checkbox>
                <VueChexbox :name="data.name" :id="data.id.toString()"  :flavours="data.children" v-if="data.children != undefined"/>
            </b-form-checkbox-group>
         </b-collapse>
       <!--  ПОТОМКИ -->
    </b-form-group>
  </div>
</template>

<script>
  export default {
    name: "VueChexbox",
    props:["flavours", "name", "id"],
    data() {
      return {
        selected: [],
        allSelected: false,
        indeterminate: false,
        chexboxSelected: false,
      }
    },
    methods: {
      toggleAll(checked) {
        this.selected = checked ? this.flavours.slice() : []
      },
      DeleteAll(){ // удалить с Vuex все значения
        let flavours = this.flavours;
        flavours.forEach(element => {
            this.$store.commit("Chexbox/DeleteChexbox", element);
          });
          this.chexboxSelected = true;
      }
    },
    watch: {
      selected(newVal, oldVal) {
        console.log("Новое значение" + newVal);
          console.log("Старое значение" + oldVal);
        if (newVal.length === 0) { // Родитель пустой
          console.log("Родитель пуст");
          this.indeterminate = false;
          this.allSelected = false;
          
        } else if (newVal.length === this.flavours.length) { // Родитель Полный
          this.indeterminate = false;
          this.allSelected = this.id;
        } else { // Выбран потомок
          this.indeterminate = true
          this.allSelected = false
        }
        // //  ОПЕРАЦИИ С VUEX
        // if(newVal.length > oldVal.length && !this.chexboxSelected){ // появился новый chexbox
        //   this.$store.commit("Chexbox/SetChexbox", newVal[newVal.length -1]);
        // }
        // if(newVal.length < oldVal.length && !this.chexboxSelected){// убрали  отмечанный  chexbox
        //   this.$store.commit("Chexbox/DeleteChexbox", oldVal[oldVal.length -1]);
        }
      }
    }
</script>