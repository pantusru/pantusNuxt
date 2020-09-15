export const actions = { 
    async _Product(){
        let  product = [
            {
                ProductCard:{
                    id: 30,
                    name: "Товар1",
                    sku:{
                        original: "6534-ку",
                        normalized: "6534-ru"
                    },
                    ProductCardImage:{
                        url: "http://www.pantus.ru/upload/iblock/042/10034697ASP%20-%20Прокладка%20бензонасоса%20ВАЗ%2021082%20силикон%20синий%20-%20A-Sport.jpg"
                    },
                    album:[
                        {url:"http://www.pantus.ru/upload/iblock/eca/00034867ALT%20-%20Патрубки%20печки%20ВАЗ%201118%20-%20Ассоциация%20Балаковских%20Производителей%20Автозапчастей.jpg"},
                        {url:"http://www.pantus.ru/upload/iblock/eca/00034867ALT%20-%20Патрубки%20печки%20ВАЗ%201118%20-%20Ассоциация%20Балаковских%20Производителей%20Автозапчастей.jpg"},
                    ],
                    ProductCardOem:[
                        "21082-1101138",
                        "1082-1101138-00",
                        "21082-1101138СИНA-sport",
                        "210821101138",
                        "21082110113800",
                    ],
                    brand:{
                        id: 5,
                        name: "A-Sport"
                    }
                },
                ProductOffer:{
                    prices:{
                        wholesale: "356"
                    },
                    quantity: 411
                }
            }
        ];
    return product;
    }  
}