import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';


export default class Header extends Component {
  render() {
    return (
      <div>
    <NavBar
      mode="dark"
      icon={<Icon type="left" />}
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >美团</NavBar>
  </div>
    )
  }
}


