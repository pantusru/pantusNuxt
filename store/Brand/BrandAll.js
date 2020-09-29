export const state = () => ({
    Brand: [],
    limit:100,
})
export const mutations  =  {
    SetBrand(store, data){
        store.Brand = data;
    }
}
export const actions = { 
    async _Brands({store,dispatch, commit, getters}){
        if(getters.GetBrand.length === 0){
            let  data = await dispatch("Brand/axios/_Brands", {} , { root: true })
            commit("SetBrand", data);
            
        }  
    }
}
export const getters = {
    GetBrand: s => s.Brand, 
    GetBrandPage: (s) => (id=1) =>{   
        return s.Brand.slice((id-1)*s.limit, id*s.limit)
    },
    GetBrandLength: (s)=>{
        return Math.ceil(s.Brand.length / s.limit);
    }
}

//  Отображает данные всех примянимости товаров