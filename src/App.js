import './App.css';
import Player from './components/Player'
import Header from './components/Header'
import abImg from './images/dasun.png'
import sangaImg from './images/chamira.png'
import sachinImg from './images/pathum.png'
import slImg from './images/slFlag.png'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='flexbox-container'>
        <Player imgSrc={abImg} name={'Dasun Shanaka'} imgCountry={slImg} country={'Sri Lanka'}></Player>
        <Player imgSrc={sangaImg} name={'Dushmantha Chamira'} imgCountry={slImg} country={'Sri Lanka'}></Player>
        <Player imgSrc={sachinImg} name={'Pathum Nissanka'} imgCountry={slImg} country={'Sri Lanka'}></Player>
      </div>
    </div>
  );
}

export default App;
