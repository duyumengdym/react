import React from 'react';
import {Link} from 'react-router-dom';  
export default function Header(){
    return (
        <div>
            <header>
                <div className="navbar-inner">
                    <div className="container">
                        <a className="brand" href="/">
                            <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg"/>
                        </a>
                        <form id="search_form" class="navbar-search" action="/search">
                            <input type="text" id="q" name="q" className="search-query span3" value=""/>
                        </form>
                        <ul className="nav pull-right">
                            <li><Link to='/'>首页</Link></li>
                            <li><Link to='/start'>新手入门</Link></li>
                            <li><Link to='/api'>API</Link></li>
                            <li><Link to='/about'>关于</Link></li>
                            <li><Link to='/login'>登录</Link></li>   
                        </ul>
                        <a className="btn btn-navbar" id="responsive-sidebar-trigger">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </a>
                    </div>
                </div>
            </header>
        </div>
    )
}