import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../pages/about/About";
import Mywork from "../pages/mywork/Mywork";
import Skills from "../pages/skills/Skills";
import NotFound from "../pages/notfound/NotFound";
import Blog from "../pages/blog/Blog";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Login from "../pages/login/Login";

export default function MyBlog(props){
    const {user,setUser} = props;
    return (
        <Router>
        <div>
          <Header></Header>
          <main>
            <div>
              <Switch>
                <Route exact path="/" component={About}></Route>
                <Route exact path="/skills" component={Skills}></Route>
                <Route exact path="/mywork" component={Mywork}></Route>
                <Route exact path="/blog" component={Blog}></Route>
                <Route exact path="/login" render={(props) => <Login user={user} setUser={setUser} {...props} /> } ></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </main>
          <Footer></Footer>
        </div>
      </Router>
    );
}