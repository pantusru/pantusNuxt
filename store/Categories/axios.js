export const actions = {  
    // Получить все категории товаров с структурой потомок родитель!
    async _CategoriesStrAll() {
        return await this.$axios.$get(`${process.env.api}/catalog/category/list `).then(res=>{
            return res;
        });
    },
}

 
 