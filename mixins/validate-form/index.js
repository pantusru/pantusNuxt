/**
 * В компоненте vuex должна быть data: VuexForm:{},
 в ней объекты Input с
 value,
 error,
 params,
 regulations ,
 regulationsServer
 в error который вычисляются на стороне сервера нужно прописывать type: "server"
 */
export default {
  methods: {
    // Проверка всех правил Input client
    // Передается название input
    OnSwitch(keyNameInput) {
      // console.log();
      for (const keyReg in this.VuexForm[keyNameInput].regulations) {
        switch (this.VuexForm[keyNameInput].regulations[keyReg]) {
          case "Undefined":
            this.ErrorUndefined(keyNameInput);
            break;
          case "RegExp":
            this.ErrorRegExp(keyNameInput);
            break;
          case "valueTrue":
            this.ErrorValueTrue(keyNameInput);
            break;
          case "valueFalse":
            this.ErrorValueFalse(keyNameInput);
            break;
          case "MinLength":
            this.ErrorMinLength(keyNameInput);
            break;
          case "MaxLength":
            this.ErrorMaxLength(keyNameInput);
            break;
          default:
            break;
        }
      }
    },
    // Проверка всех Input на valid сторона клиента
    AllCheckChient() {
      let fullValidClient = true;
      for (const keyNameInput in this.VuexForm) {
        this.OnSwitch(keyNameInput);
        for (const key in this.VuexForm[keyNameInput].error) {
          if (
            this.VuexForm[keyNameInput].error[key].active === true &&
            this.VuexForm[keyNameInput].error[key].type !== "server"
          ) {
            fullValidClient = false;
            break;
          }
        }
      }
      return fullValidClient;
    },
    // Проверка всех Input на valid сторона сервера
    AllCheckServer(checkClient) {
      let checkServer = true;
      if (checkClient === true) {
        for (const keyNameInput in this.VuexForm) {
          for (const keyNamePag in this.VuexForm[keyNameInput]
            .regulationsServer) {
            if (
              this.VuexForm[keyNameInput].regulationsServer[keyNamePag]() ===
              true
            ) {
              this.VuexForm[keyNameInput].error[keyNamePag].active = true;
              checkServer = false;
            } else {
              this.VuexForm[keyNameInput].error[keyNamePag].active = false;
            }
          }
        }
        return checkServer;
      } else return false;
    },
    // Проверка всех Input  на valid all
    AllCheck() {
      const checkClient = this.AllCheckChient();
      return this.AllCheckServer(checkClient);
    },
    // Проверка регулярных выражении
    // в params RegExp: значение
    // в error RegExp: {text: значение}
    // в regulations  "RegExp"
    ErrorRegExp(name) {
      this.VuexForm[name].error.RegExp.active = !this.VuexForm[
        name
      ].params.RegExp.test(this.VuexForm[name].value);
    },
    // Проверка на пустую строку
    // в error Undefined: {text: значение}
    // в regulations  "Undefined"
    ErrorUndefined(name) {
      this.VuexForm[name].error.Undefined.active =
        this.VuexForm[name].value === "";
    },
    // Проверка что 2 input имеют одинаковые значения
    // в error ValueTrue: {text:значение}
    // в params ValueTrue: {value1: 'название инпута'}
    // в params ValueTrue: {value2: 'название инпута'}
    // в params ValueTrue: {valueSet: 'под каким инпутов писать ошибку'}
    // в regulations  "ValueTrue"
    ErrorValueTrue(name) {
      this.VuexForm[
        this.VuexForm[name].params.ValueTrue.valueSet
      ].error.valueTrue.active =
        this.VuexForm[this.VuexForm[name].params.ValueTrue.value1].value !==
        this.VuexForm[this.VuexForm[name].params.ValueTrue.value2].value;
    },
    // Проверка что 2 input имеют разные значения
    // в error ValueFalse: {text:значение}
    // params Аналогично ErrorValueTrue
    // в regulations  "valueFalse"
    ErrorValueFalse(name) {
      this.VuexForm[
        this.VuexForm[name].params.ValueTrue.valueSet
      ].error.ValueTrue.active =
        this.VuexForm[this.VuexForm[name].params.ValueTrue.value1].value ===
        this.VuexForm[this.VuexForm[name].params.ValueTrue.value2].value;
    },
    // Проверка что длина значение не меньше или равна указанной
    // в error MinLength: {text:значение}
    // в params MinLength: 'значение'
    // в regulations  "MinLength"
    ErrorMinLength(name) {
      this.VuexForm[name].error.MinLength.active =
        this.VuexForm[name].value.length <=
        this.VuexForm[name].params.MinLength;
    },
    // Проверка что длина значение не меньше или равна указанной
    // в error MaxLength: {text:значение}
    // в params MaxLength: 'значение'
    // в regulations  "MaxLength"
    ErrorMaxLength(name) {
      this.VuexForm[name].error.MaxLength.active =
        this.VuexForm[name].value.length >=
        this.VuexForm[name].params.MaxLength;
    },
  },
};
