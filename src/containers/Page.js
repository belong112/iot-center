import React, { Component } from 'react';
import $ from 'jquery'
import temp from "../data/data.js"
let data = temp.posts
let ids = temp.posts_number

class Page extends Component {
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
    const postids=ids
    const {id} = this.props.match.params;
    return id && postids.includes(id)? (
      <div className="main-container">          
          <div className='index-container'>
            <div className="yahei txtjustify">
              <h1>最新消息</h1>
              <hr/>
            </div>
            <div class="big-container tst row">
              <div className="index-container">
                <div class="event-container txtjustify">
                  <h4>{data[id].date}</h4>
                  <h3>{data[id].title}</h3>
                  <p>&emsp;{data[id].text}</p>
                  </div>                
              </div>                                            
            </div> 
          </div>           
      </div>
    ):(
      <div>
        <h3>Error: Post #{id} NOT FOUND</h3>
      </div>
    )
  }
}
export default Page;