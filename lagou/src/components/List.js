import React, { Component } from 'react';
import {
  Route, //路由切换的坑
  Link, //模板切换的组件
  NavLink
} from 'react-router-dom'
class List extends Component{
	constructor(){
		super()
		this.handleClick = this.handleClick.bind(this);
	}
	render(){
		let {companyLogo,companyName,city,salary,positionName,createTime,positionid,companyId} = this.props.data;
		return(

			<NavLink to={
				{
					pathname:"/detail",
					companyLogo,companyName,city,salary,positionName,createTime,positionid,companyId
				}
			}>
				<li className="activeable list-item" data-positionid={positionid} data-companyid={companyId} onClick={this.handleClick}>
	            <img src={companyLogo} className="item-logo" />
	            <div className="item-desc">
	                <h2 className="item-title">{companyName}</h2>
	                <p className="item-info">
	                    <span className="item-pos">
	                        {positionName} [ {city} ]
	                    </span>
	                    <span className="item-salary">{salary}</span>
	                </p>
	                <p className="item-time">{createTime}</p>
	            </div>
	        </li>
			</NavLink>
			
			)

	}
	handleClick(e){
		console.log(this.props.data);
		localStorage.setItem('key', JSON.stringify(this.props.data));
	}
}

export default List; 