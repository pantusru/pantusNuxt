export const actions = { 
    async _MyOrder(){
        let  order = [
            {
                price: 1200,
                id: 51,
                status:{
                    code: "О",
                    name: "Отправлено"
                },
                delivery:{
                    price: 120,
                },
                dates:{
                    created: "2020-04-15 16:02:43",
                },
                offers:[
                    {
                        id: 1,
                        name: "Кронштейн опоры двигателя задний ВАЗ 1118-1001032 КАЛИНА",
                        price: 491,
                        quantity: 2,
                    },
                    {
                        id: 2,
                        name: "Кронштейн опоры двигателя задний 1118-1001032 ",
                        price: 690,
                        quantity: 5,
                    },
                    {
                        id: 3,
                        name: "Кронштейн опоры двигателя задний 1118-1001032 ",
                        price: 690,
                        quantity: 5,
                    },
                ]
            }
             
        ]
        return order;
    }
}