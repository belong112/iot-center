import React, { Component } from 'react';
import $ from 'jquery'
import Mycard from "../components/Mycard"
import temp from "../data/data"
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

  membersid(id){
      const phdmembers = data.filter(item => item.identity === id).map(member => (
        <div className="col-lg-3 col-sm-6">
          <Mycard image={member.image} name={member.name} text={member.text}/>  
          <br/> 
        </div>               
      )
      )
    return phdmembers
  }


  render(){
    const phdmembers = data.filter(item => item.identity === "phd").map(member => (
        <div className="col-lg-3 col-sm-6">
          <Mycard image={member.image} name={member.name} text={member.text}/>  
          <br/> 
        </div>               
      )
    );
    const mastermembers = data.filter(item => item.identity === "master").map(member => (
        <div className="col-lg-3 col-sm-6">
          <Mycard image={member.image} name={member.name} text={member.text}/>  
          <br/> 
        </div>               
      )
    );
    const othermembers = data.filter(item => item.identity === "other").map(member => (
        <div className="col-lg-3 col-sm-6">
          <Mycard image={member.image} name={member.name} text={member.text}/>  
          <br/> 
        </div>               
      )
    );
    return (
      <div className="main-container">
        <div id='test' className='index-container'>
            <div className="txtjustify yahei">
              <h1>實驗室成員</h1>
              <hr/>
            </div>
            <div className='row'>
              <div className="col-lg-2 big-container">
                <ul className="sidebar">
                  <li><a href="#1">電波</a></li>
                  <li><a href="#2">大數據</a></li>
                  <li><a href="#3">通訊</a></li>
                </ul>
              </div>     
              <div className="col-lg-10">
                <div id="1" className="small-container">
                  <h2 className=" txtjustify yahei ">電波</h2>
                  <div className="row">
                    {phdmembers}
                  </div>
                </div>
                <div id="2" className="small-container">
                  <h2 className="txtjustify yahei">大數據</h2>
                  <div className="row">
                    {mastermembers}
                  </div>
                </div> 
                <div id="3" className="small-container">
                  <h2 className="txtjustify yahei">通訊</h2> 
                  <div className="row">
                    {othermembers}
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