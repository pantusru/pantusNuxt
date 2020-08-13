export const actions = {  
    // Получить все новости!
    // data:{offets: -с какого числа начинать , limit: -сколько данных, }
    async _NewsAll({}, data) {
        return await this.$axios.$get(`${process.env.api}/news/?limit=${data.limit}&offset=${data.offets}`).then(res=>{
            return res;
        });
 
    },
    
    //  Получить одну новость по ID 
    async _NewsId({store}, id) {
        return await this.$axios.$get(`/news/detail/?id=${id}`).then(res=>{
            return res;
        });
 
    },
}

 
 