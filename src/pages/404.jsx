import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <>
      <main className='page'>
        <h1>This page does not exist</h1>
        <Link to='/'>Back to home</Link>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
