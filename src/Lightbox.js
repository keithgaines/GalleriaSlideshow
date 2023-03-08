import React, { useState, useEffect } from 'react';
import './slide.css';
import images from './images';

function Lightbox(props) {
  const [lightboxImageUrl, setLightboxImageUrl] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setLightboxImageUrl(props.imageUrl);
  }, [props.imageUrl]);

  function handleCloseLightbox() {
    setLightboxImageUrl('');
  }

  function handlePrevClick() {
    setProgress((prevProgress) => prevProgress - 100 / 15); // Replace 15 with the actual number of images
  }

  function handleNextClick() {
    setProgress((prevProgress) => prevProgress + 100 / 15); // Replace 15 with the actual number of images
  }

  function handleViewImageClick() {
    setLightboxImageUrl(props.currentArtworkUrl);
    console.log('view image clicked')
  }

  const images = [
    {
      id: 1,
      url: process.env.PUBLIC_URL + '/assets/starry-night/hero-small.jpg',
      alt: 'lightbox image',
    },
    
  ];

  return (
    <div>
      {lightboxImageUrl !== '' && (
        <div id="lightbox" onClick={handleCloseLightbox}>
          <div className="lightbox-inner">
            <img id="lightbox-image" src={images} alt="lightbox" />
            <button id="close-btn" onClick={handleCloseLightbox}>Close</button>
          </div>
        </div>
      )}
  
      <button className="view-image-btn" onClick={handleViewImageClick}>View Image</button>
  
      <div className="slideshow">
        <button className="prev-button" onClick={handlePrevClick} disabled={props.previousArtworkUrl === null}>
          Previous
        </button>
        <button className="next-button" onClick={handleNextClick} disabled={props.nextArtworkUrl === null}>
          Next
        </button>
      </div>
    </div>
  );
  
}

export default Lightbox;
