import React, { Component } from 'react'
//受控组件：value值被react控制的表单元素
// 可以实时获取表单元素的值（表单验证）
export default class TodoInput extends Component {
    constructor(){
        super();
        this.handleInput=this.handleInput.bind(this);
    }
    // 绑定this,事件处理函数写成箭头函数，或者用bind绑定
    handleInput = (e)=>{
        if(e.keyCode===13){
            let title =e.target.value;
            if(!title.trim()){
                alert('任务不能为空，请重新输入');
                return;
            }
            let item = {
                title,
                done: "flase"
            };
            this.props.addItem(item);
            e.target.value = '';
        }
    }
    render() {
        return (
            <div>
                <input onKeyDown={this.handleInput} type="text" ref='text' placeholder="添加ToDo"/>
            </div>
        )
    }
}