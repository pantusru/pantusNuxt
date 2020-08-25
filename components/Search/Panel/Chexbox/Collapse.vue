<template>
    <b-form-group class="mb-2">
      <template v-slot:label>
            <b-form-checkbox
            :value="id"
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
                class="ml-4 mb-2"
                name="flavors"
                v-for="data in flavours"
                :key="data.id">
                <b-form-checkbox  
                    v-if="data.children.length === 0"
                    v-model="selected"
                    :value="data.id.toString()">
                        {{ data.name}}
                </b-form-checkbox>
                  <VueChexbox
                    :model="selected"
                    :name="data.name" 
                    :childrenAll="data.childrenAll"
                    :id="data.id.toString()"  
                    :GetName="GetName" 
                    :flavours="data.children" 
                    v-if="data.children.length != 0"/>
            </b-form-checkbox-group>
         </b-collapse>
       <!--  ПОТОМКИ -->
    </b-form-group>
</template>

<script>
  export default {
    name: "VueChexbox",
    // GetName - Узнать почему неопределенно
    props:["flavours", "id", "childrenAll", "GetName", "name"],
    data() {
      return {
        selected: [],
        allSelected: [],
        indeterminate: false,
        chexboxSelected: false, // Для VUEX 
      }
    },
    methods: {
      toggleAll(checked) {
        this.selected = checked ? this.childrenAll.slice() : [];
      },
      DeleteAll(){ // удалить с Vuex все значения
        this.childrenAll.forEach(element => {
            // this.$store.commit("Catalog/ChexboxId/DeleteChexbox", {data:this.GetName, value:element });
          });
      }
    },
    watch: {
      selected(newVal, oldVal) { 
        if (newVal.length === 0) { // Родитель пустой
          console.log("Родитель пуст");
          this.indeterminate = false;
          this.allSelected = [];
          this.DeleteAll();
          
        } else if (newVal.length === this.childrenAll.length) { // Родитель Полный
          this.indeterminate = false;
          this.allSelected = this.id;
          this.DeleteAll();
          this.childrenAll.forEach(element => {
            // this.$store.commit("Catalog/ChexboxId/SetChexbox", {value: element, data: this.GetName  });
          });
        } else { // Выбран потомок
          this.indeterminate = true;
          this.allSelected = this.id;
        }

        // //  ОПЕРАЦИИ С VUEX
        if(newVal.length > oldVal.length && !this.chexboxSelected){ // появился новый chexbox
          if(newVal[newVal.length -1] !=false && newVal[newVal.length -1] != true){
            // this.$store.commit("Catalog/ChexboxId/SetChexbox", {value: newVal[newVal.length -1], data: this.GetName  });
          }
        }
        if(newVal.length < oldVal.length && !this.chexboxSelected){// убрали  отмечанный  chexbox
          if(newVal[newVal.length -1] !=false && newVal[newVal.length -1] != true){
            // this.$store.commit("Catalog/ChexboxId/DeleteChexbox", {value: oldVal[oldVal.length -1], data: this.GetName  });
          }
        }
        this.chexboxSelected = false; // НЕ ТОЧНО!
      }
    }
  }
</script>