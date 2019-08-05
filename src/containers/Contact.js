import React, { Component } from 'react';
import $ from 'jquery'

class Contact extends Component {
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
  render() {
    return (
      <div className="main-container">
        <div className='index-container'>
          <div className="txtjustify yahei">
            <h1>聯絡我們</h1>
            <hr/>
          </div>
          <div className="small-container">
            <p>BL-608<br/>Department of Electrical Engineering<br/>National Taiwan University<br/>Taipei 106, Taiwan</p>               
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1114.3885386779625!2d121.54183521488379!3d25.01933960937919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa267158ff23%3A0x280b7e1a98cc05ca!2z6Ie654Gj5aSn5a245Y2a55CG6aSo!5e0!3m2!1szh-TW!2stw!4v1563729498048!5m2!1szh-TW!2stw" width="600" height="450" frameborder="0" allowfullscreen></iframe>               
          </div>
        </div>       
      </div>
    );
  }
}
export default Contact;