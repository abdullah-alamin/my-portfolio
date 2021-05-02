import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import HomeBio from './components/HomeBio';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="total-site clearfix">
      <div className="home-bio">
        <HomeBio></HomeBio>
      </div>
      <div className="home-right">
        <Navbar></Navbar>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
