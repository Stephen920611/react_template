(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"2j22":function(e,a,t){"use strict";t.r(a);t("xju3");var n,l,r=t("993v"),s=(t("7lm+"),t("Oy9c")),i=(t("flUi"),t("BFxG")),c=t("43Yg"),m=t.n(c),d=t("/tCh"),o=t.n(d),p=t("scpF"),u=t.n(p),E=t("O/V9"),f=t.n(E),h=t("8aBX"),T=t.n(h),y=t("2w0b"),N=t.n(y),P=t("LneV"),w=t("C8Ie"),g=t.n(w),O=t("qj9E"),I=t("zHco"),b=t("MV62"),k=(n=Object(P["connect"])(function(e){var a=e.checkRecord,t=e.loading;return{checkRecord:a,fetchStatus:t.effects["checkRecord/fetchMemberInfoAction"]}}),n(l=function(e){function a(){var e;return m()(this,a),e=u()(this,f()(a).call(this)),e.state={activities:{},currentInfo:{},member:{},touch:[],basicPersonnelInformation:{msg:"success",code:0,activities:[{id:1362,memberId:2476,backFromWhere:"\u7701\u5185",backTime:"2020-02-02 17:37",backType:"\u81ea\u9a7e",carNum:"\u9c81fb7l21",wayCity:"\u6dc4\u535a\u4e34\u6dc4\u533a",createTime:"2020-02-11 11:40",fillUserId:1103,fillUserName:"\u6d4b\u8bd5\u5218"}],currnets:[{id:1494,memberId:2476,bodyCondition:"\u6b63\u5e38",hasSeek:"\u662f",seekHospital:"\u83b1\u5c71\u6bd3\u749c\u9876",seekTime:"2020-02-08 08:39",controlMeasures:"\u5c45\u5bb6\u9694\u79bb",controlTime:"2020-02-05 11:40",nextMeasures:"\u5c45\u5bb6\u9694\u79bb",createTime:"2020-02-11 11:42",fillUserId:1103,fillUserName:"\u6d4b\u8bd5\u5218"}],member:{id:2476,area:"\u83b1\u5c71\u533a",name:"\u5218\u6653\u6668",address:"\u83b1\u5c71\u6cb3\u897f\u57ce\u5e02\u82b1\u56ed",idCard:"370781199312257865",phoneNum:"17862886396",age:26,gender:"\u7537",nativePlace:"\u5c71\u4e1c\u6f4d\u574a",baseInfo:"\u6b63\u5e38",createTime:"2020-02-11 11:39",fillUserId:1103,fillUserName:"\u6d4b\u8bd5\u5218"},touch:[{id:1128,memberId:2476,isTouchSuspect:"\u662f",suspectName:"\u6d4b\u8bd51",suspectIdCard:"838288281873322",suspectTime:"2020-02-01 11:38",suspectPoint:"\u4e34\u6dc4\u535a\u4e34\u6dc4\u533a",isTouchIntimate:"\u662f",intimateName:"\u6d4b\u8bd52",intimateIdCard:"\u5c31\u662f\u5c31\u662f\u9526\u6c5f\u5927\u9152\u5e97",intimateTime:"2020-01-01 11:39",intimatePoint:"\u9752\u5dde\u5e02\u516c\u5b89\u5c40",isTouchInfector:"\u5426",infectorName:"\u6d4b\u8bd53",infectorIdCard:"\u8fd9\u5b69\u5b50\u5c31\u662f\u5c31\u662f\u5c31\u662f",infectorTime:"2020-02-09 11:39",infectorPoint:"\u83b1\u5c71\u6cb3\u897f\u8d70\u5eca",createTime:"2020-02-11 11:41",fillUserId:1103,fillUserName:"\u6d4b\u8bd5\u5218"}]}},e}return T()(a,e),o()(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.dispatch,t=e.location,n=this;O["a"].auth.returnSpecialMainPage(t,"/addInfo"),t.hasOwnProperty("params")&&t["params"].hasOwnProperty("data")&&new Promise(function(e,n){a({type:"checkRecord/fetchMemberInfoAction",id:t["params"]["data"]["id"],resolve:e,reject:n})}).then(function(e){var a=e.data,t=a.currnets,l=a.member,r=a.touch,s=a.activities;0===e.code?n.setState({activities:O["a"].lodash.isUndefined(s[0])?{}:s[0],currentInfo:O["a"].lodash.isUndefined(t[0])?{}:t[0],member:l,touch:O["a"].lodash.isUndefined(r[0])?{}:r[0]}):O["a"].prompt.error(e.msg)})}},{key:"render",value:function(){var e=this.props.fetchStatus,a=this.state,t=a.activities,n=a.currentInfo,l=a.member,c=a.touch,m=[{linkTo:"/addInfo",name:"\u4fe1\u606f\u7ba1\u7406"},{name:"\u8be6\u60c5\u67e5\u770b"}];return N.a.createElement(I["a"],{title:"\u8be6\u60c5\u67e5\u770b",isSpecialBreadcrumb:!0,breadcrumbName:N.a.createElement(b["a"],{dataSource:m})},N.a.createElement("div",null,N.a.createElement("div",{className:g.a.detailItem},N.a.createElement("div",{className:g.a.detailTitleName},"\u4eba\u5458\u57fa\u672c\u4fe1\u606f"),N.a.createElement(r["a"],{style:{marginBottom:20},loading:e},N.a.createElement(s["a"],{className:g.a.detailTitle},N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u53bf\u5e02\u533a\uff1a"),N.a.createElement("span",null,l.hasOwnProperty("area")?l.area:"---")),N.a.createElement(i["a"],{span:6,className:g.a.detailBtns},N.a.createElement("span",null,"\u59d3\u540d\uff1a"),N.a.createElement("span",null,l.hasOwnProperty("name")?l.name:"---")),N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u5e74\u9f84\uff1a"),N.a.createElement("span",null,l.hasOwnProperty("age")?l.age:"---")),N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u6027\u522b\uff1a"),N.a.createElement("span",null,l.hasOwnProperty("gender")?l.gender:"---"))),N.a.createElement(s["a"],{className:g.a.detailTitle},N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u7c4d\u8d2f\uff1a"),N.a.createElement("span",null,l.hasOwnProperty("nativePlace")?l.nativePlace:"---")),N.a.createElement(i["a"],{span:6,className:g.a.detailBtns},N.a.createElement("span",null,"\u4f4f\u5740\uff1a"),N.a.createElement("span",null,l.hasOwnProperty("address")?l.address:"---")),N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u8eab\u4efd\u8bc1\u53f7\u7801\uff1a"),N.a.createElement("span",null,l.hasOwnProperty("idCard")?l.idCard:"---")),N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u8054\u7cfb\u7535\u8bdd\uff1a"),N.a.createElement("span",null,l.hasOwnProperty("phoneNum")?l.phoneNum:"---"))),N.a.createElement(s["a"],{className:g.a.detailTitle},N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u88ab\u8c03\u67e5\u4eba\u57fa\u672c\u60c5\u51b5\uff1a"),N.a.createElement("span",null,l.hasOwnProperty("baseInfo")?l.baseInfo:"---")))),N.a.createElement("div",{className:g.a.detailTitleName},"\u4eba\u5458\u6d3b\u52a8\u4fe1\u606f"),N.a.createElement(r["a"],{style:{marginBottom:20},loading:e},N.a.createElement(s["a"],{className:g.a.detailTitle},N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u4ece\u4f55\u5730\u6765\u70df(\u8fd4\u70df)\uff1a"),N.a.createElement("span",null,t.hasOwnProperty("backFromWhere")?t.backFromWhere:"---")),N.a.createElement(i["a"],{span:6,className:g.a.detailBtns},N.a.createElement("span",null,"\u6765\u70df(\u8fd4\u70df)\u65f6\u95f4\uff1a"),N.a.createElement("span",null,t.hasOwnProperty("backTime")?t.backTime:"---")),N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u6765\u70df(\u8fd4\u70df)\u65b9\u5f0f\uff1a"),N.a.createElement("span",null,t.hasOwnProperty("backType")?t.backType:"---")),N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u822a\u73ed/\u8f66\u6b21/\u8239\u6b21/\u8f66\u724c\u53f7\uff1a"),N.a.createElement("span",null,t.hasOwnProperty("carNum")?t.carNum:"---"))),N.a.createElement(s["a"],{className:g.a.detailTitle},N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u671f\u95f4\u8fd8\u5230\u8fc7\u54ea\u4e9b\u57ce\u5e02\uff1a"),N.a.createElement("span",null,t.hasOwnProperty("wayCity")?t.wayCity:"---")))),N.a.createElement("div",{className:g.a.detailTitleName},"\u4eba\u5458\u63a5\u89e6\u4fe1\u606f"),N.a.createElement(r["a"],{style:{marginBottom:20},loading:e},N.a.createElement(s["a"],{className:g.a.detailTitle},N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u662f\u5426\u4e0e\u786e\u8bca\u3001\u7591\u4f3c\u75c5\u4f8b\u5bc6\u5207\u63a5\u89e6\u8fc7\uff1a"),N.a.createElement("span",null,c.hasOwnProperty("isTouchSuspect")?c.isTouchSuspect:"---"))),N.a.createElement(s["a"],{className:g.a.detailTitle},N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u63a5\u89e6\u8005\u59d3\u540d\uff1a"),N.a.createElement("span",null,c.hasOwnProperty("suspectName")?c.suspectName:"---")),N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u63a5\u89e6\u8005\u8eab\u4efd\u8bc1\u53f7\uff1a"),N.a.createElement("span",null,c.hasOwnProperty("suspectIdCard")?c.suspectIdCard:"---")),N.a.createElement(i["a"],{span:6,className:g.a.detailBtns},N.a.createElement("span",null,"\u63a5\u89e6\u65f6\u95f4\uff1a"),N.a.createElement("span",null,c.hasOwnProperty("suspectTime")?c.suspectTime:"---")),N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u63a5\u89e6\u5730\u70b9\uff1a"),N.a.createElement("span",null,c.hasOwnProperty("suspectPoint")?c.suspectPoint:"---"))),N.a.createElement(s["a"],{className:g.a.detailTitle},N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u662f\u5426\u4e0e\u5bc6\u5207\u63a5\u89e6\u8005\u5171\u540c\u751f\u6d3b\u3001\u5de5\u4f5c\u3001\u5b66\u4e60\u3001\u805a\u4f1a\u8fc7\uff1a"),N.a.createElement("span",null,c.hasOwnProperty("isTouchIntimate")?c.isTouchIntimate:"---"))),N.a.createElement(s["a"],{className:g.a.detailTitle},N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u63a5\u89e6\u8005\u59d3\u540d\uff1a"),N.a.createElement("span",null,c.hasOwnProperty("intimateName")?c.intimateName:"---")),N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u63a5\u89e6\u8005\u8eab\u4efd\u8bc1\u53f7\uff1a"),N.a.createElement("span",null,c.hasOwnProperty("intimateIdCard")?c.intimateIdCard:"---")),N.a.createElement(i["a"],{span:6,className:g.a.detailBtns},N.a.createElement("span",null,"\u63a5\u89e6\u65f6\u95f4\uff1a"),N.a.createElement("span",null,c.hasOwnProperty("intimateTime")?c.intimateTime:"---")),N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u63a5\u89e6\u5730\u70b9\uff1a"),N.a.createElement("span",null,c.hasOwnProperty("intimatePoint")?c.intimatePoint:"---"))),N.a.createElement(s["a"],{className:g.a.detailTitle},N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u662f\u5426\u4e0e\u91cd\u70b9\u75ab\u533a\u4eba\u5458\u63a5\u89e6\u8fc7\uff1a"),N.a.createElement("span",null,c.hasOwnProperty("isTouchInfector")?c.isTouchInfector:"---"))),N.a.createElement(s["a"],{className:g.a.detailTitle},N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u63a5\u89e6\u8005\u59d3\u540d\uff1a"),N.a.createElement("span",null,c.hasOwnProperty("infectorName")?c.infectorName:"---")),N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u63a5\u89e6\u8005\u8eab\u4efd\u8bc1\u53f7\uff1a"),N.a.createElement("span",null,c.hasOwnProperty("infectorIdCard")?c.infectorIdCard:"---")),N.a.createElement(i["a"],{span:6,className:g.a.detailBtns},N.a.createElement("span",null,"\u63a5\u89e6\u65f6\u95f4\uff1a"),N.a.createElement("span",null,c.hasOwnProperty("infectorTime")?c.infectorTime:"---")),N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u63a5\u89e6\u5730\u70b9\uff1a"),N.a.createElement("span",null,c.hasOwnProperty("infectorPoint")?c.infectorPoint:"---")))),N.a.createElement("div",{className:g.a.detailTitleName},"\u4eba\u5458\u5f53\u524d\u72b6\u6001"),N.a.createElement(r["a"],{style:{marginBottom:20},loading:e},N.a.createElement(s["a"],{className:g.a.detailTitle},N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u8eab\u4f53\u72b6\u51b5\uff1a"),N.a.createElement("span",null,n.hasOwnProperty("bodyCondition")?n.bodyCondition:"---")),N.a.createElement(i["a"],{span:6,className:g.a.detailBtns},N.a.createElement("span",null,"\u662f\u5426\u5c31\u533b\uff1a"),N.a.createElement("span",null,n.hasOwnProperty("hasSeek")?n.hasSeek:"---")),N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u5c31\u533b\u533b\u9662\uff1a"),N.a.createElement("span",null,n.hasOwnProperty("seekHospital")?n.seekHospital:"---")),N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u5c31\u533b\u65f6\u95f4\uff1a"),N.a.createElement("span",null,n.hasOwnProperty("seekTime")?n.seekTime:"---"))),N.a.createElement(s["a"],{className:g.a.detailTitle},N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u662f\u5426\u91c7\u53d6\u8fc7\u9632\u62a4\u63aa\u65bd\uff1a"),N.a.createElement("span",null,n.hasOwnProperty("controlMeasures")?n.controlMeasures:"---")),N.a.createElement(i["a"],{span:12,className:g.a.detailBtns},N.a.createElement("span",null,"\u4ec0\u4e48\u65f6\u95f4\u5185\u91c7\u53d6\u7684\u9632\u62a4\u63aa\u65bd\uff1a"),N.a.createElement("span",null,n.hasOwnProperty("controlTime")?n.controlTime:"---")),N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u4e0b\u6b65\u62df\u91c7\u53d6\u63aa\u65bd\uff1a"),N.a.createElement("span",null,n.hasOwnProperty("nextMeasures")?n.nextMeasures:"---"))),N.a.createElement(s["a"],{className:g.a.detailTitle},N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u586b\u62a5\u65e5\u671f\uff1a"),N.a.createElement("span",null,n.hasOwnProperty("createTime")?n.createTime:"---")),N.a.createElement(i["a"],{span:6},N.a.createElement("span",null,"\u6478\u6392\u4eba\uff1a"),N.a.createElement("span",null,n.hasOwnProperty("fillUserName")?n.fillUserName:"---")))))))}}]),a}(y["PureComponent"]))||l);a["default"]=k},C8Ie:function(e,a,t){e.exports={missionDetailWrapper:"antd-pro-pages-add-info-add-info-detail-missionDetailWrapper",loading:"antd-pro-pages-add-info-add-info-detail-loading",missionStep:"antd-pro-pages-add-info-add-info-detail-missionStep",detailTitle:"antd-pro-pages-add-info-add-info-detail-detailTitle",detailSourceName:"antd-pro-pages-add-info-add-info-detail-detailSourceName",detailSourceBtns:"antd-pro-pages-add-info-add-info-detail-detailSourceBtns",detailBtns:"antd-pro-pages-add-info-add-info-detail-detailBtns",destinationName:"antd-pro-pages-add-info-add-info-detail-destinationName",salesExtra:"antd-pro-pages-add-info-add-info-detail-salesExtra",currentDate:"antd-pro-pages-add-info-add-info-detail-currentDate",detailItem:"antd-pro-pages-add-info-add-info-detail-detailItem",tableContainer:"antd-pro-pages-add-info-add-info-detail-tableContainer",detailLine:"antd-pro-pages-add-info-add-info-detail-detailLine",detailTable:"antd-pro-pages-add-info-add-info-detail-detailTable",detailTitleName:"antd-pro-pages-add-info-add-info-detail-detailTitleName",contentLink:"antd-pro-pages-add-info-add-info-detail-contentLink",extraImg:"antd-pro-pages-add-info-add-info-detail-extraImg",pageHeaderContent:"antd-pro-pages-add-info-add-info-detail-pageHeaderContent"}}}]);