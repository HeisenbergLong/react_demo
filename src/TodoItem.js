import React from 'react';
export default class TodoItem extends React.Component{
    render(){
        let todoItem = this.props.todoItem;
        return(
            <li className="list-group-item">
                <div className="row">
                    <div className="col-sm-1">
                        <input type="checkbox" checked={todoItem.complated} onChange={()=>this.props.toggle(todoItem.id)} />
                    </div>
                    <div className="col-sm-10" style={{textDecoration:todoItem.complated?"line-through":""}}>
                        {todoItem.title}
                    </div>
                    <div className="col-sm-1">
                        <button className="btn btn-danger btn-sm" onClick={()=>this.props.remove(todoItem.id)}>X</button>
                    </div>
                </div>
            </li>
        )
    }
}