import React from 'react'
import '../Navbar/rough.css'
import { useState } from 'react';
const Rough = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="navbar">
    <div className="logo">Logo</div>
    <button className="toggle-btn" onClick={toggleNav}>
      Toggle
    </button>
    <ul className={`nav-items ${isNavOpen ? 'open' : ''}`}>
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
      <li><a href="#">Item 3</a></li>
      <li><a href="#">Item 4</a></li>
      <li><a href="#">Item 5</a></li>
      <li><a href="#">Item 6</a></li>
    </ul>
    <div className="buttons">
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </div>
  </div>
  )
}

export default Rough
