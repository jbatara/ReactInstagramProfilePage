import React from 'react';
import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery';
import './App.css';
import yodaSunset from './img/yoda_sunset.jpeg';

function App() {
  return (
    <div>
      <Header
        name='Yoda'
        userName='GreenMagik42158'
        posts='187'
        followers='5,000,001'
        following='0'

        />
      <PhotoGallery
        arrayObjectsToDisplay = {objectArray}
        />
    </div>
  );
}
var objectArray =[
  {
    url:{yodaSunset},
    likes:"10000000001",
    comments:"1209754398673"
  },
  {
    url:{yodaSunset},
    likes:"10000000001",
    comments:"1209754398673"
  },
  {
    url:{yodaSunset},
    likes:"10000000001",
    comments:"1209754398673"
  },
  {
    url:{yodaSunset},
    likes:"10000000001",
    comments:"1209754398673"
  },
  {
    url:{yodaSunset},
    likes:"10000000001",
    comments:"1209754398673"
  }
];

export default App;
