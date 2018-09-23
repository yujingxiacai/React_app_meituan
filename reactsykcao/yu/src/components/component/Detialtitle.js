import React, { Component } from 'react'
import { WhiteSpace } from 'antd-mobile';
import './../../assets/css/detialtitle.css'
export default class Detialtitle extends Component {
    constructor(props){
        super(props);
        this.state={
          dataDe:[],
        }
      }
      componentDidMount(){
        var myRequest = new Request('http://www.xiechenxi.cn/');
        fetch(myRequest).then((response)=>{
            console.log(response);
            return response.json();
          }).then((response)=> {
            this.setState({
                dataDe:response,
            })
          });
      }
     
  render() {
    let list=this.state.dataDe.map((item,index)=>{

        return(
        <div key={index}>
        <WhiteSpace size="lg" />
        <div className="detial-container"  onClick={()=>{
            console.log(this.props+"我这边准备好接受router跳转到详细界面了");
        }}>
            <div className="imgs" style={{background:`URL(${item.img}) no-repeat center/cover`}}></div>
            <div className="detialtitle">
                <p>鲜芋仙</p>
                <p>[11店通用]10元代金卷1份</p>
                <div className="detialtitle-bottom"><span>8元</span><span>门市价6元</span><div className="detialtitle-bottom-left">已售0</div></div>
            </div>
        </div>
        <WhiteSpace size="lg" />
        </div>
        )
    })
    return (
        <div className="detial">
            <h3>猜你喜欢</h3>
        
            {/* <div className="detial-container">
                
            <div className="imgs"><img src={require(`./../../assets/img/xianyuxian.jpg`)}/></div>
            <div className="detialtitle">
                <p>鲜芋仙</p>
                <p>[11店通用]10元代金卷1份</p>
                <div className="detialtitle-bottom"><span>8元</span><span>门市价6元</span><div className="detialtitle-bottom-left">已售0</div></div>
            </div>
            </div> */}  
            {list}
        </div>
      
    )
  }
}
