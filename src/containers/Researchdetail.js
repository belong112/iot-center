import React, { Component } from 'react';
import { NavLink } from "react-router-dom" 
import $ from "jquery"

class Researchdetail extends Component {
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
    let postids = ["5g","iot","VRAR"]
    const {id} = this.props.match.params;
    if (postids.includes(id))
    return(
      <div className="main-container">           
            <div className='index-container'>
              <div className="col-lg-12 text-justify yahei">
                <h1>研究項目</h1>
                <hr/>
              </div>
              <div className="p-2 row">
                <aside className="col-lg-2 aside">
                  <ul className="sidebar">
                    <li><NavLink to="/research/5g">5g 網路</NavLink></li>                  
                    <li><NavLink to="/research/iot">智慧物聯網</NavLink></li>
                    <li><NavLink to="/research/VRAR">VR/AR</NavLink></li>
                  </ul>
                </aside>
                <div className="mb-5 col-lg-10">
                  <div className="mb-4">
                    <h3>{id}</h3>
                    <p>Historically, the intellectual roots of LIDS lie in the field of Systems and Control Theory.  The original focus of this field was on the modeling, analysis, and feedback controller design for systems described by linear or nonlinear differential or difference equations, with special emphasis on issues of robustness, a subject in which LIDS played a pioneering role. More recently, numerous challenges have emerged, with the focus shifting towards complex, often distributed and networked, systems. Typical concerns that are driving the field stem from the high-dimensionality of such systems, the simultaneous presence of discrete and continuous dynamics (hybrid systems), the interaction between physical systems with humans or software, and the quantification of appropriate notions of information for the purpose of decision-making.</p>
                    <p>The Internet Research Laboratory (IRL), led by Professor Wanjiun Liao of the Department of Electrical Engineering in the National Taiwan University, is engaged in cutting-edge network protocol design. Research in the IRL focuses on provision of solutions for problems encountered in today's Internet as well as Next Generation Internet with more potential applications. Our research activities cover the whole internet, including Broadband Internet, Wireless Internet and Adhoc Technologies, etc.</p>
                  </div>
                  <div className="mb-4">
                    <h3>目前研究項目</h3>
                    <p>to bring a better life to the citizens</p>
                    <p>five miuntes later</p>
                  </div>
                </div>
              </div>  
            </div>          
        </div>
    );
    
  }
}
export default Researchdetail;