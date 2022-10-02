import { v4 as uuidv4 } from 'uuid';
import anonymailThumbnail from '../assets/jpgs/anonymail-project-thumbnail.png';

const PROJECTS = [
  {
    id: uuidv4(),
    name: 'AnonyMail',
    description:
      'A React app for fun. Where users can send and receive messages anonymously.',
    image_url: anonymailThumbnail,
    github_link: 'https://github.com/ernestechie/anonymail',
    live_site: 'https://anonymail.netlify.app',
  },
];

export { PROJECTS };
