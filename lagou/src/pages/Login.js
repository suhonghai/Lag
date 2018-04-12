import React, { Component } from 'react';
import './Login.css';
import axios from "axios";
import {
	Route,
	NavLink
} from 'react-router-dom';
class Login extends Component{
	constructor(){
		super()
		this.state = {
			username:"",
			pwd:""
		}
		this.handleusername = this.handleusername.bind(this);
		this.handlepwd = this.handlepwd.bind(this);
		this.handlesub = this.handlesub.bind(this);
	}
	render(){
		return(
				<div className="container">
					<section className="form_container active">
						<header className="form_header"><h2>登录拉勾</h2><a href="/Regist" className="brother_link">注册</a></header>
						<form className="form_body form_password" method="post">
							<div className="input_label">
								<input type="text" placeholder="请输入已验证的手机号或邮箱" className="input_text user_input" onBlur={this.handleusername}/>
							</div>
							<div className="input_label">
								<input type="password" className="input_text password_input" placeholder="请输入密码" onBlur={this.handlepwd}/>
							</div>
							<div className="input_label btn_group">
								<input type="submit" className="submit_btn" value="登录" onClick={this.handlesub}/>
							</div>
						</form>
						<footer className="form_footer">
							<span className="signin_type_btn"><NavLink to="/phoneLogin">手机号登录</NavLink></span>
						</footer>
					</section>
				</div>
			)
	}

	handleusername(e){
		this.setState({
			username:e.target.value
		})
	}
	handlepwd(e){
		this.setState({
			pwd:e.target.value
		})
	}
	handlesub(e){
		e.preventDefault();
		if(!this.state.username || !this.state.pwd){
			alert("手机号或密码不能为空。。")
		}else{

			let {username,pwd} = this.state;

			axios.post("/api/login",{username,pwd}).then((res)=>{
				console.log(res);
				if(!res.data.code){
					alert("登录成功");
					localStorage.setItem('username', JSON.stringify(res.data.username.username));
					this.props.history.replace("./Position");
				}
			})
		}
		
	}
}

export default Login; 