export default {
  data() {
    return {
      checkRecaptcha: false,
      getError: false,
    }
  },
  methods:{
    checkValidateRecaptcha(){
      if (this.checkRecaptcha === false){ // Проверка капча не пройдена
        this.getError = true;
      }else if(this.checkRecaptcha === true) {// Проверка капча  пройдена
        this.getError = false;
      }
    }
  }
}
