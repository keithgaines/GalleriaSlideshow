
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './Gallery';
import Artwork from './Artwork';


const artworks = [
  {
    id: 1,
    title: 'Starry Night',
    artist: 'Vincent van Gogh',
    thumbnail: '../assets/starry-night/thumbnail.jpg',
    artistImage: '../assets/starry-night/artist.jpg',
    year: 1889,
    blurb: 'Although The Starry Night was painted during the day in Van Goghs ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. "Through the iron-barred window," he wrote to his brother, Theo, around 23 May 1889, "I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory.',
    sourceUrl: 'https://en.wikipedia.org/wiki/The_Starry_Night'
  },
  {
    id: 2,
    title: 'Girl with a Pearl Earring',
    artist: 'Johannes Vermeer',
    image: '../assets/girl-with-pearl-earring.jpg',
    year: 1665,
    blurb: '...',
  },
  {
    id: 3,
    title: 'The Persistence of Memory',
    artist: 'Salvador Dali',
    image: 'assets/persistence-of-memory.jpg',
    year: 1931,
    blurb: '...',
  },
];


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery artworks={artworks} />} />
        {artworks.map((artwork, index) => (
          <Route 
            key={artwork.id}
            path={`/artwork/${artwork.id}`}
            element={(
              <Artwork
                artwork={artwork}
                nextArtworkId={artworks[index + 1]?.id}
                title={artwork.title}
                artist={artwork.artist}
                artistImage={artwork.artistImage}
                thumbnail={artwork.thumbnail}
                year={artwork.year}
                textBlurb={artwork.blurb}
                previousArtworkUrl={`/artwork/${artworks[index - 1]?.id}`}
                nextArtworkUrl={`/artwork/${artworks[index + 1]?.id}`}
                galleryImage={artwork.image}
              />
            )}
          />
        ))}
      </Routes>
    </Router>
  );
}


export default App;