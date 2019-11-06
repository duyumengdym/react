import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom';
export default class Share extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        let page = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topics?page='+page+'&tab=share')
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                this.setState({
                    data: res.data
                });
            })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?page='+page+'&tab=share')
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res)
                    this.setState({
                        data: res.data
                    });
                })
        }
    }
    render(){
        return (
            <div className="inner no-padding">
                <div id="topic_list">
                {    
                    this.state.data.map((item)=>(
                        <div class="cell" ckey={item.id}>
                            <a class="user_avatar pull-left">
                                <img src={item.author.avatar_url}/>
                            </a>
                            <span class="reply_count pull-left">
                                <span class="count_of_replies" title="回复数">
                                {item.reply_count}
                                </span>
                                <span class="count_seperator">/</span>
                                <span class="count_of_visits" title="点击数">
                                {item.visit_count}
                                </span>
                            </span>
                            <a class="last_time pull-right" >
                            <img class="user_small_avatar" src="https://avatars3.githubusercontent.com/u/56661717?v=4&amp;s=120"/>
                                <span class="last_active_time">4 小时前</span>
                            </a>
                            <div class="topic_title_wrapper">
                                <span class="put_top">置顶</span>
                                <a class="topic_title" title="Node 12 值得关注的新特性">
                                <Link to={`/content/${item.id}`}>{item.title}</Link>
                                </a>
                            </div>
                        </div>
                    ))
                }
                </div>
                <div  class="pagination">
                <ul>
                { 
                    [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                        <li key={item}>
                            <NavLink activeStyle={
                                {background:'red',
                                color:'#fff'}
                            } to={'/share/'+item}>{item}</NavLink>
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
        )
    }
}
