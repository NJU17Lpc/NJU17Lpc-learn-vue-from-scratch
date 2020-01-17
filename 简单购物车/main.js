const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '机器学习',
                date: '2006-9',
                price: 75.00,
                count: 1
            },
            {
                id: 2,
                name: '深度学习',
                date: '2010-9',
                price: 95.00,
                count: 1
            },
            {
                id: 3,
                name: '强化学习',
                date: '2009-7',
                price: 102.34,
                count: 1
            },
            {
                id: 4,
                name: '无监督学习',
                date: '2077-6',
                price: 750.99,
                count: 1
            },
            {
                id: 5,
                name: '放弃学习',
                date: '2020-1',
                price: 100.00,
                count: 1
            },
        ]
    },
    methods: {
        getFinalPrice(price){
            return '$'+price.toFixed(2);
        },
        increment(index){
            this.books[index].count++;
        },
        decrement(index){
            this.books[index].count--;
        },
        removeHandler(index){
            this.books.splice(index, 1);
        }
    },
    computed: {
        totalPrice(){
            // let res = 0;
            // for(let i=0; i<this.books.length; i++){
            //     res += this.books[i].price * this.books[i].count;
            // }
            // return res;
            return this.books.reduce((pre, n) => n.count*n.price + pre, 0);
            // return this.books.reduce(function(pre, n){
            //     return n.count * n.price + pre;
            // }, 0)
        }
    },
    filters: {
        showPrice(price){
            return '$'+price.toFixed(2);
        }
    }
})