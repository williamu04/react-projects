import './App.css';
import Header from './Header';
import Info from './Info';
import Content from './Content';
import InfoFinal from './InfoFinal';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='app_info'>
        <Info/>
      </div>
      <div className='app_page'>
        <Content/>
      </div>
      <hr/>
      <div className='app_info_bawah'>
        <InfoFinal/>
      </div>
      
    </div>
  );
}

export default App;
