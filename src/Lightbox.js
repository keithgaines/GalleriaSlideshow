import React, { useState, useEffect } from "react";
import "./slide.css";
import images from "./images";

function Lightbox(props) {
  const [lightboxImageUrl, setLightboxImageUrl] = useState("");

  useEffect(() => {
    setLightboxImageUrl(props.imageUrl);
  }, [props.imageUrl]);

  function handleCloseLightbox() {
    setLightboxImageUrl("");
  }

  function handleViewImageClick() {
    const currentImage = images.find(
      (img) => img.id === props.currentArtworkId,
    );
    setLightboxImageUrl(currentImage.url);
  }

  return (
    <div>
      {lightboxImageUrl !== "" && (
        <div id="lightbox" onClick={handleCloseLightbox}>
          <div className="lightbox-inner">
            <img
              id="lightbox-image"
              src={lightboxImageUrl}
              alt="artwork preview"
            />
            <button id="close-btn" onClick={handleCloseLightbox}>
              X
            </button>
          </div>
        </div>
      )}

      <button className="view-image-btn" onClick={handleViewImageClick}>
        View Image
      </button>
    </div>
  );
}

export default Lightbox;
