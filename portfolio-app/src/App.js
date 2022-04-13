
import './App.css';
import Header from './Header.js';
import Experience from './Experience.js';

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
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">Education</h2>
                        <ul className="list-unstyled">
                            <li>
                                <h6 className="fw-bold">Computer Science / University Name 2001-2004</h6>
                                <p>Sed et ornare quam. Cras scelerisque ex ultricies neque sodales tristique. Phasellus
                                    mattis
                                    dui ut enim
                                    tincidunt auctor. Maecenas euismod, orci eget varius elementum, nunc massa dignissim
                                    sapien,
                                    ac sagittis
                                    libero dolor vitae elit.</p>
                            </li>
                            <li>
                                <h6 className="fw-bold">Testville High School 1994-2000</h6>
                                <p>Aenean nisl enim, dictum in odio ut, suscipit efficitur diam. Nam nec velit a odio
                                    porta
                                    efficitur nec at
                                    magna.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md mb-5">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">Technology Summary</h2>
                        <ul className="list-unstyled">
                            <li>
                                <h6 className="fw-bold">Senior Web Developer / Digital Agency 2016-2020</h6>
                                <p>Phasellus et tellus iaculis, interdum augue vel, luctus nulla. Aenean viverra,
                                    magna
                                    a
                                    ultricies
                                    elementum, dui mi tristique ligula, non euismod leo mauris ac metus.</p>
                            </li>
                            <li>
                                <h6 className="fw-bold">Web Developer / Big Firm 2010-2015</h6>
                                <p>Mauris volutpat, ex condimentum fringilla imperdiet, nulla turpis semper diam, ac
                                    semper
                                    risus urna quis
                                    libero. Fusce non nunc quam. Ut vulputate, magna eget molestie luctus, elit est
                                    posuere
                                    lorem, quis
                                    dapibus dolor felis id mi.</p>
                            </li>
                            <li>
                                <h6 className="fw-bold">Junior Web Developer / Websites 'R' Us 2004-2009</h6>
                                <p>Sed eu turpis placerat, posuere odio a, viverra velit. Pellentesque habitant
                                    morbi
                                    tristique
                                    senectus et
                                    netus et malesuada fames ac turpis egestas.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
    
    </div>
  );
}

export default App;
