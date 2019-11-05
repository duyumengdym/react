import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Right from './components/Right'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Login from './container/Login';
import Content from './container/Content';
export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="navbar">
                    <Header/>
                </div>
                <div id="main">
                    <div className="left">
                        <Switch>
                        {/* <Route path='/home' component={Home}/> */}
                        <Route path='/start' component={Start}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/content/:id' component={Content}/>
                        <Route path='/' component={Home}/>
                        </Switch>
                    </div>
                    <Right/>
                </div>
                <div id="backtotop">回到顶部</div>
                <Footer/>
                <div id="sidebar-mask"></div>
            </Router>
        )
    }
}