import { useState } from 'react';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const location = useLocation().pathname;
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => setShowNav((prev) => !prev);

  return (
    <nav className='navbar'>
      <h1>
        <Link to='/' className='navbar-logo'>
          ernestechie
        </Link>
      </h1>
      <ul className={`navbar-main-nav ${showNav ? 'show-nav' : 'hide-nav'}`}>
        <IoClose className='close-nav-button' onClick={toggleNav} />
        <li>
          <Link
            to='/'
            className={location === '/' && 'active'}
            onClick={toggleNav}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            className={location === '/about' && 'active'}
            onClick={toggleNav}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to='/projects'
            className={location === '/projects' && 'active'}
            onClick={toggleNav}
          >
            Projects
          </Link>
        </li>

        <div className='nav-link-social-links'>
          <a
            href='https://github.com/ernestechie'
            target='_blank'
            rel='noreferrer'
            onClick={toggleNav}
          >
            <BsGithub />
          </a>
          <a
            href='https://twitter.com/ernestechie'
            target='_blank'
            rel='noreferrer'
            onClick={toggleNav}
          >
            <BsTwitter />
          </a>
          <a
            href='https://www.linkedin.com/in/ernestechie/'
            target='_blank'
            rel='noreferrer'
            onClick={toggleNav}
          >
            <BsLinkedin />
          </a>
          <a
            href='https://instagram.com/ernestechie'
            target='_blank'
            rel='noreferrer'
            onClick={toggleNav}
          >
            <BsInstagram />
          </a>
        </div>
      </ul>
      <div className={showNav && 'nav-overlay'}></div>

      <div className='nav-buttons'>
        {/* <button className='btn nav-contact-btn'>Contact me</button> */}
        <HiMenuAlt3 className='burger-menu' onClick={toggleNav} />
      </div>
    </nav>
  );
};

export default Navbar;
