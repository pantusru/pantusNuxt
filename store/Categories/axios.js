export const actions = {  
    // Получить все категории товаров с структурой потомок родитель!
    async _CategoriesStrAll() {
        return await this.$axios.$get(`${process.env.api}/categories?view=tree`).then(res=>{
            return res;
        });
    },
}

 
 