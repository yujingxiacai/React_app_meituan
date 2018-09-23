import React, { Component } from 'react';
import './../../assets/css/App.css';
import './../../assets/js/rem.js';
import Header from './Header';
import Banner from './../component/Banner';
import Detialtitle from './../component/Detialtitle';
import 'antd-mobile/dist/antd-mobile.css'; 
import { WingBlank, WhiteSpace } from 'antd-mobile';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
        <Detialtitle/>
      </div>
    );
  }
}

export default App;
