
import './App.css';
import Header from './Header.js';
import Experience from './Experience.js';
import Education from './Education';
import Technology from './Technology';

function App() {
  return (
    <div className="App">
      <Header/>
    <main className="container">
        <div className="row mt-3">
            <div className="col-md">
                <Experience/>
            </div>
            <div className="col-md">
                <Education/>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md mb-5">
                <Technology/>
            </div>
        </div>
    </main>
    
    </div>
  );
}

export default App;
