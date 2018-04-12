import React, { Component } from 'react';
import Cityone from "./Cityone";
class City extends Component{
	constructor(){
		super()
		this.state={
			data:[{
					"positionId":1,
　　　　　　　　　　"header":"热门城市",
					"city":["北京","上海","广州","深圳","成都","杭州"]
　　　　　　　　　　},{
					"positionId":2,
　　　　　　　　　　"header":"ABCDEF",
					"city":["澳门特别行政区","保定","北海","北京","包头","长春","成都","常德","重庆","长沙","常州","沧州","郴州","潮州","滁州","东莞","大连","大理","东营","德阳","德州","佛山","阜阳","福州"]
　　　　　　　　　　},{
					"positionId":3,
　　　　　　　　　　"header":"GHIJ",
					"city":["桂林",	"贵阳",	"广州","赣州",	"淮安",	"邯郸","哈尔滨",	"合肥",	"呼和浩特","海口",	"衡水",	"衡阳","杭州",	"惠州",	"湖州","菏泽",	"金华",	"吉林","江门",	"济南",	"济宁","嘉兴",	"揭阳",	"焦作",]
　　　　　　　　　　},{
					"positionId":4,
　　　　　　　　　　"header":"KLMN",
					"city":["昆明",	"廊坊",	"拉萨",
"丽水",	"临沂",	"洛阳",
"连云港",	"兰州",	"柳州",
"马鞍山",	"绵阳",	"宁波",
"南昌",	"南充",	"南京",
"南宁",	"南通",	"南阳"]
　　　　　　　　　　},{
					"positionId":5,
　　　　　　　　　　"header":"OPQR",
					"city":["莆田",	"濮阳",	"青岛",
"黔东南",	"秦皇岛",	"清远",
"泉州",	"日照"]
　　　　　　　　　　},{
					"positionId":6,
　　　　　　　　　　"header":"STUV",
					"city":["韶关",	"上海",	"石家庄",
"宿迁",	"汕头",	"绍兴",
"沈阳",	"三亚",	"邵阳",
"深圳",	"苏州",	"宿州",
"泰安",	"天津",	"唐山",
"太原",	"台州",	"泰州"]
　　　　　　　　　　},{
					"positionId":7,
　　　　　　　　　　"header":"WXYZ",
					"city":["潍坊",	"武汉",	"芜湖",
"威海",	"乌鲁木齐",	"无锡",
"温州",	"西安",	"香港特别行政区",
"厦门",	"西宁",	"湘潭",
"邢台",	"新乡",	"咸阳",
"信阳",	"徐州",	"银川",
"盐城",	"宜昌",	"烟台",
"扬州",	"淄博",	"珠海",
"镇江",	"湛江",	"周口",
"肇庆",	"中山",	"遵义",
"郑州",	"漳州",	"株洲"]
　　　　　　　　　　}]
					
		}
	}
	render(){
		let arr = this.state.data.map((ele)=>{
			return <Cityone data={ele} key={ele.positionId}></Cityone>
		})
		return(
			<div className="city" style={{"overflow":"auto","height":"580px"}}>
		     	{arr}
		    </div>
			)

	}
	
}

export default City; 