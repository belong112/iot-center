import React, { Component } from 'react';
import $ from 'jquery'
import temp from "../data/data"
import Mynews from "../components/Mynews"
import test from "../img/4.jpg"
import rick from "../img/6.jpg"
let data_post = temp.posts
let data_news = temp.news

class Home extends Component {
    componentDidMount() {
        $(window).scroll(function() {
            // checks if window is scrolled more than 500px, adds/removes solid class
            if ($(window).scrollTop() > 10) {
                $('.back-to-top').css('opacity', '.5');
            } else {
                $('.back-to-top').css('opacity', '0');
            }
        });
    }
    render() {
      const lists = data_post.map(item=>{
        return <li>({item.date}) {item.title}</li>
      })
      return (
          <div className="main-container">
            <div className="nav-bot-container"> 
                <h3>LABORATORY INFORMATION DECISION SYSTEMS</h3> 
                <a target="_blank" rel="noopener noreferrer" href="https://www.ntu.edu.tw/">
                  <h5>National Taiwan University</h5>
                </a>
            </div>
            <div className='index-container'>
              <div className="mb-5 row">               
                <div className="col-lg">
                  <div className="p-1 text-center title-container">
                    <h2 className="yahei"><i className="fas fa-newspaper"></i> 最新消息</h2>  
                  </div>
                  <div className="row">
                    <Mynews image={rick} text={data_news[0].text} title={data_news[0].title} />
                    <Mynews image={test} text={data_news[1].text} title={data_news[1].title}/>
                  </div>            
                </div>
              </div>  
              <div className="mb-3 row">                
                <div className="col-lg">
                  <div className="p-1 text-center title-container">
                    <h2 className="yahei"><i className="fas fa-tv"></i> 相關報導</h2>
                  </div>
                  <p className="p-container">&emsp;&emsp;「電信研究中心」於81年3月成立，並於106年更名為「物聯網研究中心」（以下簡稱本中心）。本中心整合國立臺灣大學電機資訊學院相關系所，為配合國家經濟發展及未來著眼跨領域研究，以期達成從感測器、通訊網路、應用服務至關鍵性軟硬體平台之深耕研究，並拓展與物聯網應用與系統相關領域專家之合作。</p>
                </div>
                <div className="col-lg">
                  <div className='p-1 text-center title-container'>
                    <h2 className="yahei"><i className="fas fa-bullhorn"></i> 公告</h2>
                  </div> 
                  <div className="p-container">   
                    <ul>
                      {lists}
                      <li>(2019/10/2) test a big apple</li>
                      <li>(2019-08-05) 【2020聯詠科技研發替代役/預聘 招募計畫開跑囉! 】</li>
                      <li>(2019-08-05) 108電資學院TA研習公告</li>
                      <li>(2019-08-02) 電子所108學年度產業贊助博士級人才培育獎學金申請公告</li>                      
                    </ul>
                  </div>
                </div>
                <div className="col-lg">
                  <div className="yahei p-1 text-center title-container">
                    <h2><i className="far fa-copy"></i> 發布論文</h2>
                  </div>
                  <div className="p-container">
                    <ul>
                      <li>5g edge computing</li>
                      <li>VR/AR</li>
                      <li>Blockchain Trust framework for IoT and for 5G/6G</li>
                    </ul>                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default Home;