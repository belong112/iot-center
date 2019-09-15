import React,{ Component } from 'react';
import $ from 'jquery'

class Mynews extends Component {
  render() {

    $(function(){
        var len = 50; // 超過135個字以"..."取代
        $(".JQellipsis").each(function(i){
            if($(this).text().length>len){
                $(this).attr("title",$(this).text());
                var text=$(this).text().substring(0,len-1)+"...";
                $(this).text(text);
            }
        });
    });


    return (
      <div className="card ml-auto mb-2 mt-1 col-lg-6">
        <div className="row">
          <div className="col-md-4 cardimg mt-2 mb-2">
            <img src={this.props.image} className="card-img" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="JQellipsis card-text">{this.props.text}</p>
            </div>
          </div>
        </div>
      </div>      
    )
  }
}
export default Mynews;