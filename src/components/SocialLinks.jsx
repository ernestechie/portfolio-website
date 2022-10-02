import { useState } from 'react';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import './SocialLinks.scss';

const SocialLinks = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  window.addEventListener('scroll', () => {
    setScrollPosition(() => window.scrollY);
  });

  return (
    <>
      {scrollPosition < 50 && (
        <div className='social-links'>
          <a
            href='https://www.github.com/ernestechie'
            target='_blank'
            rel='noreferrer'
            className='span'
          >
            <BsGithub />
          </a>
          <a
            href='https://www.twitter.com/ernestechie'
            target='_blank'
            rel='noreferrer'
            className='span'
          >
            <BsTwitter />
          </a>
          <a
            href='https://www.linked.com/in/ernestechie'
            target='_blank'
            rel='noreferrer'
            className='span'
          >
            <BsLinkedin />
          </a>
          <a
            href='https://www.instagram.com/ernestechie'
            target='_blank'
            rel='noreferrer'
            className='span'
          >
            <BsInstagram />
          </a>
        </div>
      )}
    </>
  );
};

export default SocialLinks;
