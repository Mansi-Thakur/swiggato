import React, { useEffect, useState } from "react";
import { useParams,Link  }  from "react-router-dom";
import DefaultImage from "./../Assets/DefaultImage.jpg";
import { useDispatch } from "react-redux";
import { addPlaces } from './../Store/placeSlice.js';

const Listing = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const [pos, setPos] = useState(null);
  const [places, setPlaces] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Try HTML5 geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setPos(location);
          getNearbyPlaces(location);
        },
        () => {
          handleLocationError(true);
        }
      );
    } else {
      handleLocationError(false);
    }
  },);

  useEffect(() => {
    if (pos) {
      getNearbyPlaces(pos);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[page, pos]);

  const handleLocationError = (browserHasGeolocation) => {
    const defaultPos = { lat: 18.5204, lng: 73.8567 };
    setPos(defaultPos);
  };

  const getNearbyPlaces = (location) => {
    if (!location) return;
    const request = {
      location: location,
      rankBy: window.google.maps.places.RankBy.DISTANCE,
      keyword: category,
      pageToken: page > 1 ? places[places.length - 1].next_page_token : null,
    };
    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
    service.nearbySearch(request, nearbyCallback);
  };

  const nearbyCallback = (results, status, pagination) => {
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      setPlaces((prevPlaces) => [...prevPlaces, ...results.slice(0, 50)]);
      dispatch(addPlaces(results.slice(0, 50)));
      if (pagination.hasNextPage) {
        pagination.nextPage();
      }
    }
  };

  const onclickPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= places?.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

const renderPlaceList = () => {
  return (
    <div className="placeListContainer">
      <h2>Restaurants to explore</h2>
      {places.slice(page * 10 - 10, page * 10).map((place) => (
        <div className="placeListItem" key={place.place_id}>
          <Link to={`/details/${place.place_id}`}>
            <ul style={{ listStyle: "none" }}>
              <li>
                <div className="restaurantImageContainer">
                  <div className="restaurantImage">
                    {place.photos && place.photos[0] ? (
                      <img
                        src={place.photos[0].getUrl()}
                        alt="Restaurant"
                        className="restaurantImage"
                      />
                    ) : (
                      <img src={DefaultImage} className="restaurantImage" alt="defaultImage" />
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="restaurantText">{place.name}</h4>{" "}
                  <h6 className="restaurantText">{place.vicinity}</h6>
                </div>
              </li>
            </ul>
          </Link>
        </div>
      ))}
      <div>
        {places?.length > 0 && (
          <div className="pagination">
            <span
              onClick={() => onclickPageHandler(page - 1)}
              className={page > 1 ? "" : "pagination__disable"}
            >
              ◀️
            </span>
            {[...Array(places?.length / 10)].map((_, i) => {
              return (
                <span
                  key={i}
                  onClick={() => onclickPageHandler(i + 1)}
                  className={page === i + 1 ? "pagination__selected" : ""}
                >
                  {i + 1}
                </span>
              );
            })}
            <span
              onClick={() => onclickPageHandler(page + 1)}
              className={
                page < places?.length / 10 ? "" : "pagination__disable"
              }
            >
              ▶️
            </span>
          </div>
        )}
      </div>
    </div>
  );
};


  return (
    <div className="homeFullContainer">
      <div className="homeSubContainer">
        <div className="homeContainer">
          <main className="homeMain">
            <div className="homeDiv">
              <div className="homeNestedDiv">
                <div>
                  <div className="homeContent">
                    <div className="homeContentHeader">
                      <div className="homeHeader">
                        <h1>{category.toUpperCase()}</h1>
                      </div>
                    </div>
                    {renderPlaceList()}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Listing;
