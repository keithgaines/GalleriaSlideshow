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
    const currentImage = images.find(img => img.id === props.currentArtworkId);
    setLightboxImageUrl(currentImage.url);
  };

  return (
    <div>
      {lightboxImageUrl !== '' && (
        <div id="lightbox" onClick={handleCloseLightbox}>
          <div className="lightbox-inner">
            <img id="lightbox-image" src={lightboxImageUrl} alt="lightbox" />
            <button id="close-btn" onClick={handleCloseLightbox}>X</button>
          </div>
        </div>
      )}
  
      <button className="view-image-btn" onClick={handleViewImageClick}>View Image</button>
  
      {/* <div className="slideshow">
        <button className="prev-button" onClick={handlePrevClick} disabled={props.previousArtworkUrl === null}>
          Previous
        </button>
        <button className="next-button" onClick={handleNextClick} disabled={props.nextArtworkUrl === null}>
          Next
        </button>
      </div> */}
    </div> 
  );
  
}

export default Lightbox;
