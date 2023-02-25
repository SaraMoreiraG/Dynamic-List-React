import './App.css';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1>todos</h1>
      </div>
      <div className='list'>
        <ul>
          <li>
            <p>Make the bed</p>
            <p className='erase'>X</p>
          </li>
          <li>Wash my hands</li>
        </ul>
        <div className='footer'>
          <small>2 item left</small>
        </div>
      </div>
      <div className='border1'></div>
      <div className='border2'></div>
    </div>
  );
}

export default App;
