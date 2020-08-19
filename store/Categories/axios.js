export const actions = {  
    // Получить все категории товаров с структурой потомок родитель!
    // data:{offets: -с какого числа начинать , limit: -сколько данных, }
    async _CategoriesStrAll({}, data) {
        return await this.$axios.$get(`${process.env.api}/catalog/category/list `).then(res=>{
            return res;
        });
    },
}

 
 