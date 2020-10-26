export default {
    methods: {
        linkGen(pageNum) { // генерация ссылок Page
            return {
                name: "search",
                query:{
                    ... this.$route.query,
                    page: pageNum,

                }
            }
        },
    }
}