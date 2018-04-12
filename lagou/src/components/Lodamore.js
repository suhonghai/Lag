import React, { Component } from 'react';
class Loadmore extends Component{
	constructor(){
		super()
		this.state={
			
		}
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
}

export default Loadmore; 