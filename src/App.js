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
           <footer>
             <div className='align-items-center justify-content-center d-flex'>
            
          <a href="https://twitter.com/obkurucu_" target='_blank' rel="noopener noreferrer">
          <i class="fab fa-twitter fa-2x icon-3d"></i>
          </a>

          <a href="https://www.linkedin.com/in/ozan-batuhan-kurucu-66b120182/" target='_blank' rel="noopener noreferrer">
          <i class="fab fa-linkedin-in fa-2x icon-3d"></i>
          </a>
          <a href="https://www.instagram.com/ozankurucu/" target='_blank' rel="noopener noreferrer">
          <i class="fab fa-instagram fa-2x icon-3d"></i>
          </a>
          <a href="https://github.com/ozanbatuhankurucu?tab=repositories" target='_blank' rel="noopener noreferrer">
          <i class="fab fa-github-alt fa-2x icon-3d"></i>
          </a>
          <a href="https://medium.com/me/stories/public" target='_blank' rel="noopener noreferrer">
          <i class="fab fa-medium-m fa-2x icon-3d"></i>
          </a>
          
             </div>
           </footer>
    </div>
    </Router>
  );
}

export default App;
