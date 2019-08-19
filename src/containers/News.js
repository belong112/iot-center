import React, { Component } from 'react';
import horse from "../img/horse.jpg"
import { NavLink } from "react-router-dom"
import $ from 'jquery'
import temp from "../data/data.js"
var data = temp.posts

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

    $(function(){
        var len = 135; // 超過50個字以"..."取代
        $(".JQellipsis").each(function(i){
            if($(this).text().length>len){
                $(this).attr("title",$(this).text());
                var text=$(this).text().substring(0,len-1)+"...";
                $(this).text(text);
            }
        });
    });
  }
  render() {
    const posts = data.map((item,id) => (
      <div class="event-container">
        <h5>{item.date}</h5>
        <h3><NavLink className="newstitle" to={`/news/${id}`}>{item.title}</NavLink></h3>
        <p className="JQellipsis">&emsp;&emsp;{item.text}</p>
      </div>              
      )
    );
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
                {posts}
              </div>                                            
            </div> 
          </div>           
      </div>
    );
  }
}
export default News;