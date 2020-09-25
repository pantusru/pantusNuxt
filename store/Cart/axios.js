export const actions = { 
    async _CartProduct(){
        let  product = [
            {
                kolvo:4,
                ProductCard:{
                    id: 30,
                    name: "Товар1",
                    brand:{
                        id: 5,
                        name: "A-Sport"
                    },
                    sku:{
                        original: "6534-ку",
                        normalized: "6534-ru"
                    },
                    ProductCardImage:{
                        url: "http://www.pantus.ru/upload/iblock/eca/00034867ALT%20-%20Патрубки%20печки%20ВАЗ%201118%20-%20Ассоциация%20Балаковских%20Производителей%20Автозапчастей.jpg"
                    },
                    album:[
                        {url:"http://www.pantus.ru/upload/iblock/eca/00034867ALT%20-%20Патрубки%20печки%20ВАЗ%201118%20-%20Ассоциация%20Балаковских%20Производителей%20Автозапчастей.jpg"},
                    ],
                },
                ProductOffer:{
                    id: 3,
                    prices:356,
                    quantity: 411,
                    supplier:{
                        name: "Пантус",
                        deliveryDelay: "Сегодня"
                    }
                }
            },
            {
                kolvo:7,
                ProductCard:{
                    id: 30,
                    name: "Товар1",
                    sku:{
                        original: "6534-ку",
                        normalized: "6534-ru"
                    },
                    brand:{
                        id: 5,
                        name: "A-Sport"
                    },
                    ProductCardImage:{
                        url: "http://www.pantus.ru/upload/iblock/eca/00034867ALT%20-%20Патрубки%20печки%20ВАЗ%201118%20-%20Ассоциация%20Балаковских%20Производителей%20Автозапчастей.jpg"
                    },
                    album:[
                        {url:"http://www.pantus.ru/upload/iblock/eca/00034867ALT%20-%20Патрубки%20печки%20ВАЗ%201118%20-%20Ассоциация%20Балаковских%20Производителей%20Автозапчастей.jpg"},
                    ],
                },
                ProductOffer:{
                    id: 13,
                    prices:356,
                    quantity: 411,
                    supplier:{
                        name: "Пумма",
                        deliveryDelay: "Завтра"
                    }
                }
            },
            
            
        ];
    return product;
    }  
}