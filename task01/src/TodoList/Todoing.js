import React, { Component } from 'react'
export default class Todoing extends Component {
    delItem(index){
        this.props.del(index);;
    }
    changeStatus = (index) => {
        this.props.changeStatus(index);
    };
    countUndo=()=>{
        var i=0;
        this.props.data.map(({done})=>{
            if(done==="flase"){
                 i++;
            }             
        })
        return i;
    }
    countdone=()=>{
        var i=0;
        this.props.data.map(({done})=>{
            if(done==="true"){
                 i++;
            }             
        })
        return i;
    }
    render() {
        return (
            <ul>
                <h2>正在进行&nbsp;&nbsp;&nbsp;&nbsp;{this.countUndo()}</h2>
                {
                   this.props.data.map(({title, done}, index)=>{
                       if(done==="flase"){
                            return <li key={index}><input type="checkbox"onClick={this.changeStatus.bind(this, index)}/>{title}---<button onClick={this.delItem.bind(this,index)}>删除</button></li>
                       }             
                   })
                }
                <h2>已经完成&nbsp;&nbsp;&nbsp;&nbsp;{this.countdone()}</h2>
                {
                   this.props.data.map(({title, done}, index)=>{
                       if(done==="true"){
                            return <li key={index}><input type="checkbox" checked="checked"onClick={this.changeStatus.bind(this, index)}/>{title}---<button onClick={this.delItem.bind(this,index)}>删除</button></li>
                       }             
                   })
                }
            </ul>
        )
    }
}