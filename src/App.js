import './App.css';
import Home from './components/home/Home';
import Projects from './components/Projects';
import HomeBio from './components/HomeBio';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="total-site clearfix">
      <div className="home-bio">
        <HomeBio></HomeBio>
      </div>
      <div className="home-right">
        <Router>
        <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home> 
            </Route>
            <Route path="/projects">
              <Projects></Projects>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route path="/resume">
              <Resume></Resume>
            </Route>
        </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </div>
  );
}

export default App;
