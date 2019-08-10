import React, { Component } from 'react';
import bgimg from "../img/6.jpg"
import horse from "../img/horse.jpg"
import $ from 'jquery'

class News extends Component {
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
            <div className="yahei txtjustify">
              <h1>最新消息</h1>
              <hr/>
            </div>
            <div class="big-container tst row">
              <aside className="col-lg-2 big-container">
                <ul className="sidebar">
                  <li><a href="">最新消息</a></li>
                  <li><a href="">行事曆</a></li>
                  <li><a href="">活動快報</a></li>
                </ul>
              </aside>  
              <div className="col-lg-10">
                <div class="event-container">
                  <h5>2019/7/21</h5>
                  <h3><a className="newstitle" href="/page/0">高雄大淹水 韓國瑜明卻北上「拜會大老」 網轟爆</a></h3>
                  <p>&emsp;Electrical Engineering from the University of Southern California, Los Angeles, California, USA, in 1997. She is a Distinguished Professor of Electrical Engineering, National Taiwan University (NTU), Taipei, Taiwan. She is an Adjunct Research Fellow of Research Center for Information Techonology Innovation, Amercian Sinica, Taiwan. She is the General Director of Engineering Division in the Ministry of Science and Technology in Taiwan. Her research interests are focused on the design and analysis of wireless and multimedia networking, green communications, on-line social network analysis, and cloud networking.</p>
                </div>
                <div className="event-container">
                  <h5>2019/7/15</h5>
                  <h3><a className="newstitle" href="/page/1">壓倒性勝出 韓國瑜：心中沒有一絲一毫的喜悅</a></h3>
                  <p>&emsp;國民黨今天公布總統初選民調結果，高雄市長韓國瑜以44.80％的支持率壓倒性的勝出。韓國瑜今出席民調結果公布記者會，他表示，自己勝出，心中沒有一絲一毫的喜悅和歡樂，只感到無比沉重的壓力。希望承擔這樣的責任，可以得到更多朋友的幫忙，一起來開創台灣更多美好的未來，一起幫台灣子孫萬代開闢更燦爛的道路...</p>
                </div>
              </div>                                            
            </div> 
          </div>           
      </div>
    );
  }
}
export default News;