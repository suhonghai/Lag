import React, { Component } from 'react';
import axios from "axios";
import Country from "./Country";
import List from "./List"
import './../pages/Position.css';
import {
  BrowserRouter as Router,//路径模式可以换成hash模式
  Route, //路由切换的坑
  Link, //模板切换的组件
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom'
class Cityone extends Component{
	constructor(){
		super()
		this.state={
			data:[],
		}
	}
	render(){
		var arr = this.props.data.map((ele)=>{
			return <List data={ele} key={ele.positionId}></List>
			})

		return(
			<div className="App2">
				{/*<Route path="/search" component={Country}></Route>*/}
				<ul className="list" style={{"overflow":"auto","height":"580px"}}>
					{arr}
				</ul>
			</div>
			)
	}
	// componentWillMount(){
	// 	console.log(this.props.data)
	// 	let data = this.props.data
	// 	this.setState({
	// 		data:data
	// 	});
	// }
}

export default Cityone; 