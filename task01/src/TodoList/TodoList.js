import React, { Component } from 'react'
import TodoInput from './TodoInput'
import Todoing from './Todoing'
import'./Todo.css';
export default class TodoList extends Component {
    constructor(){
        super();
        this.state={data:[]}
    }
    componentDidMount(){
        let data = JSON.parse(localStorage.getItem('todo'));
        if(data){
            this.setState({
                data:data
            })
        }
	}
    addItem=(item)=>{
        // console.log(item);
        let newData = this.state.data.concat(item);
        // console.log(newData);
        this.setState({
            data: newData
        },()=>{
            window.localStorage.setItem('todo', JSON.stringify(this.state.data));
        })
       
    }
    RemoveItem=(index)=>{
        this.state.data.splice(index, 1);
        let newData = this.state.data;
        this.setState({data : newData},()=>{
            window.localStorage.setItem('todo', JSON.stringify(this.state.data));
       });
    }
    ChangeStatus = (index) => {
        let arr = this.state.data;
        arr[index].done = arr[index].done ==='true'?"flase":"true";
        this.setState({
            data: arr
        },()=>{
            window.localStorage.setItem('todo', JSON.stringify(this.state.data));
       });
    };
    render() {
        return (
            <div className="box">
                <h1>ToDoList</h1>
                <TodoInput addItem={this.addItem} data={this.state.data}/>
                <Todoing del={this.RemoveItem} changeStatus={this.ChangeStatus} data={this.state.data}/>
            </div>
        )
    }
}
