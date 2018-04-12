import React, { Component } from 'react';
import './Mine.css';
import {
  Route, //路由切换的坑
  Link, //模板切换的组件
  NavLink
} from 'react-router-dom'
class Mine extends Component{
	constructor(){
		super()
		this.state={
			user:"登录 / 注册",
			sty:"none",
			sty1:"block"
		}
	}
	render(){
		return(
				<div className="App1">
					<header id="header">拉勾网</header>
		    	{/*路由的切换，模板切换（to和replace->不留历史记录），js切换*/}
		        <footer id="footer">
		        	
		        	<div data-name="职位" data-index="0" data-type="custom" className="footer-tab-custom selected">
			        	<span className="icon selected"></span>
			        	<span className="text"><NavLink activeClassName="link_active" to="/position">职位</NavLink></span>
		        	</div>
		        	<div data-name="搜索" data-index="1" data-type="search" className="footer-tab-search">
			        	<span className="icon"></span>
			        	<span className="text"><NavLink activeClassName="link_active" to="/search">搜索</NavLink></span>
		        	</div>
		        	<div data-name="我的" data-index="2" data-type="mine" className="footer-tab-mine">
			        	<span className="icon"></span>
			        	<span className="text"><NavLink activeClassName="link_active" to="/mine">我的</NavLink></span>
		        	</div>
		        </footer>

				<div id="content">
        
			        <div className="logininfo">
		                {/*未登录*/}
		                <div className="nologin center">
		                	<img className="headpic" src="//static.lagou.com/images/myresume/default_headpic.png" style={{"display":this.state.sty}}/>
		                    <a className="loginbut" href="/login" target="_self" style={{"display":this.state.sty1}}>登录 / 注册</a>
		                    {this.state.user}
		                </div>
		            </div>
			       { /*登录地址*/}
			        
			        
			        <div className="buttons">
			            
			            <a className="button deliver" href="/user/deliverlist.html">
			                <span>投递</span>
			                
			                
			            </a>
			            <a className="button interview" href="/minterview/interviewlist.html">面试</a>
			            
			            <a className="button invitation" href="/minvite/invitation.html">
			                <span>邀约</span>
			                            </a>
			            
			            <a className="button collect" href="/user/collectlist.html">收藏</a>
			            
			        </div>
			        <a className="logout" href="/mine" style={{"display":this.state.sty}} onClick={this.handlere}>退出登录</a>
	            </div>
				</div>
			)
	}

	componentWillMount (){
		let data = JSON.parse(localStorage.getItem('username'));
		if(!data){
			return;
		}else{
			this.setState({
			user:data,
			sty:"block",
			sty1:"none"
			})
		}
		
	}
	handlere(){
		 localStorage.removeItem('username');
	}
}

export default Mine; 