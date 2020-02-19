import React from 'react';
import './App.css';
import './header'
import Header from './header';
import Footer from './footer';
import FirstSection from './firstSection';
import SecondSection from './secondSection';

function App() {
  return (
    <div className="App">
      
      <Header />
        
          <FirstSection />
          <SecondSection />
        
      <Footer />
    </div>
  );
}

export default App;
