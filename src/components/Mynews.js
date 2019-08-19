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
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.text}</p>
            </div>
          </div>
        </div>
      </div>      
    )
  }
}
export default Mynews;