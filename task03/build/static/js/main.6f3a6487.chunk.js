(this.webpackJsonpzhuba=this.webpackJsonpzhuba||[]).push([[0],{158:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(9),o=n.n(i),l=n(12),r=n(13),s=n(16),m=n(14),d=n(17),u=n(10),f=Array.from([{id:1,content:"\u70ed\u95e8\u54c1\u724c"},{id:2,content:"\u79c1\u4eba\u642d\u914d\u5e08"},{id:3,content:"\u9009\u8d2d\u6307\u5357"}]).map((function(e){return{icon:"./images/".concat(e.id,".png"),content:e.content}})),h=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(u.f,{style:{"background-color":"#3fcccb",color:"#fff"},rightContent:[c.a.createElement(u.d,{key:"0",type:"search",style:{marginRight:"16px"}})]},"\u4f4f\u5427\u5bb6\u5c45"),c.a.createElement(u.b,{autoplay:!0,infinite:!0,beforeChange:function(e,t){return console.log("slide from ".concat(e," to ").concat(t))},afterChange:function(e){return console.log("slide to",e)}},[1,2].map((function(t){return c.a.createElement("img",{src:"./images/banner".concat(t,".jpg"),alt:"",style:{width:"100%",height:"200px",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}})}))),c.a.createElement(u.c,{data:f,columnNum:3,renderItem:function(e){return c.a.createElement("div",{style:{position:"relative"}},c.a.createElement("img",{src:e.icon,style:{width:"80%",height:"80%",position:"relative"},alt:""}),c.a.createElement("div",{id:"bg",style:{position:"absolute",backgroundColor:"rgba(245,245,249,0.1)",width:"100%",height:"100%",left:0,top:"50%",textAlign:"center"}},c.a.createElement("span",{style:{color:"#ffffff"}},e.content)))},hasLine:!1,itemStyle:{backgroundColor:"#f5f5f9"}}),c.a.createElement(u.a,{full:!0},c.a.createElement(u.a.Body,{style:{position:"relative",padding:0,margin:0}},c.a.createElement("p",{style:{fontSize:"17px"}},c.a.createElement("span",{style:{color:"#3fcccb",marginRight:"10px"}},c.a.createElement("b",null,"|")),"\u70ed\u95e8\u63a8\u8350"),c.a.createElement("img",{src:"./images/tuijian.jpg",style:{width:"100%",height:"200px",verticalAlign:"top"}}),c.a.createElement("p",{style:{position:"absolute",bottom:0,color:"#ffffff",width:"100%",textAlign:"center"}},"\u4ec0\u4e48\u662f\u82f1\u4f26\u88c5\u4fee\u98ce\u683c \u82f1\u4f26\u98ce\u5bb6\u88c5 \u82f1\u4f26\u98ce\u683c\u88c5\u4fee\u6548\u679c\u56fe"))))}}]),t}(a.Component),p=u.e.Item,g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(u.f,{style:{"background-color":"#3fcccb",color:"#fff"},rightContent:[c.a.createElement(u.d,{key:"0",type:"search",style:{marginRight:"16px"}})]},"\u6211\u7684"),c.a.createElement(u.a,{full:!0},c.a.createElement(u.a.Body,{style:{padding:0,margin:0}},c.a.createElement("img",{src:"./images/banner2.jpg",alt:"",style:{width:"100%",height:"200px",verticalAlign:"top",padding:"0"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))),c.a.createElement(u.e,{className:"my-list"},c.a.createElement(p,{thumb:"./images/miao.png",multipleLine:!0})))}}]),t}(a.Component),b=Array.from([{id:"1",content:"\u6a59\u8272\u5f8b\u52a8"},{id:"2",content:"\u513f\u7ae5\u623f"},{id:"3",content:"\u7ffb\u6eda\u5427\u5730\u6bef\u541b"},{id:"4",content:"\u89d2\u843d\u91cc\u7684\u9050\u60f3"},{id:"1",content:"\u6a59\u8272\u5f8b\u52a8"},{id:"1",content:"\u6a59\u8272\u5f8b\u52a8"}]).map((function(e){return{icon:"./images/idea".concat(e.id,".png"),content:e.content,head:"./images/head".concat(e.id,".png")}})),E=[{title:"\u63a8\u8350"},{title:"\u51ac\u5b63"},{title:"\u5b9c\u5bb6"},{title:"\u5c0f\u6e05\u65b0"},{title:"\u5c0f\u6237\u578b"},{title:"\u4e2a\u6027\u8272\u5f69"}],y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(u.f,{style:{"background-color":"#3fcccb",color:"#fff"},rightContent:[c.a.createElement(u.d,{key:"0",type:"search",style:{marginRight:"16px"}})]},"\u7075\u611f"),c.a.createElement(u.i,{tabs:E,initialPage:0,tabBarInactiveTextColor:"#232323",tabBarActiveTextColor:"#3fcccb",tabBarUnderlineColor:"#3fcccb"}),c.a.createElement(u.c,{data:b,columnNum:2,renderItem:function(e){return c.a.createElement("div",{style:{padding:"12.5px",borderRedius:"12px",position:"relative"}},c.a.createElement("img",{src:e.icon,style:{width:"80%",height:"80%"},alt:""}),c.a.createElement("div",{style:{color:"#888",fontSize:"10px",float:"left"}},c.a.createElement("img",{src:e.head,style:{width:"15%",height:"15%",position:"absolute",left:"15%",top:"90%"},alt:""}),c.a.createElement("span",{style:{position:"absolute",left:"35%",top:"98%"}},e.content),c.a.createElement("span",{style:{color:"red",position:"absolute",left:"70%",top:"97%"},className:"iconfont icon-aixin"})))},hasLine:!1}))}}]),t}(a.Component),v=Array.from([{id:1,content:"\u684c"},{id:2,content:"\u5e8a"},{id:3,content:"\u6905"},{id:4,content:"\u51e0"},{id:5,content:"\u67dc"},{id:6,content:"\u4e66\u67b6"},{id:7,content:"\u6c99\u53d1"},{id:8,content:"\u5bb6\u5c45\u9970\u54c1"},{id:9,content:"\u6237\u5916\u5bb6\u5177"},{id:10,content:"\u5168\u90e8\u5206\u7c7b"}]).map((function(e){return{icon:"./images/shop".concat(e.id,".jpg"),content:e.content}})),j=Array.from([{id:1,content:"Too Art Studio \u6b27\u5f0f\u98ce\u683c\u7cbe\u7ec6...",price:"\uffe539.9"},{id:2,content:"\u987a\u987a\u5de5\u827a\u6b27\u5f0f\u98ce\u683c\u5851\u6599\u5916\u6846\u9ed1...",price:"\uffe583.99"}]).map((function(e){return{icon:"./images/good".concat(e.id,".png"),content:e.content,price:e.price}})),x=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{style:{position:"relative"}},c.a.createElement(u.f,{style:{"background-color":"#3fcccb",color:"#fff"},rightContent:[c.a.createElement("i",{className:"iconfont icon-xiazai3"})]},"\u5546\u57ce"),c.a.createElement(u.g,{placeholder:"\u8f93\u5165\u5173\u952e\u5b57\u641c\u7d22",style:{position:"absolute",width:"100%",left:"0%",background:"rgba(36,41,44,0.5)",textAlign:"left",zIndex:"0"}}),c.a.createElement(u.b,{autoplay:!0,infinite:!0,beforeChange:function(e,t){return console.log("slide from ".concat(e," to ").concat(t))},afterChange:function(e){return console.log("slide to",e)},style:{zIndex:"-1"}},[1,2].map((function(t){return c.a.createElement("img",{src:"./images/store".concat(t,".png"),alt:"",style:{width:"100%",height:"200px",verticalAlign:"top","z-index":""},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}})}))),c.a.createElement(u.c,{data:v,columnNum:5,renderItem:function(e){return c.a.createElement("div",null,c.a.createElement("img",{src:e.icon,style:{width:"50%",height:"50%"},alt:""}),c.a.createElement("div",{style:{color:"#888",fontSize:"14px"}},c.a.createElement("span",null,e.content)))},hasLine:!1}),c.a.createElement(u.c,{data:j,columnNum:2,renderItem:function(e){return c.a.createElement("div",{style:{padding:"12.5px"}},c.a.createElement("img",{src:e.icon,style:{width:"100%",height:"100%"},alt:""}),c.a.createElement("div",{style:{backgroundColor:"#f5f5f9",textAlign:"left"}},c.a.createElement("h4",{style:{color:"#888",fontSize:"5px"}},e.content),c.a.createElement("h5",{style:{color:"#000"}},e.price)))},hasLine:!1,itemStyle:{backgroundColor:"#f5f5f9"}}))}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={selectedTab:"home"},n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{style:{position:"fixed",height:"100%",width:"100%",top:0}},c.a.createElement(u.h,{tintColor:"#3fcccb",barTintColor:"white"},c.a.createElement(u.h.Item,{title:"\u9996\u9875",key:"Home",icon:c.a.createElement("i",{className:"iconfont icon-home-copy"}),selectedIcon:c.a.createElement("i",{style:{fontsize:22,lineHeight:"22px"},className:"iconfont icon-home"}),selected:"home"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"home"})}},c.a.createElement(h,null)),c.a.createElement(u.h.Item,{icon:c.a.createElement("i",{className:"iconfont icon-dengpao"}),selectedIcon:c.a.createElement("i",{style:{fontsize:22,lineHeight:"22px"},className:"iconfont icon-dengpao-copy"}),title:"\u7075\u611f",key:"idea",selected:"idea"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"idea"})}},c.a.createElement(y,null)),c.a.createElement(u.h.Item,{icon:c.a.createElement("i",{className:"iconfont icon-shangcheng"}),selectedIcon:c.a.createElement("i",{style:{fontsize:22,lineHeight:"22px"},className:"iconfont icon-shangcheng-copy"}),title:"\u5546\u57ce",key:"shop",selected:"shop"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"shop"})}},c.a.createElement(x,null)),c.a.createElement(u.h.Item,{icon:c.a.createElement("i",{className:"iconfont icon-wode"}),selectedIcon:c.a.createElement("i",{style:{fontsize:22,lineHeight:"22px"},className:"iconfont icon-wode-copy"}),title:"\u6211\u7684",key:"my",selected:"mine"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"mine"})}},c.a.createElement(g,null))))}}]),t}(c.a.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(O,null))}}]),t}(a.Component);n(157);o.a.render(c.a.createElement(w,null),document.getElementById("root"))},82:function(e,t,n){e.exports=n(158)}},[[82,1,2]]]);
//# sourceMappingURL=main.6f3a6487.chunk.js.map