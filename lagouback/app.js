var express = require("express");

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json()); //处理已json格式提交
app.use(bodyParser.urlencoded({
   extended: true
}))//form 表单

app.post("/api/regist",function(req,res){
	let _data = req.body;
	console.log("处理中");
	res.json({
		code:0,
		msg:"注册成功",
		username:_data
	})
})
app.post("/api/login",function(req,res){
	let _data = req.body;
	console.log("处理登录中");
	res.json({
		code:0,
		msg:"登录成功",
		username:_data
	})
})
app.post("/api/phone",function(req,res){
	let _data = req.body;
	console.log("处理手机登录中");
	res.json({
		code:0,
		msg:"登录成功",
		username:_data
	})
})
app.post("/api/data",function(req,res){
	console.log("处理登录中");
	let _data = req.body;
	console.log(_data);
	res.json({
		code:0,
		position:_data,
		msg:[{
　　　　　　　　　　　　"logger":{
　　　　　　　　　　　　　　"traceCapable":true,
　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"
　　　　　　　　　　　　},
　　　　　　　　　　　　"positionId":3883174,
　　　　　　　　　　　　"positionName":"视频广告设计师",
　　　　　　　　　　　　"city":"广州",
　　　　　　　　　　　　"createTime":"今天 14:51",
　　　　　　　　　　　　"salary":"8k-16k",
　　　　　　　　　　　　"companyId":292539,
　　　　　　　　　　　　"companyLogo":"http://static.lagou.com/i/image2/M00/24/F2/CgoB5lob1iiAd_bWAABOcibCDKQ499.png",
　　　　　　　　　　　　"companyName":"掌昆游戏",
　　　　　　　　　　　　"companyFullName":"广州掌昆网络科技有限公司"
　　　　　　　　　　},
　　　　　　　　　　{
　　　　　　　　　　　　"logger":{
　　　　　　　　　　　　　　"traceCapable":true,
　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"
　　　　　　　　　　　　},
　　　　　　　　　　　　"positionId":3885007,
　　　　　　　　　　　　"positionName":"运营专员（邀约+培训）",
　　　　　　　　　　　　"city":"温州",
　　　　　　　　　　　　"createTime":"今天 14:48",
　　　　　　　　　　　　"salary":"4k-5k",
　　　　　　　　　　　　"companyId":41178,
　　　　　　　　　　　　"companyLogo":"http://static.lagou.com/image1/M00/00/66/Cgo8PFTUXWSACW7OAACKSYYZpsc111.png",
　　　　　　　　　　　　"companyName":"货拉拉手机打车软件",
　　　　　　　　　　　　"companyFullName":"深圳依时货拉拉科技有限公司"
　　　　　　　　　　},
　　　　　　　　　　{
　　　　　　　　　　　　"logger":{
　　　　　　　　　　　　　　"traceCapable":true,
　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"
　　　　　　　　　　　　},
　　　　　　　　　　　　"positionId":3876134,
　　　　　　　　　　　　"positionName":"电话客服",
　　　　　　　　　　　　"city":"深圳",
　　　　　　　　　　　　"createTime":"今天 14:48",
　　　　　　　　　　　　"salary":"4k-5k",
　　　　　　　　　　　　"companyId":41178,
　　　　　　　　　　　　"companyLogo":"http://static.lagou.com/image1/M00/00/66/Cgo8PFTUXWSACW7OAACKSYYZpsc111.png",
　　　　　　　　　　　　"companyName":"货拉拉手机打车软件",
　　　　　　　　　　　　"companyFullName":"深圳依时货拉拉科技有限公司"
　　　　　　　　　　},
　　　　　　　　　　{
　　　　　　　　　　　　"logger":{
　　　　　　　　　　　　　　"traceCapable":true,
　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"
　　　　　　　　　　　　},
　　　　　　　　　　　　"positionId":3879540,
　　　　　　　　　　　　"positionName":"WEB平面设计师",
　　　　　　　　　　　　"city":"厦门",
　　　　　　　　　　　　"createTime":"今天 14:47",
　　　　　　　　　　　　"salary":"5k-8k",
　　　　　　　　　　　　"companyId":14525,
　　　　　　　　　　　　"companyLogo":"http://static.lagou.com/i/image/M00/2D/C9/CgqKkVc9JPqAIgkXAAGBBCicOpA558.png",
　　　　　　　　　　　　"companyName":"鸿星尔克集团",
　　　　　　　　　　　　"companyFullName":"鸿星尔克(厦门)实业有限公司"
　　　　　　　　　　},
　　　　　　　　　　{
　　　　　　　　　　　　"logger":{
　　　　　　　　　　　　　　"traceCapable":true,
　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"
　　　　　　　　　　　　},
　　　　　　　　　　　　"positionId":4148690,
　　　　　　　　　　　　"positionName":"政府事务专员",
　　　　　　　　　　　　"city":"北京",
　　　　　　　　　　　　"createTime":"今天 14:47",
　　　　　　　　　　　　"salary":"5k-8k",
　　　　　　　　　　　　"companyId":150256,
　　　　　　　　　　　　"companyLogo":"http://static.lagou.com/i/image3/M00/1B/BA/CgpOIFp-YAOAaF2cAAJASn70WiY249.jpg",
　　　　　　　　　　　　"companyName":"思享时代（北京）科技有限公司",
　　　　　　　　　　　　"companyFullName":"思享时代（北京）科技有限公司"
　　　　　　　　　　},
　　　　　　　　　　{
　　　　　　　　　　　　"logger":{
　　　　　　　　　　　　　　"traceCapable":true,
　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"
　　　　　　　　　　　　},
　　　　　　　　　　　　"positionId":4148738,
　　　　　　　　　　　　"positionName":"政府事务主管",
　　　　　　　　　　　　"city":"北京",
　　　　　　　　　　　　"createTime":"今天 14:47",
　　　　　　　　　　　　"salary":"7k-10k",
　　　　　　　　　　　　"companyId":150256,
　　　　　　　　　　　　"companyLogo":"http://static.lagou.com/i/image3/M00/1B/BA/CgpOIFp-YAOAaF2cAAJASn70WiY249.jpg",
　　　　　　　　　　　　"companyName":"思享时代（北京）科技有限公司",
　　　　　　　　　　　　"companyFullName":"思享时代（北京）科技有限公司"
　　　　　　　　　　},
　　　　　　　　　　{
　　　　　　　　　　　　"logger":{
　　　　　　　　　　　　　　"traceCapable":true,
　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"
　　　　　　　　　　　　},
　　　　　　　　　　　　"positionId":3884357,
　　　　　　　　　　　　"positionName":"Windows C++工程师",
　　　　　　　　　　　　"city":"厦门",
　　　　　　　　　　　　"createTime":"今天 14:47",
　　　　　　　　　　　　"salary":"15k-20k",
　　　　　　　　　　　　"companyId":117696,
　　　　　　　　　　　　"companyLogo":"http://static.lagou.com/i/image/M00/0C/CD/CgqKkVbX7mWAT9bCAAAYvrNReYk598.jpg",
　　　　　　　　　　　　"companyName":"月轮网络科技有限公司",
　　　　　　　　　　　　"companyFullName":"厦门市月轮网络科技有限公司"
　　　　　　　　　　},
　　　　　　　　　　{
　　　　　　　　　　　　"logger":{
　　　　　　　　　　　　　　"traceCapable":true,
　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"
　　　　　　　　　　　　},
　　　　　　　　　　　　"positionId":3884390,
　　　　　　　　　　　　"positionName":"C/C++ 工程师",
　　　　　　　　　　　　"city":"厦门",
　　　　　　　　　　　　"createTime":"今天 14:47",
　　　　　　　　　　　　"salary":"15k-20k",
　　　　　　　　　　　　"companyId":117696,
　　　　　　　　　　　　"companyLogo":"http://static.lagou.com/i/image/M00/0C/CD/CgqKkVbX7mWAT9bCAAAYvrNReYk598.jpg",
　　　　　　　　　　　　"companyName":"月轮网络科技有限公司",
　　　　　　　　　　　　"companyFullName":"厦门市月轮网络科技有限公司"
　　　　　　　　　　},
　　　　　　　　　　{
　　　　　　　　　　　　"logger":{
　　　　　　　　　　　　　　"traceCapable":true,
　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"
　　　　　　　　　　　　},
　　　　　　　　　　　　"positionId":3879987,
　　　　　　　　　　　　"positionName":"ASP.NET开发工程师",
　　　　　　　　　　　　"city":"武汉",
　　　　　　　　　　　　"createTime":"今天 14:46",
　　　　　　　　　　　　"salary":"7k-10k",
　　　　　　　　　　　　"companyId":187991,
　　　　　　　　　　　　"companyLogo":"http://static.lagou.com/i/image/M00/C2/FF/CgqKkVjbMAKAOSQ0AAKwF6ZqXsk808.jpg",
　　　　　　　　　　　　"companyName":"百胜软件",
　　　　　　　　　　　　"companyFullName":"武汉百胜睿迪软件有限公司"
　　　　　　　　　　},
　　　　　　　　　　{
　　　　　　　　　　　　"logger":{
　　　　　　　　　　　　　　"traceCapable":true,
　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"
　　　　　　　　　　　　},
　　　　　　　　　　　　"positionId":4182313,
　　　　　　　　　　　　"positionName":"市场销售专员",
　　　　　　　　　　　　"city":"杭州",
　　　　　　　　　　　　"createTime":"今天 14:43",
　　　　　　　　　　　　"salary":"6k-10k",
　　　　　　　　　　　　"companyId":149034,
　　　　　　　　　　　　"companyLogo":"http://static.lagou.com/i/image/M00/5B/EE/CgqKkVfiaO2AeouUAABrk5W83EQ723.jpg",
　　　　　　　　　　　　"companyName":"骏嘉财通",
　　　　　　　　　　　　"companyFullName":"北京骏嘉财通科技有限公司"
　　　　　　　　　　},
　　　　　　　　　　{
　　　　　　　　　　　　"logger":{
　　　　　　　　　　　　　　"traceCapable":true,
　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"
　　　　　　　　　　　　},
　　　　　　　　　　　　"positionId":4148638,
　　　　　　　　　　　　"positionName":"班主任/学业规划师",
　　　　　　　　　　　　"city":"上海",
　　　　　　　　　　　　"createTime":"今天 14:43",
　　　　　　　　　　　　"salary":"6k-10k",
　　　　　　　　　　　　"companyId":60054,
　　　　　　　　　　　　"companyLogo":"http://static.lagou.com/i/image/M00/97/28/CgqKkVidPGiAa1zvAAAhfGwoYqw064.png",
　　　　　　　　　　　　"companyName":"掌门1对1在线教育",
　　　　　　　　　　　　"companyFullName":"上海掌小门教育科技有限公司"
　　　　　　　　　　},
　　　　　　　　　　{
　　　　　　　　　　　　"logger":{
　　　　　　　　　　　　　　"traceCapable":true,
　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"
　　　　　　　　　　　　},
　　　　　　　　　　　　"positionId":4148610,
　　　　　　　　　　　　"positionName":"WEB前端",
　　　　　　　　　　　　"city":"深圳",
　　　　　　　　　　　　"createTime":"今天 14:41",
　　　　　　　　　　　　"salary":"12k-22k",
　　　　　　　　　　　　"companyId":16831,
　　　　　　　　　　　　"companyLogo":"http://static.lagou.com/i/image/M00/02/AB/CgqKkVaXX_6AaLKaAAAX52Kvjjg750.jpg",
　　　　　　　　　　　　"companyName":"武汉佰钧成技术有限公司",
　　　　　　　　　　　　"companyFullName":"武汉佰钧成技术有限责任公司"
　　　　　　　　　　},
　　　　　　　　　　{
　　　　　　　　　　　　"logger":{
　　　　　　　　　　　　　　"traceCapable":true,
　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"
　　　　　　　　　　　　},
　　　　　　　　　　　　"positionId":4148712,
　　　　　　　　　　　　"positionName":"DB2 DBA",
　　　　　　　　　　　　"city":"深圳",
　　　　　　　　　　　　"createTime":"今天 14:41",
　　　　　　　　　　　　"salary":"18k-35k",
　　　　　　　　　　　　"companyId":16831,
　　　　　　　　　　　　"companyLogo":"http://static.lagou.com/i/image/M00/02/AB/CgqKkVaXX_6AaLKaAAAX52Kvjjg750.jpg",
　　　　　　　　　　　　"companyName":"武汉佰钧成技术有限公司",
　　　　　　　　　　　　"companyFullName":"武汉佰钧成技术有限责任公司"
　　　　　　　　　　},
　　　　　　　　　　{
　　　　　　　　　　　　"logger":{
　　　　　　　　　　　　　　"traceCapable":true,
　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"
　　　　　　　　　　　　},
　　　　　　　　　　　　"positionId":4151098,
　　　　　　　　　　　　"positionName":"场景修图师",
　　　　　　　　　　　　"city":"广州",
　　　　　　　　　　　　"createTime":"今天 14:41",
　　　　　　　　　　　　"salary":"8k-12k",
　　　　　　　　　　　　"companyId":189292,
　　　　　　　　　　　　"companyLogo":"http://static.lagou.com/i/image/M00/20/6C/CgpEMlkL5guAVVakAAf91ATKupI702.png",
　　　　　　　　　　　　"companyName":"鲸鱼游戏",
　　　　　　　　　　　　"companyFullName":"上海鲸团科技有限公司"
　　　　　　　　　　},
　　　　　　　　　　{
　　　　　　　　　　　　"logger":{
　　　　　　　　　　　　　　"traceCapable":true,
　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"
　　　　　　　　　　　　},
　　　　　　　　　　　　"positionId":4151056,
　　　　　　　　　　　　"positionName":"执行/系统/数值策划",
　　　　　　　　　　　　"city":"广州",
　　　　　　　　　　　　"createTime":"今天 14:41",
　　　　　　　　　　　　"salary":"8k-12k",
　　　　　　　　　　　　"companyId":189292,
　　　　　　　　　　　　"companyLogo":"http://static.lagou.com/i/image/M00/20/6C/CgpEMlkL5guAVVakAAf91ATKupI702.png",
　　　　　　　　　　　　"companyName":"鲸鱼游戏",
　　　　　　　　　　　　"companyFullName":"上海鲸团科技有限公司"
　　　　　　　　　　}]
	})
})
app.listen(8848,function(){
	console.log("启动成功");
});

