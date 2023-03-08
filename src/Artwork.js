import './slide.css'

function Artwork(props) {
  return (
    <div>
      <div className="header">
        <span className="galleria">galleria</span>
        <span className='stopslideshow'>
          <a href="/">STOP SLIDESHOW</a>
          </span>
      </div>
      <br />
      <br />
      <br />
      <hr />
      <div className="heroimage">
        <img srcSet={props.artwork.thumbnail} alt="heroimage" />
        <button className="view-image-btn">View Image</button>
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

        <div className="gotosource">
          <a href={props.artwork.sourceUrl}>
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
      <div id="lightbox" className="lightbox">
        <div className="lightbox-content">
          <img id="lightbox-image" src={props.artwork.galleryImage} alt={props.artwork.title} />
          <button className="close-btn" id="close-btn">
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Artwork;