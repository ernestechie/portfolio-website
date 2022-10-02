import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className='page'>
      <h1>This page does not exist</h1>
      <Link to='/'>Back to home</Link>
    </main>
  );
};

export default NotFound;
