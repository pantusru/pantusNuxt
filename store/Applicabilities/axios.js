export const actions = {  
    // Получить все категории товаров с структурой потомок родитель!
    async _Applicabilities() {
        return await this.$axios.$get(`${process.env.api}/applicabilities?view=tree `).then(res=>{
            return res;
        });
    },
}

 
 