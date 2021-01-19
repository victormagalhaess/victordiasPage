import 'styles/App.css';
import icon from 'assets/images/profilePic.jpg'
import {getBirthday} from 'utils'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="leftContent">
          <a className="pageIcon" href="/">VH</a>
        </div>
      </header>
        <div className="Main-Container">
        <img className="Profile-Pic" src={icon} alt="profile showing my face"/>
          <span className="title">VICTOR HUGO FARIA DIAS MAGALHAES</span>
          <span className="subtitle">Developer 💻</span>
          <span className="career">
            <a href="mailto:hello@victordias.dev">
              hello@victordias.dev</a>
          </span>
          <span className="Career-Description">Age: {getBirthday()}</span>
          <span className="Career-Descrition">Location: Belo Horizonte, Brazil</span>
          <span className="Career-Description">Languages: 🇧🇷 Portuguese / 🇬🇧 English</span>
        </div>
    </div>
  );
}

export default App;
