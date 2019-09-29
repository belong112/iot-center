import React, { Component } from 'react';
import $ from 'jquery'
import temp from "../data/data"
import Mynews from "../components/Mynews"
import test from "../img/news_image/4.jpg"

let data_announcement = temp.announcement.reverse()
let data_news = temp.news.reverse()
let news_num = data_news.length

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
      const lists = data_announcement.map(item=>{
        return <li>({item.date}) {item.title}</li>
      })
      return (
          <div className="main-container">
            <div className="nav-bot-container text-left"> 
                <h3>Internet of Things Research Center</h3> 
                <a target="_blank" rel="noopener noreferrer" href="https://www.ntu.edu.tw/">
                  <h5>Strive for excellent</h5>
                </a>
            </div>
            <div className='index-container'>
              <div className="mb-5 row">               
                <div className="col-lg">
                  <div className="p-1 text-center title-container">
                    <h2 className="yahei"><i className="fas fa-newspaper"></i> 最新消息</h2>  
                  </div>
                  <div className="row">
                    <Mynews image={data_news[0].image || test} text={data_news[0].text} title={data_news[0].title} />
                    <Mynews image={data_news[1].image || test} text={data_news[1].text} title={data_news[1].title}/>
                  </div>            
                </div>
              </div>  
              <div className="mb-3 row">
                <div className="col-lg">
                  <div className='yahei p-1 text-center title-container'>
                    <h2><i className="fas fa-bullhorn"></i> 公告</h2>
                  </div> 
                  <div className="p-container">   
                    <ul>
                      {lists}                                            
                    </ul>
                  </div>
                </div>
                <div className="col-lg">
                  <div className="p-1 text-center title-container yahei">
                    <h2><i className="fas fa-home"></i> 關於中心</h2>
                  </div>
                  <div className="p-container">&emsp;&emsp;「電信研究中心」於81年3月成立，並於106年更名為「物聯網研究中心」（以下簡稱本中心）。本中心整合國立臺灣大學電機資訊學院相關系所，為配合國家經濟發展及未來著眼跨領域研究，以期達成從感測器、通訊網路、應用服務至關鍵性軟硬體平台之深耕研究，並拓展與物聯網應用與系統相關領域專家之合作。</div>
                </div>                
                <div className="col-lg">
                  <div className="yahei p-1 text-center title-container">
                    <h2><i className="far fa-user"></i> 團隊成員</h2>
                  </div>
                  <div className="p-container">
                    <p>本中心成員組成為國立臺灣大學電機資訊學院、電機工程學系、資訊工程學系等領域專家學者及教授共35名，研究無線電波、物聯網通訊與系統、資安、物聯網硬體、物聯網應用，並致力結合理論與實務。</p>                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default Home;