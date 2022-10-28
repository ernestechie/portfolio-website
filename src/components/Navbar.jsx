import { useState } from 'react';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import './Navbar.scss';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => setShowNav((prev) => !prev);

  return (
    <nav className='navbar'>
      <h1>
        <a href='#' className='navbar-logo'>
          ernestechie
        </a>
      </h1>
      <ul className={`navbar-main-nav ${showNav ? 'show-nav' : 'hide-nav'}`}>
        <IoClose className='close-nav-button' onClick={toggleNav} />
        <li>
          <a href='#' onClick={toggleNav}>
            Home
          </a>
        </li>
        <li>
          <a href='#about' onClick={toggleNav}>
            About
          </a>
        </li>
        <li>
          <a href='#projects' onClick={toggleNav}>
            Projects
          </a>
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
