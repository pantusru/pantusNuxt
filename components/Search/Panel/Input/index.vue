<template>
    <b-input v-model="search" class="mb-3" placeholder="Поиск"></b-input>
</template>

<script>
export default {
    props:["data"],
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
            if(this.search.length === 0){
                return true;
            }
            let check = false;
            data.forEach(element => {
                let visible;
                let name = element.name;
                if(element.children != undefined){ // Есть потомок
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
                    check = true;
                }
                // alert(check);
                this.$store.commit("Catalog/Visible/SetVisible", {data: element, value: visible});
            });
            return check;
        }
    },
    watch: {
        search() {
            this.setCheck(this.data);
        },
    },
}
</script>

<style>

</style>