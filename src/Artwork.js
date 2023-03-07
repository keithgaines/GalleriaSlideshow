function Artwork(props) {
    return (
      <div>
        <div className="header">
          <span className="galleria">galleria</span>
          <span style={{ float: 'right' }}>
            <a href="http://keithgaines.github.io/galleriaslideshow">STOP SLIDESHOW</a>
          </span>
        </div>
        <hr />
        <div className="heroimage">
          <img srcSet={props.thumbnail} alt="heroimage" />
          <button className="view-image-btn">View Image</button>
          <div className="titleandartistbox">
            <div className="title">
              <h1>{props.title}</h1>
            </div>
            <div className="artist">
              <p>{props.artist}</p>
            </div>
          </div>
        </div>
        <div className="artistimage">
          <img src={props.artistImage} alt="van goh portrait" />
        </div>
        <div className="year">
          <h1>{props.year}</h1>
        </div>
        <div className="textblurb">
          <p>{props.textBlurb}</p>
  
          <div className="gotosource">
            <a href={props.sourceUrl}>
              <p>Go to source</p>
            </a>
          </div>
        </div>
        <div className="slideshow-progress">
          <div className="progress-bar"></div>
        </div>
        <div className="footer">
          <div className="titleandartistfooter">
            <div className="title">
              <h1>{props.title}</h1>
            </div>
            <div className="artist">
              <p>{props.artist}</p>
            </div>
          </div>
          <div className="slideshow-controls">
            <a href={props.previousArtworkUrl}>
              <button className='arrow left'>left arrow</button>
            </a>
            <a href={props.nextArtworkUrl}>
              <button className="arrow right">Next &#8594;</button>
            </a>
          </div>
        </div>
        <div id="lightbox" className="lightbox">
          <div className="lightbox-content">
            <img id="lightbox-image" src={props.galleryImage} alt={props.title} />
            <button className="close-btn" id="close-btn">
              &times;
            </button>
          </div>
        </div>
      </div>
    );
  }

  export default Artwork;
  