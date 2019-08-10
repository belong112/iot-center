import React,{ Component } from 'react';

class Mynews extends Component {
  render() {
    return (
      <div className="card ml-auto mb-2 mt-1 col-lg-6">
        <div className="row">
          <div className="col-md-4 cardimg mt-2 mb-2">
            <img src={this.props.image} className="card-img" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">SoberMotion行車安全確認系統 參展COMPUTEX 2018成焦點</h5>
              <p className="card-text">敬賀 游創文博士與黃明琪醫師研究團隊於COMPUTEX 2018大放異彩！.</p>
            </div>
          </div>
        </div>
      </div>      
    )
  }
}
export default Mynews;