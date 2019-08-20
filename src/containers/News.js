import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import $ from 'jquery'
import temp from "../data/data.js"
let  data = temp.posts
let maxpg = 1

class News extends Component {
   constructor(props) {
      super(props);
      this.state = {
        page_num : 1,
      };
    }

  componentWillMount(){
    maxpg = parseInt(data.length/5+1)
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

  isActive=(value)=>{
    return 'page-item '+((value=== this.state.page_num) ?'active':' ');
  }

  control_click=(i)=>{
    this.setState({
      page_num : i
    })
  }

  previouspg=()=>{
    let temp = this.state.page_num
    if(this.state.page_num > 1){
      this.setState({
        page_num : temp-1
      })
    }
  }
  nextpg=()=>{
    let temp = this.state.page_num
    if(this.state.page_num < maxpg){
      this.setState({
        page_num : temp+1
      })
    }
  }

  render() {
    const posts = data.filter((item,id) => {
      if((this.state.page_num-1)*5<id+1 && id+1 <= this.state.page_num*5)
        return item
    }).map((item,id) => {
      return(
      <div className="event-container">
        <h5>{item.date}</h5>
        <h3><NavLink className="newstitle" to={`/news/${id}`}>{item.title||"daw"}</NavLink></h3>
        <p className="JQellipsis">&emsp;&emsp;{item.text}</p>
      </div>              
      )}
    );
    let lis = []
    for (let i = 1; i <= maxpg; i++) {
      lis.push(<li className={this.isActive(i)}><button onClick={() => {this.control_click(i)}} className="page-link">{i}</button></li>
                    )
    }
    return (
      <div className="main-container">          
          <div className='index-container'>
            <div className="yahei txtjustify">
              <h1>最新消息</h1>
              <hr/>
            </div>
            <div className="big-container tst row">
              <aside className="col-lg-2 big-container aside">
                <ul className="sidebar">
                  <li><NavLink to="/news">最新消息</NavLink></li>
                  <li><NavLink to="/news">行事曆</NavLink></li>
                  <li><NavLink to="/news">活動快報</NavLink></li>
                </ul>
              </aside>  
              <div className="col-lg-10">
                {posts}
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <button className="page-link" onClick={this.previouspg}>
                        <span>&laquo;</span>
                      </button>
                    </li>
                    {lis}
                    <li className="page-item">
                      <button className="page-link" onClick={this.nextpg}>
                        <span>&raquo;</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>                                            
            </div> 
          </div>           
      </div>
    );
  }
}
export default News;