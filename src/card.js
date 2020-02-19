import React, { Component } from 'react';
import s22 from './img/s22.jpg'
import s21 from './img/s21.png' 
import s23 from './img/s23.png' 
import s24 from './img/s24.jpg' 

class Card extends Component {
  render() {
    const cards=[{color:'#ebdc9c',src:s22,first:'Brand Design',second:'Innovation',extra:'+'},
    {color:'#3399CC',src:s21,first:'Digital',second:'Innovation'},
    {color:'#8153a6',src:s23,first:'Service Design',second:'Consultancy'},
    {color:'#cf6117',src:s24,first:'Activation +',second:'VR 360'}];
    
    const cardItems = cards.map((card) =>
        <div className="card">
            <img src={card.src} className="img" alt=""/>
            <div className="content">
                <i style={{backgroundColor:card.color}}></i>
                <h2>{card.first} <span style={{color:card.color}}> {card.extra} </span><br/>{card.second}</h2>
                <i style={{backgroundColor:card.color}}></i>
                <h5>Read More</h5>
            </div>
        </div>
    );
    

    return (
      <div className="cards">

        {cardItems}
        <span><i className="fa fa-plus"></i></span>
      </div>
    );
  }
}
export default Card; 