import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import CoverPage from './pages/Home.jsx';
import Curriculum from './pages/Curriculum.jsx';
import Blogs from './pages/Blogs.jsx';
import Fee from './pages/Fee.jsx';
import Contact from './pages/Contact.jsx';
import Enroll from './pages/Enroll.jsx';

function App() {
  const location = useLocation();

  // Check if the current path is for the enrollment page
  const isEnrollPage = location.pathname === '/enroll-now';

  return (
    <div className={isEnrollPage ? 'enroll-background' : ''}>
      {isEnrollPage && <div className="overlay"></div>}
      {location.pathname !== '/enroll-now' && <Navbar />}
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/fee" element={<Fee/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enroll-now" element={<Enroll />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
