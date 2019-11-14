import React, { Component } from 'react'
import { NavBar,Carousel,Grid,SearchBar} from 'antd-mobile';
const data = Array.from([
    {id:1,content:"桌"},
    {id:2,content:"床"},
    {id:3,content:"椅"},
    {id:4,content:"几"},
    {id:5,content:"柜"},
    {id:6,content:"书架"},
    {id:7,content:"沙发"},
    {id:8,content:"家居饰品"},
    {id:9,content:"户外家具"},
    {id:10,content:"全部分类"}
]).map((index) => ({
    icon: `./images/shop${index.id}.jpg`,
    content:index.content
  }));
  const data1 = Array.from([
    {id:1,content:"Too Art Studio 欧式风格精细...",price:"￥39.9"},
    {id:2,content:"顺顺工艺欧式风格塑料外框黑...",price:"￥83.99"}
]).map((index) => ({
    icon: `./images/good${index.id}.png`,
    content:index.content,
    price:index.price
  }));
export default class AppShop extends Component {
    render() {
        return (
            <div style={{position:'relative'}}>
                <NavBar style={{'background-color':'#3fcccb',color:"#fff"}}
                    rightContent={[
                        <i className="iconfont icon-xiazai3"></i>,
                    ]}
                    >商城
                </NavBar>
                {/* <div style={{position:'absolute',top:'7.5%',width:'100%',backgroundColor:'#fff',background:"rgba(36,41,44,0.5)",height:'44px',color:'#fff'}}>
                    <i className="iconfont icon-home-copy" style={{position:"absolute",top:"50%",width:'6%',height:'70%'}}></i>
                    <SearchBar placeholder="输入关键字搜索" style={{position:"absolute",width:'100%',left:"7%",background:"rgba(36,41,44,0.5)",textAlign: "left",zIndex:'0'}}/>
                </div> */}
                <SearchBar placeholder="输入关键字搜索" style={{position:"absolute",width:'100%',left:"0%",background:"rgba(36,41,44,0.5)",textAlign: "left",zIndex:'0'}}/>
                <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        style={{zIndex:'-1'}}
                >
                        {[1,2].map(val => (
                            <img
                                src={`./images/store${val}.png`}
                                alt=""
                                style={{ width: '100%',height:'200px',verticalAlign: 'top',"z-index":""}}
                                onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        )
                        )}
                </Carousel>
                
                <Grid data={data}
                    columnNum={5}
                    renderItem={dataItem => (
                        <div>
                        <img src={dataItem.icon} style={{ width: '50%', height: '50%' }} alt="" />
                        <div style={{ color: '#888', fontSize: '14px' }}>
                        <span>{dataItem.content}</span>
                        </div>
                        </div>
                    )}
                    hasLine={false}/>
                <Grid data={data1}
                    columnNum={2}
                    renderItem={dataItem => (
                        <div style={{padding:'12.5px'}}>
                        <img src={dataItem.icon} style={{ width: '100%', height: '100%' }} alt="" />
                        <div style={{backgroundColor:"#f5f5f9",textAlign:'left'}}>
                            <h4 style={{color: '#888',fontSize:'5px'}}>{dataItem.content}</h4>
                            <h5 style={{color: '#000'}}>{dataItem.price}</h5>
                        </div>
                        </div>
                    )}
                    hasLine={false} itemStyle={{backgroundColor:'#f5f5f9'}}/>
            </div>
        )
    }
}
