import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';
import TodoFooter from "./todoFooter";
import * as FilterTypes from './filterTypes';//*就是把里面的对象全部引进来   给对象filterTypes 做为它的属性

export default class TodoApp extends Component{
    constructor(props){
            super(props);
            this.state = {
                // todos:[
                //     {id:Math.random(),title:'今天学习react',complated:false},
                //     {id:Math.random(),title:'明天学习vue',complated:true}
                // ],
            filterType: FilterTypes.ALL    //默认显示全部数据
        };//初始化默认状态
    }
    addTodo = (todo)=>{
        todo = Object.assign({},{id:Math.random(),complated:false},todo)
        var todot = this.state.todos.push(todo);
        console.log(todot)
        this.setState({todot:todot})
    }
    toggle = (id)=>{
        let todos = this.state.todos;
        todos = todos.map((todo)=>{
            if(todo.id === id){
                todo.complated = !todo.complated;
            }
            return todo;
        })
        this.setState({todos:todos})
    }
    remove = (id)=>{
        let todos = this.state.todos;
        let index = todos.findIndex(val=> val.id === id);
        todos.splice(index,1);
        this.setState({todos:todos})
    }
    toogleChange = (event) =>{
        let todos = this.state.todos;
        let checked = event.target.checked;
        todos.map(todo=>todo.complated = checked);
        this.setState({todos:todos})
    }
    changeFilterType = (filterType) =>{
        this.setState({filterType:filterType});
    }
    clearCompleted = () =>{
        let todos = this.state.todos;
        todos = todos.filter((todo)=>{
            return !todo.complated;//只返回complated为false的，所以为true的就没有了
        })
        this.setState({todos:todos})
    }
    render(){
        // let todos = this.state.todos;
        let todos = this.props.model.todos;//取值的地方在model
        let activeContent = todos.reduce((total,current)=>total+(current.complated?0:1),0);
        let completedTodoCount = todos.length-activeContent;//完成的=总数量-待办
        let showTodos = todos.filter((todo)=>{
            switch(this.state.filterType){
                case FilterTypes.ACTIVE:    //要显示未完成的
                return !todo.complated;
                case FilterTypes.COMPLETED: //完成的
                return todo.complated;
                default:
                return true; //都显示
            }
        })
        let main = (
            <ul className="list-group">
                {todos.length>0?
                <li className="list-group-item">
                    <input type="checkbox" checked={activeContent === 0} onChange={this.toogleChange}/>{activeContent===0?"全部取消":"全部选中"}
                </li>
                :
                null}
              {
                  showTodos.map((todo,index)=>
                  <TodoItem 
                    toggle={this.toggle} 
                    key={index} 
                    remove={this.remove} 
                    todoItem={todo}
                  ></TodoItem>
                )
              }
            </ul>
        )
        return(
            <div className="container" style={{marginTop:20}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader addTodo={this.props.model.addTodo}/>
                            </div>
                            <div className="panel-body">
                                {main}
                            </div>
                            <div className="panel-footer">
                                <TodoFooter
                                 changeFilterType={this.changeFilterType} 
                                 filterType = {this.state.filterType}
                                 clearCompleted = {this.clearCompleted}
                                 completedTodoCount={completedTodoCount}
                                 activeContent={activeContent}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}