export const actions = {  
    // Получить все категории товаров с структурой потомок родитель!
    async _API_Town({}, data) {
        let a = `https://kladr-api.ru/api.php?query=Балаково&contentType=city&withParent=1`
        console.log(a);
        return await this.$axios.$get(a).then(res=>{
            return res;
        });
    },
}
