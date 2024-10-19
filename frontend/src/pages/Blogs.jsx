import React from 'react';
import './Blogs.css'; // Import the CSS file for styling
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';

const Blogs = () => {
  const posts = [
    {
      title: 'Fun Day',
      date: 'October 10, 2024',
      image: image1,
      video: video1,
      description: 'Children enjoying a day full of activities and laughter at the park.'
    },
    {
      title: 'Creative Arts and Crafts',
      date: 'October 15, 2024',
      image: image3,
      video: video1,
      description: 'Exploring creativity through various arts and crafts activities.'
    },
    {
      title: 'Learning Through Play',
      date: 'October 17, 2024',
      image: image2,
      video: video1,
      description: 'How playtime contributes to learning and development.'
    }
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Our Little Adventures</h1>
      <div className="posts">
        {posts.map((post, index) => (
          <div className="post" key={index}>
            <h2 className="post-title">{post.title}</h2>
            <span className="post-date">{post.date}</span>
            <img src={post.image} alt={post.title} className="post-image" />
            <video controls className="post-video">
              <source src={post.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="post-description">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
