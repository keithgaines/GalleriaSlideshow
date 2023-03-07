import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Gallery from './Gallery';
import Artwork from './Artwork'
import { BrowserRouter as Router, Route } from 'react-router-dom';


const artworks = [
  { id: 1, title: 'Starry Night', artist: 'Vincent van Gogh', image: 'assets/starry-night.jpg', year: 1889, blurb: '...' },
  { id: 2, title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', image: 'assets/girl-with-pearl-earrring/hero-small.jpg.jpg', year: 1665, blurb: 'The painting is a tronie, the Dutch 17th-century description of a "head" that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.' },
  // { id: 3, title: ''}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        {artworks.map(artwork => (
          <Route exact path={`/artwork/1}`} element={<Artwork />}>
          </Route>
        ))}
    </Router>
  </React.StrictMode>
);