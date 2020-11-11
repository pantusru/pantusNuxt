<template>
  <div>
    <b-input
      v-model.trim="search"
      class="mb-3 fz-6"
      :placeholder="placeholders"
    ></b-input>
    <div class="error mb-3" v-if="error">
      Строка поиска не может содержать указанный вами символ
    </div>
  </div>
</template>

<script>
import { alphaNum } from "vuelidate/lib/validators";
export default {
  props: {
    data: {},
    placeholders: {
      default: "Поиск по списку",
    },
  },
  inject: ["SetValue"],
  data() {
    return {
      search: "",
      error: false,
    };
  },
  methods: {
    searchSubstr(name) {
      if (name === undefined) {
        return false;
      }
      if (name.toLowerCase().search(this.search.toLowerCase()) !== -1) {
        return true;
      } else {
        return false;
      }
    },
    setCheck(data) {
      data.visible = false;
      let has_visible_childs = false;
      // tree
        if(this.searchSubstr(data.name)){
            data.visible = true;
        }else  if (data.children.length != 0) { // Есть потокки
            data.children.forEach((element) => {
            element = this.setCheck(element);
            if (element.visible == true) {
            has_visible_childs = true;
            }
        });
        // check visible childs
        if (has_visible_childs == true) {
          data.visible = true;
        } else {
          data.visible = this.searchSubstr(data.name);
        }
          }
        // leaf

      return data;
    },
  },
  watch: {
    search() {
      let reg = new RegExp("^[0-9A-Za-zА-Яа-яЁёs]+$");
      let check = reg.test(this.search);
      if (check || this.search.length == 0) {
        this.error = false;
        let dataset_local = {
          children: [],
        };
        dataset_local.children = JSON.parse(JSON.stringify(this.data));
        // КОСТЫЛИ НАШЕ ВСЁ!!
        let dataset = this.setCheck(dataset_local);
        this.$store.commit(this.SetValue, dataset.children);
        // КОСТЫЛИ НАШЕ ВСЁ!!
      } else {
        this.error = true;
      }
    },
  },
};
</script>

