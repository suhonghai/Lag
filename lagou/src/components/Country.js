import React, { Component } from 'react';
import axios from "axios";
import Sposition from "./Sposition";
import Record from "../components/Record"
import {
  BrowserRouter as Router,//路径模式可以换成hash模式
  Route, //路由切换的坑
  Link, //模板切换的组件
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom'
class Country extends Component{
	constructor(){
		super()
		this.state={
			cityname:"全国",
			data:[],
			val:[],
			search:[],
			styl:"block",
			sty:"none"
		}
		this.handledata = this.handledata.bind(this);
		this.handletxt = this.handletxt.bind(this);
	}
	render(){
		if(!JSON.parse(localStorage.getItem('key'))){
			this.state.search = []
		}else{
			this.state.search = Array.from(JSON.parse(localStorage.getItem('key')));
		}
		
		return(
			<div className="App3">
				<div id="content" style={{padding:0}}>
			        <div className="linputer">
			            <div className="lbutton">
			                <NavLink to="/city"><span className="city">{this.state.cityname}</span></NavLink>
			                <span className="cityicon"></span>
			            </div>
			            <div className="rinput">
			                <input className="inputer" type="text" placeholder="搜索职位或公司" style={{padding:"22px 0"}} onBlur={this.handletxt}/>
			               
			                <span className="search" onClick={this.handledata}><em className="searchicon"></em></span>
			                
			            </div>
			        </div>
			  
			    </div>
			    <Sposition data={this.state.data} sty={this.state.sty}></Sposition>
			    <Record data={this.state.search} sty={this.state.styl}></Record>

				
			</div>
			)

	}
	componentWillMount (){
		let data = this.props.location.data;
		if(!data){
			return
		}else{
			this.setState({
				cityname:data
			});
		}
	}
	handletxt(e){
		console.log(typeof(this.state.val))
		// let data = this.state.val.push(e.target.value);
		let data = e.target.value;
		this.setState({
			val:data
		});
		console.log(this.state)
	}

	handledata(e){
		let _this = this;
		let postData = this.state;
		this.setState({
			styl:"none",
			sty:"block"
		});
		axios.post("/api/data",postData).then((res)=>{
			console.log(res)
			let position = res.data.position.val;
			let data = res.data.msg;
			
			_this.setState({
				data:data
			});
		})
		var arr;
		if(!JSON.parse(localStorage.getItem('key'))){

				arr =[];
				arr.push(this.state.val);
			}else{
				console.log(JSON.parse(localStorage.getItem('key')))
				console.log(Array.from(JSON.parse(localStorage.getItem('key'))))
				arr = Array.from(JSON.parse(localStorage.getItem('key')));
				arr.push(this.state.val);
			}

			localStorage.setItem('key', JSON.stringify(arr));
	}
}

export default Country; 