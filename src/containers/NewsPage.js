import React, { Component } from 'react';
import $ from 'jquery'
import temp from "../data/data.js"
import { NavLink } from "react-router-dom"

let data = temp.posts
let ids = temp.posts_number

class NewsPage extends Component {
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
        const postids = ids
        const { id } = this.props.match.params;
        return id && postids.includes(id) ? (
            <div className="main-container">          
          <div className='index-container'>
            <div className="col-lg-12 yahei text-justify">
              <h1>最新消息</h1>
              <hr/>
            </div>            
            <div class="mb-5 row">
              <aside className="col-lg-2 aside">
                <ul className="sidebar">
                  <li><NavLink to="/news">最新消息</NavLink></li>
                  <li><NavLink to="/news">活動公告</NavLink></li>
                  <li><NavLink to="/news">行事曆</NavLink></li>
                </ul>
              </aside>  
              <div className="col-lg-10 mb-3 text-justify">
                <h4>{data[id-1].date}</h4>
                <h3>{data[id-1].title}</h3>
                <p className="JQellipsis">{data[id-1].text}</p>
                <div className="text-center">
                  <img src={data[id-1].image} alt="newsiamge" className="img-fluid mx-auto d-block" width="70%"/>
                  <p className="font-italic">{data[id-1].imagetxt}</p>
                </div>
              </div>                                                           
            </div> 
          </div>           
      </div>
        ) : (
            <div className="main-container">          
          <div className='index-container'>
            <h3>Error: Post #{id} NOT FOUND</h3>
          </div>           
      </div>
        )
    }
}
export default NewsPage;