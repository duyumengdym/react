import React, { Component } from 'react'
import { NavBar, Icon, Card,List  } from 'antd-mobile';
const Item = List.Item;
export default class AppMy extends Component {
    render() {
        return (
            <div>
                <NavBar style={{'background-color':'#3fcccb',color:"#fff"}}
                    // onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                    >我的
                </NavBar>
                <Card full>
                    <Card.Body style={{padding:0,margin:0}}>
                    <img
                        src={`images/banner2.jpg`}
                        alt=""
                        style={{ width: '100%',height:'200px',verticalAlign: 'top',padding:'0'}}
                        onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                        }}
                            />
                    </Card.Body>
                </Card>
                <List className="my-list">
                <Item
                    // arrow="horizontal"
                    thumb="/images/miao.png"
                    multipleLine
                />
                </List>
            </div>
        )
    }
}
