import React, { Component } from 'react';
import $ from 'jquery'
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
            <div className="txtjustify yahei">
              <h1>實驗室成員</h1>
              <hr/>
            </div>
            <div className='row'>
              <aside className="col-lg-2 big-container">
                <ul className="sidebar">
                  <li><a href="#1">電波</a></li>
                  <li><a href="#2">大數據</a></li>
                  <li><a href="#3">通訊</a></li>
                </ul>
              </aside>     
              <div className="col-lg-10">
                <div id="1" className="small-container">
                  <h2 className=" txtjustify yahei ">電波</h2>
                  <div className="row">
                    {this.create_members_card('phd')}
                  </div>
                </div>
                <div id="2" className="small-container">
                  <h2 className="txtjustify yahei">大數據</h2>
                  <div className="row">
                    {this.create_members_card('master')}
                  </div>
                </div> 
                <div id="3" className="small-container">
                  <h2 className="txtjustify yahei">通訊</h2> 
                  <div className="row">
                    {this.create_members_card('other')}
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