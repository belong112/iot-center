import React, { Component } from 'react';
import { NavLink } from "react-router-dom" 
import $ from "jquery"

class About extends Component {
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
    return(
      <div className="main-container">           
            <div className='index-container'>
              <div className="col-lg-12 text-justify yahei">
                <h1>關於我們</h1>
                <hr/>
              </div>
              <div className="p-2 row">
                <aside className="d-none col-lg-2 aside">
                  <ul className="sidebar">
                    <li><NavLink to="/about">計畫緣起</NavLink></li>  
                    <li><NavLink to="/about">諮詢委員</NavLink></li>            
                  </ul>
                </aside>
                <div className="mb-3 col-lg-10 m-auto">
                  <div className="mb-4">
                    <h3>計畫緣起</h3>
                    <p>「電信研究中心」於81年3月成立，並於106年更名為「物聯網研究中心」（以下簡稱本中心）。本中心整合國立臺灣大學電機資訊學院相關系所，為配合國家經濟發展及未來著眼跨領域研究，以期達成從感測器、通訊網路、應用服務至關鍵性軟硬體平台之深耕研究，並拓展與物聯網應用與系統相關領域專家之合作。 中心成立任務為：</p>
                    <p>一、整合相關系所在物聯網方面之研究能量與設備，從事跨領域研究交流，拓展前瞻性及實用性物聯網</p>
                    <p>二、培育物聯網相關領域人才，加速推動物聯網系統應用之研究</p>
                  </div>
                  <div className="mb-4">
                    <h3>諮詢委員</h3>
                    <p>to bring a better life to the citizens</p>
                    <p>five miuntes later</p>
                  </div>
                </div>
              </div>  
            </div>          
        </div>
    );
  }
}
export default About;