// import logo from './logo.svg';
import useState from 'react'
// import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Navbar from './componenets/Navbar/Navbar';
import Home from './componenets/home/Home';
import Earn from './componenets/earn/Earn';
import Mainearn from './componenets/earn/Mainearn';
import Dashboard from './componenets/dashboard/Dashboard';
import Rough from './componenets/Navbar/Rough';

function App() {
  //   const [isMenuOpen, setMenuOpen] = useState(false);

  //   const toggleMenu = () => {
  //     setMenuOpen(!isMenuOpen);
  //   };

  return (
    <Router>
      {/* <Rough></Rough> */}
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route path='/mainearn' Component={Mainearn}></Route>
        <Route path='/dashboard' Component={Dashboard}></Route>
      </Routes>

      <Home />
      {/* <Mainearn/> */}
      {/* <Mainearn/> */}

      {/* <Dashboard/> */}
      {/* <Earn/> */}
    </Router>

  )
}

export default App;
//   <nav className="navbar">
//   <div className="menu-toggle" onClick={toggleMenu}>
//     <div className="bar"></div>
//     <div className="bar"></div>
//     <div className="bar"></div>
//   </div>
//   <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
//     <li><a ="#">Home</a></li>
//     <li><a href="#">About</a></li>
//     <li><a href="#">Services</a></li>
//     <li><a href="#">Contact</a></li>
//   </ul>
// </nav>
