import React from 'react';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

export const Detail = () => {
  const { place_id } = useParams();
  const places = useSelector((state) => state.places.places);
  const filteredPlace = places.find(Place => Place.place_id === place_id);
  
  // Render details of the selected filteredPlace
  return (
    <div className="detailContainer">
      <h2 className="placeName">{filteredPlace.name}</h2>
      <div className="imageContainer">
        {filteredPlace.photos && filteredPlace.photos.length > 0 && (
          <img className="placeImage" src={filteredPlace.photos[0].getUrl()} alt={filteredPlace.name} />
        )}
      </div>
      <p className="placeRating">Rating: {filteredPlace.rating}</p>
      <p className="placeAddress">Address: {filteredPlace.vicinity}</p>
    </div>
  );
};


export default Detail;
