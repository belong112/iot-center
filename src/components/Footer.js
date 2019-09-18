import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button";

class Footer extends Component {
  render() {
    return (
    	<footer>
        <div className="main-container">
          <div className="p-3 text-left">
            <div className="footer">
              國立臺灣大學National Taiwan University 10617 臺北市羅斯福路四段一號 
            </div>
            <div className="footer">
              <i className="fas fa-phone"></i> phone : 02-33663700#6608
            </div>
            <div className="footer">
              Copyright 2019 IRL All Rights Reserved
            </div>
          </div>

          <ScrollUpButton AnimationDuration={700} />
          
        </div>
      </footer>
    );
  }

}
export default Footer;