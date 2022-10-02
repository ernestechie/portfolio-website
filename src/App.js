import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { About, Home, NotFound, Project, Projects } from './pages';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects/:projectID' element={<Project />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
