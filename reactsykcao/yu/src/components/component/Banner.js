import React, { Component } from 'react'
import { Grid } from 'antd-mobile';

const data = [
    {
        icon: require(`./../../assets/img/dianying.png`),
        text: '电影',
    },
    {
        icon: require(`./../../assets/img/jipiao.png`),
        text: '机票',
    },
    {
        icon: require(`./../../assets/img/ktv.png`),
        text: 'Ktv',
    },
    {
        icon: require(`./../../assets/img/meishi.png`),
        text: '美食',
    },
    {
        icon: require(`./../../assets/img/yule.png`),
        text: '娱乐',
    },
    {
        icon: require(`./../../assets/img/waimai.png`),
        text: '外卖',
    },
    {
        icon: require(`./../../assets/img/dianying.png`),
        text: '1',
    },
    {
        icon: require(`./../../assets/img/dianying.png`),
        text: '1',
    },
    {
        icon: require(`./../../assets/img/dianying.png`),
        text: '1',
    },
    {
        icon: require(`./../../assets/img/dianying.png`),
        text: '1',
    },
];
  
  const data1 = Array.from(new Array(9)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
  }));
  const GridExample = () => (
    <div>
        {/* <div className="sub-title">Carousel</div> */}
        <Grid hasLine={false} data={data} isCarousel onClick={_el => console.log(_el)} itemStyle={{ height: '2rem',   width: '1rem' ,background: 'rgba(0,0,0,.05)' }} />
  </div>
);
export default class Banner extends Component {
   
  render() {
    return (
        <GridExample />
    );
  }
}
