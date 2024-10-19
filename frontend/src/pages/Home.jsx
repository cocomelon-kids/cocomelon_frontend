import React from 'react';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';
import './Home.css';
import coverImage from '../assets/cover.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="cover-container">
      
      <div className="cover-image">
        <img src={coverImage} alt="Cocomelon Preschool & Day Care" className="cover" />
      </div>
      {/* Enroll Button Section */}
      <div className="enroll-section">
      <Link to="/enroll-now" className="enroll-butn">Enroll Now</Link>
      </div>
      <div className="contact-info">
        <h1>COCOMELON</h1>
        <h2>Pre School & Day Care</h2>
        </div>
      <div><ImageSlider/></div>
       
      <div className="contact-info">
        <h1>COCOMELON</h1>
        <h2>Pre School & Day Care</h2>
       
        <div className='info'><p>51-8, 57/2, 60 Feet road, Eenadu, Nakkavanipalem,<br /> Visakhapatnam, Andhra Pradesh 530013</p>
        <p><strong>Contact:</strong></p>
        <p>+91 6302164335<br />+91 7659011189</p>
        <p><strong>Timings:</strong> 9:30 am to 12:30 pm</p>
        </div>
      </div>
      <div className="about-us">
        <h2>ABOUT US</h2>
        <p>
          At Cocomelon Preschool & Day Care, we provide a safe and nurturing 
          environment where children can learn, play, and grow. Join us in building 
          a strong foundation for your child’s future.
        </p>
      </div>

      <div>
        <Footer/>
      </div>
      
    </div>
  );
};

export default Home;

