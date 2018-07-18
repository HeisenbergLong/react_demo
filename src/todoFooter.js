import React,{Component} from "react";
import * as FilterTypes from "./filterTypes";
export default class TodoFooter extends Component{
    render(){
        // console.log(this.props.filterType);
        return(
            <div className="row">
                <div className="col-sm-4 text-center">
                    {
                        this.props.activeContent > 0 
                        ?
                        <div style={{"height":"30px","lineHeight":"30px"}}>剩余{this.props.activeContent}条待办事件</div>
                        :
                        null
                    }
                </div>
                <div className="col-sm-5 text-center">
                    <button onClick={()=>this.props.changeFilterType(FilterTypes.ALL)} className={`btn ${this.props.filterType === FilterTypes.ALL?'btn-success':'btn-default'} btn-sm`}>全部</button>
                    <button onClick={()=>this.props.changeFilterType(FilterTypes.ACTIVE)} className={`btn ${this.props.filterType === FilterTypes.ACTIVE?'btn-success':'btn-default'} btn-sm`} style={{marginLeft:10}}>未完成</button>
                    <button onClick={()=>this.props.changeFilterType(FilterTypes.COMPLETED)} className={`btn ${this.props.filterType === FilterTypes.COMPLETED?'btn-success':'btn-default'} btn-sm`} style={{marginLeft:10}}>已完成</button>
                </div>
                <div className="col-sm-3 text-center">
                    {
                        this.props.completedTodoCount > 0
                        ?
                        <button onClick={()=>this.props.clearCompleted()} className="btn btn-danger btn-sm">删除已完成</button>
                        :
                        null
                    }
                </div>
            </div>
        )
    }
}