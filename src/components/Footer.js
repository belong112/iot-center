import React, { Component } from 'react';
import logo from "../img/up-chevron-button.png"

class Footer extends Component {
  render() {
    return (
    	<footer>
        <div className="main-container">
          <div className="footer-container">
            <div className="footer">
              國立臺灣大學National Taiwan University 10617 臺北市羅斯福路四段一號 
            </div>
            <div className="footer"><i class="fas fa-phone"></i> +886-2-23635251 ext. 6608</div>
            <div className="footer">
              Copyright 2019 IRL All Rights Reserved
            </div>
          </div>
          <div class="back-to-top">
            <a href="#top"><img alt="logo" src={logo}/></a>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;