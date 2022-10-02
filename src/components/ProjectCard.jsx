import { BsGithub } from 'react-icons/bs';
import { MdLaunch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './ProjectCard.scss';

const ProjectCard = ({ project }) => {
  return (
    <div className='project-card'>
      <Link
        to={`projects/${project.id}`}
        className='project-image'
        style={{
          background: `url(${project.image_url}) no-repeat center center/cover`,
        }}
      ></Link>
      <div className='content'>
        <p className='project-name'>{project.name}</p>
        <p className='project-description'>{project.description}</p>
        <div className='links'>
          <a
            href={project.live_site}
            className='live-site'
            target='_blank'
            rel='noreferrer'
          >
            Live Site <MdLaunch />
          </a>
          <a
            href={project.github_link}
            className='github-link'
            target='_blank'
            rel='noreferrer'
          >
            Github Repo <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
