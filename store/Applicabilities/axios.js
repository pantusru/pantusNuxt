export const actions = {  
    /**
     * #Запрос на все применимости
     * @returns {Object} массив объектов применимости
     * @async
     *  
     */
    async _Applicabilities() {
        return await this.$axios.$get(`${process.env.api}/applicabilities?view=tree`).then(res=>{
            return res;
        });
    },
}

 
 