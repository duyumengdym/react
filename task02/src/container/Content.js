import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Jing extends Component {
    constructor(){
        super();
        this.state={
            data:{}
        }
    }
    componentDidMount(){
        let page = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topic/'+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data: res
                });
                console.log(this.state.data);
            })
    }
    componentDidUpdate(prevProps,prevState){
            let page = this.props.match.params.id;
            console.log(this.props.match.params.id)
            fetch('https://cnodejs.org/api/v1/topic/'+page)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({
                        data: res.data
                    });
                })
    }
    render(){
        return (
            <div className="inner no-padding">
                {
                 <div dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
                }
        </div>
        )
    }
}
