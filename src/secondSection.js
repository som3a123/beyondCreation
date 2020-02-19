import React, { Component } from 'react';
import Card from './card';
class SecondSection extends Component {
  
  render() {
    

    
    return (
      <div className="second-section">
        <div className="content">
            <i></i>
  

            <h1>
              A Team of <span style={{color:'#3399CC'}}>specialists</span> to <br/> cater all your needs
            </h1>
            <h4> We believe in expertise multiplicity.</h4>
            <h4 style={{fontFamily: 'Brandon Regular'}}>This is the mixture of skilled partners to attend all your Strategic, Branding, Digital, Design,<br/> 
                Marketing and Media needs</h4>
        </div>
        <Card />
        
    
    </div>
    );
  }
}
export default SecondSection; 