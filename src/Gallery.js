import React from 'react';
import './app.css';

function Gallery() {
  return (
    <div>
      <div className="header">
        <span className="galleria">galleria</span>
        <span className='stopslideshow'>
          <a href="/artwork/1">START SLIDESHOW</a>
          </span>
      </div>
      <br />
      <br />
      <hr />
      <div className="masonry">
        <div className="column">
          <div className="item">
            <img src="assets/starry-night/thumbnail.jpg" alt="starry night" />
            <div className="title">Starry Night</div>
            <div className="artist">Vincent van Gogh</div>
          </div>
          <div className="item">
            <img src="assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg" alt="the-storm-on-the-sea-of-galilee" />
            <div className="title">The Storm on the Sea of Galilee</div>
            <div className="artist">Rembrandt</div>
          </div>
          <div className="item">
            <img src="assets/lady-with-an-ermine/thumbnail.jpg" alt="Lady with an Ermin" />
            <div className="title">Lady with an Ermin</div>
            <div className="artist">Leonardo da Vinci</div>
          </div>
          <div className="item">
            <img src="assets/the-boy-in-the-red-vest/thumbnail.jpg" alt="The Boy in the Red Vest" />
            <div className="title">The Boy in the Red Vest</div>
            <div className="artist">Edward Hopper</div>
          </div>
        </div>
        <div className="column">
          <div className="item">
            <img src="assets/girl-with-pearl-earring/thumbnail.jpg" alt="Girl with a Pearl Earring" />
            <div className="title">Girl with a Pearl Earring</div>
            <div className="artist">Johannes Vermeer</div>
          </div>
          <div className="item">
            <img src="assets/the-great-wave-off-kanagawa/thumbnail.jpg" alt="The Great Wave OFf Kanagawa" />
            <div className="title">The Great Wave Off Kanagawa</div>
            <div className="artist">Hokusai</div>
          </div>
          <div className="item">
            <img src="assets/the-night-cafe/thumbnail.jpg" alt="The NIght Cafe" />
            <div className="title">The Night Cafe</div>
            <div className="artist">Vincent van Gogh</div>
          </div>
          <div className="item">
            <img src="assets/arnolfini-portrait/thumbnail.jpg" alt="Arnolfini Portrait" />
            <div className="title">Arnolfini Portrait</div>
            <div className="artist">Jan van Eyck</div>
          </div>
        </div>
        <div className="column">
          <div className="item">
            <img src="assets/guernica/thumbnail.jpg" alt="Guernica" />
            <div className="title">Guernica</div>
            <div className="artist">Pablo Picasso</div>
          </div>
          <div className="item"> 
          <img src="assets/van-gogh-self-portrait/thumbnail.jpg" alt="Van Gogh Self Portrait" />
          <div className="title">Van Gogh Self Portrait</div>
          <div className="artist">Vincent Van Gogh</div>
        </div>
        <div className="item">
          <img src="assets/mona-lisa/thumbnail.jpg" alt="Mona Lisa" />
          <div className="title">Mona Lisa</div>
          <div className="artist">Leonardo da Vinci</div>
        </div>
        </div>
        <div className="column">
          <div className="item">
            <img src="assets/penitent-magdalene/thumbnail.jpg" alt="Penitent Magdalene" />
            <div className="title">Penitent Magdalene</div>
            <div className="artist">Artemisia Gentileschi</div>
          </div>
          <div className="item">
            <img src="assets/the-sleeping-gypsy/thumbnail.jpg" alt="The Sleeping Gypsy" />
            <div className="title">The Sleeping Gypsy</div>
            <div className="artist">Henri Rousseau</div>
          </div>
          <div className="item">
            <img src="assets/the-basket-of-apples/thumbnail.jpg" alt="The Basket of Apples" />
            <div className="title">The Basket of Apples</div>
            <div className="artist">Paul Cézanne</div>
          </div>
          <div className="item">
            <img src="assets/the-swing/thumbnail.jpg" alt="The Swing" />
            <div className="title">The Swing</div>
            <div className="artist">Jean-Honoré Fragonard</div>
          </div>
        </div>
      </div>
      </div>
   )
}

export default Gallery;
