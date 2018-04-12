import React, { Component } from 'react';
import './Login.css';
import axios from "axios";
import {
  Route, //路由切换的坑
  Link, //模板切换的组件
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom'
class Regist extends Component{
	constructor(){
		super();
        this.state = {
            phone:""
        };
        this.handleregist = this.handleregist.bind(this);
        this.handleinput = this.handleinput.bind(this);
	}
	render(){
		return(
			<div className="container cleafix">
    <section className="form_container active" data-view="codeLogin">
        <header className="form_header"><h2>注册拉勾</h2><a href="/login" className="brother_link">登录</a></header>
        <form className="form_body form_register">
            <div className="input_label phone_wrapper">
 {   /*          
 	@require "mobile/modules/country-code/main.js"
 	@require "mobile/modules/country-code/main.less"
 */}
<span className="area_code">0086</span>
<div className="area_code_list">
    <dl className="code_list_main"><dt>常用</dt><dd data-code="0086">中国</dd><dd data-code="00852">中国香港</dd><dd data-code="00886">中国台湾</dd><dd data-code="00853">中国澳门</dd><dd data-code="001">美国</dd><dt>A</dt><dd data-code="0061">澳大利亚</dd><dd data-code="00853">中国澳门</dd><dt>B</dt><dd data-code="0055">巴西</dd><dt>D</dt><dd data-code="0049">德国</dd><dt>E</dt><dd data-code="007">俄罗斯</dd><dt>F</dt><dd data-code="0033">法国</dd><dt>H</dt><dd data-code="0082">韩国</dd><dt>J</dt><dd data-code="001">加拿大</dd><dt>M</dt><dd data-code="0060">马来西亚</dd><dd data-code="001">美国</dd><dt>R</dt><dd data-code="0081">日本</dd><dt>T</dt><dd data-code="00886">中国台湾</dd><dd data-code="0066">泰国</dd><dt>X</dt><dd data-code="00852">中国香港</dd><dd data-code="0065">新加坡</dd><dt>Y</dt><dd data-code="0091">印度</dd><dd data-code="0044">英国</dd><dt>Z</dt><dd data-code="0086">中国</dd></dl>
    <p className="tips">如果没有找到你所在的归属地，<br />请拨打客服电话<a href="tel:4006282835">4006282835</a> 解决。</p>
</div>

                <input type="text" placeholder="请输入常用手机号" className="input_text phone_input" onBlur={this.handleinput}/>
            </div>
            <div className="input_label">
                <input type="text" placeholder="请证明你不是机器人" className="input_text pcode_input" />
                <img src="https://passport.lagou.com/vcode/create?from=register" width="2" height="2" className="pcode_img" alt="图片验证码" />
                <a className="pcode_link">换一张</a>   
            </div>
            <div className="input_label clearfix">
                <input type="text" className="input_text vcode_input" placeholder="请输入收到的验证码" />
                <input type="button" className="input_text vcode_link" value="获取验证码" placeholder="获取验证码" />
            </div>
            
            <div className="input_label btn_group">
                <input type="submit" className="submit_btn" value="注册" onClick={this.handleregist}/>
            </div>
            <div className="register_agreement">注册拉勾代表你已同意<a href="http://www.lagou.com/privacy.html" target="_blank">《拉勾用户协议》</a></div>
        </form>
    </section>
</div>
			)
	}
    handleinput(e){
         this.setState({
            phone:e.target.value
        });
    }
    handleregist(e){
         e.preventDefault();  
        if(!this.state.phone){
            alert("手机号不能为空。。")
        }else{ 

            let {username} = this.state;
            //发请求，配置代理 localhost：3000 代理带一个localhost：8848
           axios.post("/api/regist",{username}).then((res)=>{
               console.log(res);
                if(!res.data.code){
                    alert("注册成功");
                    this.props.history.replace('/position');
                }
           })
       }

       
    }
}

export default Regist; 