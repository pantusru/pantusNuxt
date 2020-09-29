export const actions = {  
    /**
     * #Запрос на все бренды
     * @returns {Object} массив объектов брендов
     * @async
     *  
     */
    async _Brands() {
        return await this.$axios.$get(`${process.env.api}/brands`).then(res=>{
            return res;
        });
    },
}

 
 