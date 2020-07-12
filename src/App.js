import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/about/About';
import Mywork from './pages/mywork/Mywork';
import Skills from './pages/skills/Skills';

function App() {
  return (
    <Router>
      <div>
     <header>
     <div className='header-container'>
     <nav>
        <div>
          <h2 >S<span>2</span></h2>
        </div>
          <div>
          <ul>
            <li>
              <Link className='nav-item' to="/">About</Link>
            </li>
            <li>
              <Link  className='nav-item' to="/skills">Skills</Link>
            </li>
            <li>
              <Link className='nav-item' to="/mywork">My Work</Link>
            </li>
          </ul></div>
        </nav>
     </div>
     </header>
         {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
           <main>
           <div>
           <Switch>
          <Route path="/skills">
            <Skills></Skills>
          </Route>
          <Route path="/mywork">
            <Mywork></Mywork>
          </Route>
          <Route path="/">
          <About></About>
          </Route>
        </Switch>
           </div>
           </main>
    </div>
    </Router>
  );
}

export default App;
