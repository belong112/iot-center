import React, { Component } from 'react';
import $ from 'jquery'
import Mycard from "../components/Mycard"
import data from "../data/data.js"
console.log(data)
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
            <div>
              <div className="buttons small-container">
                <a href="#phd"><button className="btn btn-outline-primary">博士生</button></a>
                <a href="#master"><button className="btn btn-outline-primary">碩士生</button></a>
                <a href="#other"><button className="btn btn-outline-primary">其他</button></a>
              </div>
            </div>
            <div id="phd" className="small-container">
              <h2 className=" txtjustify yahei ">博士生</h2>
              <div className="row">
                {phdmembers}
              </div>
            </div>
            <div id="master" className="small-container">
              <h2 className="txtjustify yahei">碩士生</h2>
              <div className="row">
                {mastermembers}
              </div>
            </div> 
            <div id="other" className="small-container">
              <h2 className="txtjustify yahei">其他</h2> 
              <div className="row">
                {othermembers}
              </div>
            </div>                   
        </div>
      </div>
    );
  }
}
export default Member;