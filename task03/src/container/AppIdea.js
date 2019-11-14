import React, { Component } from 'react'
import { NavBar, Icon,Tabs,Grid} from 'antd-mobile';
const data1 = Array.from([
    {id:"1",content:'橙色律动'},
    {id:"2",content:'儿童房'},
    {id:"3",content:'翻滚吧地毯君'},
    {id:"4",content:'角落里的遐想'},
    {id:"1",content:'橙色律动'},
    {id:"1",content:'橙色律动'},
]).map((index) => ({
    icon: `./images/idea${index.id}.png`,
    content:index.content,
    head:`./images/head${index.id}.png`,
  })); 
  const tabs = [
    { title: '推荐'},
    { title: '冬季'},
    { title: '宜家'},
    { title: '小清新'},
    { title: '小户型'},
    { title: '个性色彩'},
  ];
export default class AppIdea extends Component {
    render() {
        return (
            <div>
               <NavBar style={{'background-color':'#3fcccb',color:"#fff"}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                    >灵感
                </NavBar>
                <Tabs tabs={tabs}
                    initialPage={0}
                    tabBarInactiveTextColor={"#232323"}
                    tabBarActiveTextColor={"#3fcccb"}
                    tabBarUnderlineColor={"#3fcccb"}
                >
                </Tabs>
                <Grid data={data1}
                    columnNum={2}
                    renderItem={dataItem => (
                        <div style={{ padding: '12.5px',borderRedius:"12px",position:"relative"}}>
                        <img src={dataItem.icon} style={{width: '80%', height: '80%'}} alt="" />
                        <div style={{ color: '#888', fontSize: '10px',float:"left"}} >
                            <img src={dataItem.head } style={{width: '15%', height: '15%',position:'absolute',left: '15%',top: "90%"}} alt="" />
                            <span style={{position:'absolute',left: '35%',top: "98%"}}>{dataItem.content}</span>
                            <span style={{color: 'red',position:'absolute',left: '70%',top: "97%"}}className="iconfont icon-aixin"></span>
                        </div>
                        </div>
                    )}  hasLine={false}/>
            </div>
        )
    }
}
