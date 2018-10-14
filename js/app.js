var vm = new Vue({
    el:'#app',
    data:{
        id:'',
        newtodo:'',
        todosAll:false,
        isEditing: -1,
        isSeleted: 'all',
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
        todosAllHandle(){
            // 让this.todos中的每一项的completed变为this.toggleAll
            this.todos.forEach((item) => {
                //console.log(this.todosAll)
                item.completed = this.todosAll
            })
        },
        editTodo(id){ //编辑任务栏
            // console.log(id)
            this.isEditing = id
        },
        editDone() {
            //给编辑任务栏重新赋值
            this.isEditing = -1
        },
        clearDone(){    //清除所有已完成的任务
            this.todos = this.todos.filter(item => {
                return !item.completed
            })
        },
        filterTodo(val = 'all'){   //切换不同状态的任务
            // console.log(val)
            this.isSeleted = val
        }
    },
    directives: {   
        focus(el,binding){  //添加光标
            // console.log(binding.value)
            if(binding.value){
                el.focus()
            }
        }
    },
    computed:{ 
        reft(){  //完成了的任务取消
            return (this.todos.filter(item => {
                return !item.completed
            })).length
        },
        newTodos(){
            
        }
    }
})