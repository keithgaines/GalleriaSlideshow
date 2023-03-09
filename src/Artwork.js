import React, { useState, useEffect } from 'react';
import Lightbox from './Lightbox';
import './slide.css';
import images from './images';

function Artwork(props) {
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentArtworkIndex, setCurrentArtworkIndex] = useState(props.artworkIndex);
  const [currentArtworkUrl, setCurrentArtworkUrl] = useState(props.artwork.thumbnail);
  const [lightboxImageUrl, setLightboxImageUrl] = useState('');

  const setCloseLightbox = () => {
    setShowLightbox(false);
  };

  useEffect(() => {
    setCurrentArtworkIndex(props.artworkIndex);
    setCurrentArtworkUrl(props.artwork.thumbnail);
  }, [props.artworkIndex, props.artwork.thumbnail]);

  function handleViewImage() {
    const currentImage = images.find(img => img.id === props.artwork.id);
    setLightboxImageUrl(currentImage.url);
    setShowLightbox(true);
  }

  return (
    <div className="artwork-container">
      <div className="header">
        <div className="galleria">galleria</div>
        <div className='stopslideshow'>
          <a href="/">STOP SLIDESHOW</a>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <div className="view-image-btn-container">
        <button className="view-image-btn" onClick={handleViewImage}>View Image</button>
      </div>
      <div className="heroimage">
        <img srcSet={props.artwork.thumbnail} alt="heroimage" />

        <div className='boxparent'>
          <div className="titleandartistbox">
            <div className="title">
              <h1>{props.artwork.title}</h1>
            </div>
            <div className="artist">
              <p>{props.artwork.artist}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="artistimage">
        <img src={props.artwork.artistImage} alt="artist image" />
      </div>
      <div className="year">
        <h1>{props.artwork.year}</h1>
      </div>
      <div className="textblurb">
        <p>{props.artwork.blurb}</p>
        <a href={props.artwork.sourceUrl}>
            <p>Go to source</p>
          </a>
      </div>
      <div className="slideshow-progress">
        <div className="progress-bar"></div>
      </div>
      <div className="footer">
        <div className="titleandartistfooter">
          <div className="title">
            <h1>{props.artwork.title}</h1>
          </div>
          <div className="artist">
            <p>{props.artwork.artist}</p>
          </div>
        </div>
        <div className="slideshow-controls">
          <a href={props.nextArtworkUrl}>
            <button className="arrow right">Next &#8594;</button>
          </a>
          <a href={props.previousArtworkUrl}>
            <button className='arrow left'>Prev</button>
          </a>
        </div>
      </div>
      {showLightbox && (
        <Lightbox
          images={images}
          imageUrl={lightboxImageUrl}
          setCloseLightbox={setCloseLightbox}
          previousArtworkUrl={props.previousArtworkUrl}
          currentArtworkIndex={currentArtworkIndex}
          artwork={props.artwork}
          handleCloseLightbox={() => setShowLightbox(false)}
        />
      )}
    </div>
  );
}

export default Artwork;
