import React, { Component } from 'react';
import $ from 'jquery'
import { HashLink as Link } from 'react-router-hash-link';

import Mycard from "../components/Mycard"
import temp from "../data/data"
import defaultimg from "../img/member_picture/default.png"

let data = temp.members

class Member extends Component {
  componentDidMount(){
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(window).scrollTop() > 10) { 
          $('.back-to-top').css('opacity','.5');
      } else {
          $('.back-to-top').css('opacity','0');
      }
    });
  }

  create_members_card(id){
      const cards = data.filter(item => item.identity === id).map(member => (
        <div className="col-lg-4 col-sm-6">
          <Mycard image={member.image || defaultimg} name={member.name || 'N/A'} text={member.text || 'N/A'}/>  
          <br/> 
        </div>               
      ))
    return cards
  }

  render(){
    return (
      <div className="main-container">
        <div id='test' className='index-container'>
            <div className="text-justify yahei">
              <h1>實驗室成員</h1>
              <hr/>
            </div>
            <div className='row'>
              <aside className="col-lg-2 mb-5">
                <ul className="sidebar">
                  <li><Link smooth to="/member#1">無線電波</Link></li>
                  <li><Link smooth to="/member#2">物聯網通信與系統</Link></li>
                  <li><Link smooth to="/member#3">資安</Link></li>
                  <li><Link smooth to="/member#4">物聯網硬體</Link></li>
                  <li><Link smooth to="/member#5">物聯網應用</Link></li>
                </ul>
              </aside>     
              <div className="col-lg-10">
                <div id="1" className="mb-4">
                  <h2 className=" text-justify yahei ">無線電波</h2>
                  <div className="row">
                    {this.create_members_card('RV')}
                  </div>
                </div>
                <div id="2" className="mb-4">
                  <h2 className="text-justify yahei">物聯網通信與系統</h2>
                  <div className="row">
                    {this.create_members_card('IoTS')}
                  </div>
                </div> 
                <div id="3" className="mb-4">
                  <h2 className="text-justify yahei">資安</h2> 
                  <div className="row">
                    {this.create_members_card('IS')}
                  </div>
                </div>
                <div id="4" className="mb-4">
                  <h2 className="text-justify yahei">物聯網硬體</h2> 
                  <div className="row">
                    {this.create_members_card('IoTH')}
                  </div>
                </div>
                <div id="5" className="mb-4">
                  <h2 className="text-justify yahei">物聯網應用</h2> 
                  <div className="row">
                    {this.create_members_card('IoTA')}
                  </div>
                </div>
              </div>         
            </div>                 
        </div>
      </div>
    );
  }
}
export default Member;