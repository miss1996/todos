var vm = new Vue({
    el:'#app',
    data:{
        id:'',
        newtodo:'',
        todos:[
            {id:1,desc:'吃饭',completed:false},
            {id:2,desc:'睡觉',completed:false},
            {id:3,desc:'打豆豆',completed:false}
        ]
    },
    methods: {
        addtodo(){  //添加操作
            var newtodo = {
                id: +new Date(),
                desc: this.newtodo,
                completed: false
            }
            this.todos.push(newtodo)
            this.newtodo = ''
        },
        btn(id){    //删除操作
            // var index = this.todos.findIndex((item) => {
            //     if(item.id == id) {
            //         return true
            //     }
            // })
            // this.todos.splice(index,1)

            this.todos.some(item=>{
                if(item.id === id) {
                    this.todos.splice(item,1)
                    return true
                }
            })
        },
    },
    filters: {  //修改任务
        //1.先求出要修改的任务内容
        //2.通过过滤器进行任务的修改
    }
})