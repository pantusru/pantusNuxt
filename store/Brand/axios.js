export const actions = {  
    // Получить все категории товаров с структурой потомок родитель!
    async _Brands() {
        return await this.$axios.$get(`${process.env.api}/brands`).then(res=>{
            return res;
        });
    },
}

 
 