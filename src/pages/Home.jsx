import { useState } from 'react';
import { AiFillApi } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaBootstrap, FaGitAlt, FaReact } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';
import { SiFirebase, SiSass, SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import myImage1 from '../assets/jpgs/me-1.png';
import myImage2 from '../assets/jpgs/me-2.png';
import { Footer, ProjectCard, SocialLinks } from '../components';
import { PROJECTS } from '../data/data';
import './Home.scss';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  const formValid =
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    message.trim().length > 0;

  const formInputHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <main className='home page'>
        <header className='header'>
          <SocialLinks />
          <div className='greeting'>
            <span className='hi'>Hello, I'm</span>
            <div className='line'></div>
            <h1 className='name'>Isaiah Ernest</h1>

            <div className='what-i-do'>
              <h2>Frontend Developer</h2>`
              <p>
                I build scalable, responsive user interfaces with good user
                experience and I'm passionate about translating designs to
                beautiful web interfaces.
              </p>
            </div>

            <button className='btn projects-btn'>Projects</button>
          </div>

          <div className='header-image'>
            <img src={myImage1} alt='isaiah Ernest ovie studioshoot 1' />
          </div>
        </header>

        <section className='section tools'>
          <p className='heading'>Tools I work with</p>
          <p className='subheading'>
            I am proficient in, but not limited to the following tools listed
            below
          </p>

          <div className='dev-tools'>
            <span className='badge'>
              ReactJS
              <FaReact />
            </span>
            <span className='badge'>
              Firebase
              <SiFirebase />
            </span>
            <span className='badge'>
              Git/Github
              <FaGitAlt />
            </span>
            <span className='badge'>
              Tailwind
              <SiTailwindcss />
            </span>
            <span className='badge'>
              Bootstrap
              <FaBootstrap />
            </span>
            <span className='badge'>
              SASS
              <SiSass />
            </span>
            <span className='badge'>
              NextJS
              <TbBrandNextjs />
            </span>
            <span className='badge'>
              APIs
              <AiFillApi />
            </span>
          </div>
        </section>

        <section id='about' className='section about'>
          <p className='heading'>About me</p>
          <p className='subheading'>Who I am. What I do.</p>

          <div className='about-me'>
            <div className='about-me-image'>
              <img src={myImage2} alt='Isaiah Ernest Studio Shoot' />
            </div>
            <div className='about-me-text'>
              <p>
                My name is{' '}
                <span className='text-accent'> Isaiah Ernest Ovie</span>. I'm a
                React Developer and I love building cross-browser compatible,
                responsive frontend apps with a good user experience.
              </p>
              <p>
                I'm currently in my 2nd year studying Computer Science in Niger
                Delta University, Bayelsa State, Nigeria.
              </p>
              <p>
                I can deliver efficient, and scalable JavaScript and CSS codes,
                and can interpret Figma and Adobe XD designs to create pixel
                perfect web interfaces.
              </p>
              <p>
                I'm a team player and a fast learner, that means I can easily
                adapt in a competitive environment and work in a team.
              </p>
            </div>
          </div>
        </section>

        <section id='projects' className='section projects'>
          <p className='heading'>Projects</p>
          <p className='subheading'>
            Here are some of my projects. Visit my
            <a
              href='https://github.com/ernestechie?tab=repositories'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              Github{' '}
            </a>{' '}
            to see more.
          </p>

          <section className='projects-grid'>
            {PROJECTS.map((project) => (
              <div key={project.id} className='project'>
                <ProjectCard project={project} />
              </div>
            ))}
          </section>
        </section>

        {/* CONTACT ME */}
        <section className='section contact'>
          <p className='heading'>Contact me</p>
          <p className='subheading'>
            Startup projects? Gigs? Collaborations? Contact me via Twitter,
            WhatsApp, Email, or send a message directly from here.
          </p>

          <div className='contact-form-div'>
            <div className='contact-details'>
              <div className='contact-details-group'>
                <BsTwitter />
                <div className='details'>
                  <p className='type'>Twitter</p>
                  <p className='recepient'>@ernestechie</p>
                </div>
              </div>
              {/*  */}
              <div className='contact-details-group'>
                {' '}
                <RiWhatsappFill />
                <div className='details'>
                  <p className='type'>WhatsApp</p>
                  <p className='recepient'>+2349055355357</p>
                </div>
              </div>
              {/*  */}
              <div className='contact-details-group'>
                <MdEmail />
                <div className='details'>
                  <p className='type'>Email</p>
                  <p className='recepient'>officialisaiahovie@gmail.com</p>
                </div>
              </div>
            </div>

            <form className='contact-form'>
              <div className='input-group'>
                <label htmlFor='name'>Your name</label>
                <input
                  type='text'
                  id='name'
                  onChange={formInputHandler}
                  value={name}
                />
              </div>
              <div className='input-group'>
                <label htmlFor='email'>Your Email</label>
                <input
                  type='email'
                  id='email'
                  onChange={formInputHandler}
                  value={email}
                />
              </div>
              <div className='input-group'>
                <label htmlFor='message'>Message</label>
                <textarea
                  name='message'
                  id='message'
                  onChange={formInputHandler}
                  value={message}
                ></textarea>
              </div>
              <button
                className={`button ${!formValid && 'disabled'}`}
                disabled={!formValid}
              >
                <a
                  href={`mailto:officialisaiahovie@gmail.com?Subject=${`${name} via Portfolio Website. Email 👉🏽 ${email}`}&body=${message}`}
                  type='submit'
                  style={{
                    pointerEvents: `${formValid ? 'all' : 'none'}`,
                  }}
                >
                  {formValid
                    ? 'Send message'
                    : 'Fill form before you can submit'}
                </a>
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
