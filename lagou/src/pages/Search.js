import React, { Component } from 'react';
import Country from "./../components/Country"
import City from "./../components/City"
import Sposition from "./../components/Sposition"
import {
  BrowserRouter as Router,//路径模式可以换成hash模式
  Route, //路由切换的坑
  Link, //模板切换的组件
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom'
class Search extends Component{
	constructor(){
		super()
		this.state={
			cityname:"全国"
		}
	}
	render(){
		return(
				<div className="App3">
					<header id="header">拉勾网</header>
			    	{/*路由的切换，模板切换（to和replace->不留历史记录），js切换*/}
			    	<Router>
				    	<Switch>
					    	<Route path="/search" component={Country}></Route>
					    	<Route path="/city" component={City}></Route>
				    	</Switch>
			    	</Router>
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
				</div>
			
			)

	}
	// componentWillUpdate (){
	// 	this.state.cityname = this.props.location.state.name;
	// 	console.log(this.state.cityname)
	// }

}

export default Search; 