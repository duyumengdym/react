import React, { Component } from 'react'
import {Link,Route,Switch} from 'react-router-dom';
import All from './All';
import Jing from './Jing';
import Share from './Share';
import Ask from './Ask';
import Find from './Find';
import Test from './Test';
export default class Home extends Component {
    render() {
        // let {url} = this.props.match;
        return (
            <div className="panel">
                <div className="header">
                    <Link to={`/all/1`}><a className="topic-tab">全部</a></Link>
                    <Link to={`/jinghua/1`}><a className="topic-tab ">精华</a></Link>
                    <Link to={`/share/1`}><a className="topic-tab ">分享</a></Link>
                    <Link to={`/ask/1`}><a className="topic-tab ">问答</a></Link>
                    <Link to={`/find/1`}><a className="topic-tab ">招聘</a></Link>
                    <Link to={`/test/1`}><a className="topic-tab ">客户端测试</a></Link>
                </div>
                <div>
                <Switch> 
                    <Route path={'/all/:id'} component={All}/>
                    <Route path={'/jinghua/:id'} component={Jing}/>
                    <Route path={'/share/:id'} component={Share}/>
                    <Route path={'/ask/:id'} component={Ask}/>
                    <Route path={'/find/:id'} component={Find}/>
                    <Route path={'/test/:id'} component={Test}/>
                    <Route path='/' component={All}/>
                </Switch>
                </div>
            </div>
        )
    }
}