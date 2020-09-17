export const actions = {  
    // Получить все категории товаров с структурой потомок родитель!
    async _API_Town({}, data) {
        let a = `https://cors-anywhere.herokuapp.com/https://kladr-api.ru/api.php?query=${data}&contentType=city&withParent=1&token=ADy8fErZKZsbezdF37QbihtZSbiaabza&limit=10`
        return await this.$axios.$get(a).then(res=>{
            return res;
        });
    },
}