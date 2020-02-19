import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { toggle } from './js/script';
import share from './img/share.png';
class Header extends Component {
  render() {

    return(
    <header>
    
    <div className="logo">
        <a className="navbar-brand" href=""></a>

       
    </div>
    
    <div className="last"> 
        <img id="fa" src={share} alt="" />
        <a href="#about" style={{textDecoration: 'none'}}>Share <br/> your brief.</a>
        <div className="icon-bar" onClick={toggle}>
            <i></i>
            <i></i>
            <i></i>
        </div>
    </div>
    
    <div className="navbar" id="nav-bar">
        <ul id="nav-lists">
            
            <li><a href="" id="first"> Who we are</a></li>
            <i className="nav-border"></i>
            <li><a href="" id="first"> Our services </a></li>
            <i className="nav-border"></i>
            <li><a href="" id="first"> Our specialists </a></li>
            <i className="nav-border"></i>
            <li><a href="" id="first"> Our work </a></li>
            <i className="nav-border"></i>
            <li><a href="" id="first"> Get in touch </a></li>
            <li><a href="" id="first"><i className="fa fa-search"></i> </a></li>
        </ul>  
    </div>
    
    
    
   
    
</header>
    );
  }
}
export default Header;