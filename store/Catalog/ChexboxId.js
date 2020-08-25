
// mutations ---------------------
export const mutations  =  {
   SetChexbox(state, data){
       console.log(data)
        data.data.push(data.value);
   },
   DeleteChexbox(state, data){
       let a = data.data.indexOf(data.value);
       delete data.data.chexbox[a];
   }
}
 