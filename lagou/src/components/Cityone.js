import React, { Component } from 'react';
import Citytwo from "./Citytwo";
import './Cityone.css';
class Cityone extends Component{
	constructor(){
		super()
		this.state={
			
		}
	}
	render(){
		let arr = this.props.data.city.map((ele)=>{
			return <Citytwo data={ele} key={ele}></Citytwo>
		})
		return(
			<div className="app1">
				<div className="cities-header">{this.props.data.header}</div>
				<ul className="cities-list-item1">
					{arr}
				</ul>
			</div>
			)

	}
	
}

export default Cityone; 