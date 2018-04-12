import React, { Component } from 'react';
import List from '../components/List';
import axios from "axios";
import "./Position.css";
import $ from "jquery";
import {
  Route, //路由切换的坑
  Link, //模板切换的组件
  NavLink
} from 'react-router-dom'
class Position extends Component{
	constructor(){
		super()
		this.state={
			data:[],
			num:6
		}
		this.handleClick= this.handleClick.bind(this);
	}
	render(){
		let arr = this.state.data.map((ele)=>{
			return <List data={ele} key={ele.positionId}></List>
		})
		return(
				<div className="App2">
					<header id="header">拉勾网</header>
					<ul className="list" style={{"overflow":"auto","height":"580px"}}>
						{arr}
						<li className="activeable list-more" onClick={this.handleClick}>加载更多</li>
					</ul>
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
				</div>
			)
	}
	componentWillMount (){
		let _this = this;
		axios.post("/api/data").then((res)=>{
			console.log(res);
			let data = res.data.msg.splice(1,5);
			_this.setState({
				data:data
			});
		})
	}
	handleClick(){
			axios.post("/api/data").then((res)=>{
			let data = res.data.msg;
			let _num = this.state.num
			let val = data.splice(1,_num);
			this.setState({
				num:_num+1
			});
			this.setState({
				data:val
			});
		})
	}
}

export default Position; 