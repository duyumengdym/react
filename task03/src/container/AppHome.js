import React, { Component } from 'react'
import { NavBar, Icon,Card,Carousel,Grid} from 'antd-mobile';
// import { , WingBlank } from 'antd-mobile';
const tabs = [
    { title: '推荐'},
    { title: '家居'},
    { title: '餐厨'},
    { title: '床上用品'}
  ];
  const data1 = Array.from([{id:1,content:"热门品牌"},{id:2,content:"私人搭配师"},{id:3,content:"选购指南"}]).map((index) => ({
    icon: `./images/${index.id}.png`,
    content:index.content
  }));  
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar style={{'background-color':'#3fcccb',color:"#fff"}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                    >住吧家居
                </NavBar>
                <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        {[1,2].map(val => (
                            {val},
                            <img
                                src={`./images/banner${val}.jpg`}
                                alt=""
                                style={{ width: '100%',height:'200px',verticalAlign: 'top'}}
                                onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        ))}
                </Carousel>
                <Grid data={data1}
                    columnNum={3}
                    renderItem={dataItem => (
                        <div style={{position:'relative',}}>
                        <img src={dataItem.icon} style={{ width: '80%', height: '80%',position:"relative"}} alt="" />
                            <div id="bg" style=
                            {{position:"absolute",width: '100%',height: '100%',left:0,top: '50%',textAlign:"center"}}>
                                <span style={{color:"#ffffff"}}>{dataItem.content}</span>
                            </div>
                        </div>
                    )}
                    hasLine={false} itemStyle={{backgroundColor:'#f5f5f9'}}/>

                <Card full>
                    <Card.Body style={{position:'relative',padding:0,margin:0}} >
                        <p style={{fontSize:'17px'}}><span style={{color:'#3fcccb',marginRight:"10px"}}><b>|</b></span>热门推荐</p>
                        <img src={`./images/tuijian.jpg`} style={{ width: '100%',height:'200px',verticalAlign: 'top'}}/>
                        <p style={{position:'absolute', bottom: 0,color:"#ffffff",width:"100%",textAlign:"center" }}>什么是英伦装修风格 英伦风家装 英伦风格装修效果图</p>
                    </Card.Body>
                    {/* <Card.Footer content="什么是英伦装修风格 英伦风家装 英伦风格装修效果图"style={{position:'absolute', bottom: 0,color:"#ffffff"}} /> */}
                </Card>
            </div>
        )
    }
}
