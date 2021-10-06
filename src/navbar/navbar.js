import React, { useState } from 'react';
import { Menu  } from "antd";

// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './navbar.css';
import Dropdown from './dropdown';
import {DownOutlined, AlignRightOutlined} from '@ant-design/icons'

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          BWAAP         
        </Link>
        <div className='menu-icon' onClick={handleClick}>
        <AlignRightOutlined />
        
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us <DownOutlined />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
          <Menu.Item key="business">Business</Menu.Item>
            {/* <Link
              to='/business'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Business
            </Link> */}
          </li>
          <li className='nav-item'>
            <Link
              to='/farms-and-plantation'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Farms &amp; Plantation 
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/technology'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Technology
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
        </ul>
        
      </nav>
    </>
  );
}

export default Navbar;