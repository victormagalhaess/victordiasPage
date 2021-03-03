import React from 'react';
import Header from 'shared/Header/'
import Body from './pages/Home/Components/Body/'
import Footer from './pages/Home/Components/Footer/'
import './styles.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
