import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logon from '../../assets/logon.png';

const menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">What is GPT3?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>
)
const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="newone__navbar">
      <div className="newone__navbar-links">
        <div className="newone__navbar-links_logo">
          <img src={logon} alt="logo" />
        </div>
        <div className="newone__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="newone__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="newone__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="newone__navbar-menu_container scale-up-center">
            <div className="newone__navbar-menu_container-links">
              <menu />
              <div className="newone__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar