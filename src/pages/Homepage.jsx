import React from 'react';
import SearchBar from '../Components/SearchBar'

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="overlay"></div>
      <div className="content">
        <h1>Cheap Parcel delivery within Lagos</h1>
        <p>COVERING EVERY CORNER</p>
        <SearchBar />
      </div>
    </div>
  )
}
