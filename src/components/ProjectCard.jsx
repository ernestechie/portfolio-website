import { BsGithub, BsStack } from 'react-icons/bs';
import { MdLaunch } from 'react-icons/md';
import './ProjectCard.scss';

const ProjectCard = ({ project }) => {
  return (
    <div className='project-card'>
      <div
        className='project-image'
        style={{
          background: `url(${project.image_url}) no-repeat center center/cover`,
        }}
      ></div>
      <div className='content'>
        <p className='project-name'>{project.name}</p>
        <p className='project-description'>{project.description}</p>
        <p className='project-tech-stack'>
          <BsStack /> {project.tech_stack}
        </p>
        <div className='links'>
          <a
            href={project.live_site}
            className='live-site'
            target='_blank'
            rel='noreferrer'
          >
            Website <MdLaunch />
          </a>
          <a
            href={project.github_link}
            className='github-link'
            target='_blank'
            rel='noreferrer'
          >
            Github <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
