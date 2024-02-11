import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import { MapContainer, TileLayer, Marker, Popup } from 'google-maps-react';
// import { AiOutlineBakery } from '@react-icons/material-ui';

const BakeryFinder = () => {
  const [userLocation, setUserLocation] = useState(null); // Initial user location
  const [bakeries, setBakeries] = useState([]); // Array to store fetched bakery data
  const [loading, setLoading] = useState(false); // Loading state indicator

  // Get user location
  useEffect(() => {
    const getLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };
    getLocation();
  }, []);

  // Fetch bakeries when location is available
  useEffect(() => {
    const fetchBakeries = async () => {
      if (userLocation) {
        setLoading(true);
        const API_KEY = ''; // Replace with your actual API key
        const radius = 5000; // meters (adjust as needed)
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLocation.lat},${userLocation.lng}&radius=${radius}&type=bakery&key=${API_KEY}`;
        try {
          const response = await Axios.get(url);
          setBakeries(response.data.results);
        } catch (error) {
          console.error('Error fetching bakeries:', error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchBakeries();
  }, [userLocation]);

  return (
    <div>
      <h1>Bakery Finder</h1>
      {loading ? <p>Loading bakeries...</p> : (
        <>
          {/* <BakeryMap bakeries={bakeries} /> */}
          <ul>
            {bakeries.map((bakery) => (
              <div key={bakery.id}>{bakery}</div>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default BakeryFinder;
