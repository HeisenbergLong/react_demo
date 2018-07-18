import React from 'react';
const  Keyenter = 13;
export default class TodoHeader extends React.Component{
    constructor(props){
        super(props);
    }
    hanldleEnter = (event) =>{
        if(event.keyCode === Keyenter && event.target.value.length>0){
            let title = event.target.value;
            this.props.addTodo({title});
            event.target.value = "";
        }
    }
    render(){
        return(
            <div className="form-group">
                <input autoFocus={true} onKeyDown={this.hanldleEnter} type="text" className="form-control" />
            </div>
        )
    }
}