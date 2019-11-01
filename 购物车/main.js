const app=new Vue({
  el:'#app',
  data:{
    books:[
      {
        id:1,
        name:'算法导论',
        date:'2019-01-02',
        price:20,
        num:0
      },
      {
        id:2,
        name:'算法导论1',
        date:'2019-01-02',
        price:20,
        num:0
      },
      {
        id:3,
        name:'算法导论2',
        date:'2019-01-02',
        price:20,
        num:0
      },
      {
        id:4,
        name:'算法导论3',
        date:'2019-01-02',
        price:20,
        num:0
      },
    ]
  },
  computed:{
    totalPrice() {
      let result
      for (let i;i<this.books.length;i++)
      {
        result+=this.books[i].price*this.books[i].num
      }
      return  result;
    }
  },
  methods:{
    add(id){
      this.books[id-1].num++
    },
    del(id){
      if (this.books[id-1].num!=0)
      {
        this.books[id-1].num--
      }

    }
  }
})