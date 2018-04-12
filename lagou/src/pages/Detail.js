import React, { Component } from 'react';
import "./Detail.css";
class Detail extends Component{
	constructor(){
		super()
		this.handlereturn = this.handlereturn.bind(this);
	}
	render(){
		// localStorage.setItem('key', JSON.stringify({companyLogo,companyName,city,salary,positionName,createTime}));
			let data = JSON.parse(localStorage.getItem('key'));
			// console.log(data);
			let {companyLogo,companyName,city,salary,positionName,createTime,positionid,companyId} =data;

		return(
			<div className="App5">
				<header id="header">职位详情
					<div className="left">
						<span className="corner" onClick={this.handlereturn}>&lt;</span>
					</div>
					<div className="right">
						<span className="corner"></span>
					</div>
				</header>
				<div id="content">
					<div className="postitle">
					<h2 style={{"fontSize":"25px"}}>{positionName}</h2>
					<div className="collicon activeable">
					<span className="icon notcoll"></span>
					</div>	
				</div>
				<div className="detail">
					<div className="items">
						<span className="item salary">
							<em className="icon"></em>
							<span className="text">{salary}</span>
						</span>
						<span className="item workaddress">
							<em className="icon"></em>
							<span className="text">{city}</span>
						</span>
						<span className="item jobnature">
	                        <em className="icon"></em>
	                        <span className="text">全职</span>
	                    </span>
						<span className="item workyear">
	                        <em className="icon"></em>
	                        <span className="text">不限</span>
	                    </span>
						<span className="item education">
	                        <em className="icon"></em>
	                        <span className="text">大专及以上</span>
	                    </span>
					</div>
					<div className="temptation">
		                职位诱惑：周末双休,项目奖金,朝九晚六
		            </div>
				</div>

				<div className="company activeable" data-lg-tj-id="19v6" data-lg-tj-no="0030" data-lg-tj-cid="131757">
		            <img src={companyLogo} alt="" className="logo" />
		            <div className="desc">
		                <div className="dleft">
		                    <h2 className="title">
		                        {companyName}
		                    </h2>
		                    <p className="info">
		                                                    移动互联网
		                                                                            / 未融资
		                                                                            / 15-50人
		                                            </p>
		                </div>
                        <span className="dright"></span>
                	</div>
		        </div>

		       <div className="positiondesc">
		       		 <header className="header">
	                职位描述
	            </header>
				

				<div className="content">
	                <p>岗位职责：</p>
					<p>1、根据设计文档或需求说明完成代码编写，调试，测试和维护；</p>
					<p>2、分析并解决软件开发过程中的问题；</p>
					<p>3、协助测试工程师制定测试计划，定位发现的问题；</p>
					<p>4、配合项目经理完成相关任务目标；</p>
					<p><br /></p>
					<p>任职要求:</p>
					<p>1.有完整的iOS应用的开发经历；</p>
					<p>2.能阅读官方英文文档；</p>
					<p>3.能同时使用Objective-C和Swift语言开发；</p>
					<p>4.熟练使用常见的第三方库，如: AFNetworking, RxCocoa, RxSwift；</p>
					<p>5.能遵从编码规范,编写高质量的程序；</p>
					<p>6.诚恳，踏实，有较好的自学能力和上进心；</p>

	            </div>
		       </div>
	            <div className="positioneval">
		            <div className="eval-title">
		                面试评价
		                    <span id="total">(<span>0</span>)</span>
		            </div>
		            <ul className="list"><li className="list-item-empty list-item">暂无面试评价</li></ul>
		            <a className="eval-all" href="/user/expsList_3435198.html" style={{"display":"none"}}></a>   
		        </div>

		        <div className="fix_btn_group" style={{"left":"15px","bottom":"20px"}}>
                    <div className="deliver deliver_resume rows_bar" data-lg-tj-id="19v6" data-lg-tj-no="0020" data-lg-tj-cid="3435198" style={{"display": "block"}}>	投递简历
                    </div>

                	<div className="deliver smallWX hollow use_smallWX" data-lg-tj-id="19v6" data-lg-tj-no="0000" data-lg-tj-cid="3435198">小程序打开</div>
                	<div className="deliver deliver_resume smallWX solid" data-lg-tj-id="19v6" data-lg-tj-no="0020" data-lg-tj-cid="3435198">投递简历</div>
                </div>
                <div id="push_bottom" style={{"display": "none"}}>
		            <div className="push_bottom_table">
		                <a className="push_bottom_download" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.alpha.lagouapk&amp;ckey=CK1337790743204" target="_blank" data-lg-tj-id="19qh" data-lg-tj-no="idnull" data-lg-tj-cid="idnull">
		                    <div className="push_bottom_row">
		                        <div className="push_bottom_cell push_logo">
		                            <img src="//static.lagou.com/m/images/asset/custom/list/img/download_logo_new.png" width="100%" alt="lagou.com" />
		                        </div>
		                        <div className="push_bottom_cell push_tips">
		                            <img src="//static.lagou.com/m/images/asset/custom/list/img/download_txt_new.png" width="100%" alt="拉勾 机会很多 挑满意的 手机投简历，在线聊Offer" />
		                        </div>
		                        <div className="push_bottom_cell push_btn">
		                            <img src="//static.lagou.com/m/images/asset/custom/list/img/download_btn_new.png" width="100%" alt="下载APP" />
		                        </div>
		                    </div>
		                </a>
		                <div className="push_mascot">
		                    <img className="push_mascot_img" src="//static.lagou.com/m/images/asset/custom/list/img/download_mascot.png" width="100%" alt="拉勾君" />
		                </div>
		                <div className="close_btn" data-lg-tj-id="2ip0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull">
		                    <img className="close_btn_img" src="//static.lagou.com/m/images/asset/custom/list/img/download_btn_close.png" width="100%" alt="关闭" />
		                </div>
		            </div>
		        </div>
				</div>
			</div>
			)
	}
	handleClick(e){
		
	}
	handlereturn(){
		this.props.history.replace('/position');
	}
}

export default Detail; 