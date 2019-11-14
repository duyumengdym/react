import { TabBar } from 'antd-mobile';
import React, { Component } from 'react'
import AppHome from './AppHome';
import AppMy from './AppMy';
import AppIdea from './AppIdea';
import AppShop from './AppShop';
export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  render() {
    return (
      <div style={{position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          // unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<i className="iconfont icon-home-copy"></i>}
            selectedIcon={<i style={{fontsize:22,lineHeight:'22px'}} className="iconfont icon-home"></i>
            }
            selected={this.state.selectedTab === 'home'}//判断
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
            <AppHome/>
          </TabBar.Item>
          <TabBar.Item
           icon={<i className="iconfont icon-dengpao"></i>}
           selectedIcon={<i style={{fontsize:22,lineHeight:'22px'}} className="iconfont icon-dengpao-copy"></i>
           }
            title="灵感"
            key="idea"
            selected={this.state.selectedTab === 'idea'}
            onPress={() => {
              this.setState({
                selectedTab: 'idea',
              });
            }}
          >
          <AppIdea/>
          </TabBar.Item>
          <TabBar.Item
             icon={<i className="iconfont icon-shangcheng"></i>}
             selectedIcon={<i style={{fontsize:22,lineHeight:'22px'}} className="iconfont icon-shangcheng-copy"></i>
             }
            title="商城"
            key="shop"
            selected={this.state.selectedTab === 'shop'}
            onPress={() => {
              this.setState({
                selectedTab: 'shop',
              });
            }}
          >
            <AppShop/>
          </TabBar.Item>
          <TabBar.Item
           icon={<i className="iconfont icon-wode"></i>}
           selectedIcon={<i style={{fontsize:22,lineHeight:'22px'}} className="iconfont icon-wode-copy"></i>
           }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'mine'}
            onPress={() => {
              this.setState({
                selectedTab: 'mine',
              });
            }}
          >
            <AppMy/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}