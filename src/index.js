import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './todoApp';
import TodoModel from './todoModel';
console.log(TodoModel)
let model = new TodoModel();//创建了TodoModel实例对象 好处是TodoApp不管保存在哪里 TodoApp内容都是不变的
console.log(model)
function render(){//渲染代码封装在函数里 发送给model
    ReactDOM.render(<TodoApp model={model} />, document.getElementById('root'));
}
model.subscribe(render);//把封装好的渲染代码 发送给model model改变重新渲染
render();//页面开始就调用渲染代码