export default class TodoModel{
    constructor(){
        this.STORE_KEY = 'todos';//想locostorage里面写入的时候这个key
        // 页面一开始，有就去local，没有就是空数组
        this.todos = localStorage.getItem(this.STORE_KEY) ? JSON.parse(localStorage.getItem(this.STORE_KEY)) : [];//存放所有的todos
        this.listeners = [];//
    }
    subscribe(listeners){//订阅index.js传递过来的渲染代码
        this.listeners.push(listeners);//传过来的重新渲染代码给listeners数组
    }
    emit(){//调用this.listeners数组里面的重新渲染函数代码
        console.log(this.listeners);
        this.listeners.forEach(listeners => listeners())//遍历listeners数组，调用数组里面的函数
    }
    addTodo = (todo) =>{//增加
        todo = Object.assign({},{id:Math.random(),completed:false},todo);
        let todos = this.todos;
        todos.push(todo);
        localStorage.setItem(this.STORE_KEY,JSON.stringify(todos));
        this.emit();//添加后立刻调用
    }
}