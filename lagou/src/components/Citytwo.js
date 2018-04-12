import React, { Component } from 'react';
import {
  BrowserRouter as Router,//路径模式可以换成hash模式
  Route, //路由切换的坑
  Link, //模板切换的组件
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom'
class Citytwo extends Component{
	constructor(){
		super()
	}
	render(){
			let data = this.props.data;
		return(
			<NavLink to={
				{
					pathname:"./search",
					data
				}
			}>
				<li className="activeable cities-item">{this.props.data}</li>
			</NavLink>
			)
	}
}

export default Citytwo; 