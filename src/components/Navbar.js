import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
    	<header>
        <div className="main-container">   
            <div className="nav-top-container">
                <div className="leftpart">
                    <img src={require('../img/ntu.png')} />
                    <NavLink to="/" style={{color: '#1C4D83'}}><h3 style={{paddingLeft:'60px'}}>Internet research center</h3></NavLink>
                </div>
                <div className="rightpart">
                   <a>EN</a> | <a>CH</a>  
                </div>
            </div>     
            <div className="navbar-container">
                <nav id="navbar" className="navbar navbar-expand-xl navbar-dark fixed">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>   
                    <a className="navbar-brand" style={{color:'white'}}>Internet Research Center</a>            
                    <div className="collapse navbar-collapse navbar-items" id="navbarsExample06">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">首頁</NavLink>
                            </li>                        
                            <li className="nav-item active dropdown">                               
                                <a className="nav-link dropdown-toggle" href="/research" id="navbarDropdown" data-toggle="dropdown" >
                                  研究計畫
                                </a>
                                <div class="dropdown-menu">
                                  <NavLink to="/research/5g"><span className='dropdown-item'>5g網路</span></NavLink>
                                  <NavLink to="/research/iot"><span className='dropdown-item'>智慧物聯網</span></NavLink>
                                  <NavLink to="/research/VRAR"><span className='dropdown-item'>VR/AR</span></NavLink>
                                </div>
                            </li>
                            <li className="nav-item active dropdown">                               
                                <a className="nav-link dropdown-toggle" href="/research" id="navbarDropdown"data-toggle="dropdown">
                                    實驗室介紹  
                                </a>
                                <div class="dropdown-menu">
                                  <NavLink to="/lab/a"><span className='dropdown-item'>a lab</span></NavLink>
                                  <NavLink to="/lab/b"><span className='dropdown-item'>b lab</span></NavLink>
                                  <NavLink to="/lab/g"><span className='dropdown-item'>g lab</span></NavLink>
                                </div>
                            </li>            
                            <li className="nav-item active"> 
                              <NavLink className="nav-link" to="/news">最新消息</NavLink>
                            </li>                     
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/member">團隊成員</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/project">資源</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/contact">聯絡我們</NavLink>
                            </li>                         
                        </ul>
                    </div>
                </nav>            
            </div>
            <div className="nav-bot-container txtjustify"> 
                <h3>LABORATORY INFORMATION DECISION SYSTEMS</h3> 
                <a target="_blank" href="https://www.ntu.edu.tw/" ></a>
                <h5>National Taiwan University</h5>          
            </div>
        </div>
      </header>
    );
  }
}
export default Navbar;