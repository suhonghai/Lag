import React, { Component } from 'react';
import Pre from "./Pre";
import './Record.css';
class Record extends Component{
	constructor(){
		super()
		this.state={

		}
	}
	render(){
		let arr = this.props.data.map((ele)=>{
			return <Pre data={ele} key={ele}></Pre>
		})
		return(
				<ul className="Recordname" style={{"display":this.props.sty}}>
					{arr}
				</ul>
			)
	}
}

export default Record; 