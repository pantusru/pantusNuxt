<template>
    <b-input v-model="search" class="mb-3" placeholder="Поиск"></b-input>
</template>

<script>
export default {
    props:["data", "KolvoVisible"],
    data(){
        return{
            search: "",
        }
    },
    methods:{
        searchSubstr(name){
            if((name.indexOf(this.search) != -1)){
                return true;
            }else{
                return false;
            }
        },
        setCheck(data){
            let check = false;
            data.forEach(element => {
                let visible;
                let name = element.name;
                if(element.children.length != 0){ // Есть потомок
                    visible = this.setCheck(element.children);
                    if(visible == false) {
                        visible = this.searchSubstr(name);   
                    }
                }
                // ПРОВЕРЯЕМ СТРОКУ
                else{
                    visible = this.searchSubstr(name);
                }
                //  Сохраняем значения
                if(visible){
                    this.$store.commit("Catalog/KovloVisible/AddKolvoVisible", this.KolvoVisible);
                    // console.log(this.$store.getters["Catalog/KovloVisible/GetCategoriesKolvoVisible"]);    
                    check = true;
                }
                // alert(check);
                if(check){
                    console.log("Названия ПРОВЕРКИ - " + name + "ЕГО ИСТИНОСТЬ - " + check);
                }
                this.$store.commit("Catalog/Visible/SetVisible", {data: element, value: check});
            });
            return check;
        }
    },
    watch: {
        search() {
            this.$store.commit("Catalog/KovloVisible/ResetolvoVisible", this.KolvoVisible);
            this.setCheck(this.data);
            console.log("---------------------------------------------------------------------------");
        },
    },
    created () {
        // console.log(this.KolvoVisible);
    },
}
</script>

<style>

</style>