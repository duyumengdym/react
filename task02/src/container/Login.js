import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Login extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render() {
        return (
            <div>
                <div>
                <ul class="breadcrumb">
                        <li><a href="/">主页</a><span class="divider">/登录</span></li>
                    </ul>
                </div>
                <div class="inner">
                <form id="signin_form" class="form-horizontal">
                <div class="control-group">
                    <label class="control-label" for="name">用户名</label>
                    <div class="controls">
                    <input class="input-xlarge" id="name" name="name" size="30" type="text"/>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="pass">密码</label>
                    <div class="controls">
                    <input class="input-xlarge" id="pass" name="pass" size="30" type="password"/>
                    </div>
                </div>
                <input type="hidden"/>
                <div class="form-actions">
                     <Link to="/"><input type="submit" class="span-primary" value="登录"/> </Link>
                    <span class="span-info">
                        通过 GitHub 登录
                    </span>
                    <a id="forgot_password">忘记密码了?</a>
                </div>
                </form>
            </div>
            </div>
        )
    }
}