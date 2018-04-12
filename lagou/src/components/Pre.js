import React, { Component } from 'react';
import './Pre.css'
class Prev extends Component{
	constructor(){
		super()
		this.state={
			style:"flex"
		}
		this.handleclick=this.handleclick.bind(this);
	}
	render(){

		return(
			<li className="activeable history-item" style={{"display":this.state.style}}>
				<span className="text" >{this.props.data}</span>
				<div className="delcon"data-name={this.props.data}>
					<span className="delicon" onClick={this.handleclick}>X</span>
				</div>
			</li>
			)
	}

	handleclick(){
		this.setState({
			style:"none"
		});
		var arr =  Array.from(JSON.parse(localStorage.getItem('key')));
		let index = arr.indexOf(this.props.data);
		arr.splice(index,1);
		localStorage.setItem('key', JSON.stringify(arr));
	}
}

export default Prev; 