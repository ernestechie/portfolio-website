import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='head'>
        <p className='h1'>Isaiah Ernest Ovie</p>
        <p className='h2'>Frontend Developer</p>
      </div>
      <div className='links'>
        <div className='nav-link-social-links'>
          <a
            href='https://github.com/ernestechie'
            target='_blank'
            rel='noreferrer'
          >
            <BsGithub />
          </a>
          <a
            href='https://twitter.com/ernestechie'
            target='_blank'
            rel='noreferrer'
          >
            <BsTwitter />
          </a>
          <a
            href='https://www.linkedin.com/in/ernestechie/'
            target='_blank'
            rel='noreferrer'
          >
            <BsLinkedin />
          </a>
          <a
            href='https://instagram.com/ernestechie'
            target='_blank'
            rel='noreferrer'
          >
            <BsInstagram />
          </a>
        </div>
      </div>
      <div className='copyright'>&copy; ernestechie</div>
    </footer>
  );
};

export default Footer;
