"use client";
import getConfig from '@/config/config';
import { useEffect, useRef, useState } from 'react';
import PlacesAutocomplete from 'react-google-autocomplete';


export default function AddressInput ({ }) {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const environment = process.env.NEXT_PUBLIC_APP_NODE_ENV || "development";
  const config = getConfig(environment);


  const inputRef = useRef(null);
  const loadScript = (callback) => {
    const existingScript = document.getElementById('google-maps');
    let script = document.createElement('script');
    if (!existingScript) {
      script.src = config.APP_GOOGLE_SRC
      script.id = 'google-maps';
      script.defer = true;
      script.async = true;
      script.onload = () => callback();
      document.body.appendChild(script);
    } else if (script.readyState === 'complete') {
      callback();
    } else {
      script.onload = callback;
    }
  };
  const handleSelect = (address) => {
    setAddress(address);
    fetchLatLng(address); 
  };
  const handleChange = (event) => {
    setAddress(event.target.value);
  };
  const fetchLatLng = (address) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const { lat, lng } = results[0].geometry.location;
        const { city, region, postal_code } = results[0].formatted_address.split(', '); 
        onAddressChange(address);
        onLatLngChange({ lat, lng, city, state: region, zip: postal_code });
      } else {
        console.error('Geocoding error:', status); 
      }
    });
  };
  useEffect(() => {
    loadScript(() => {
    
    });
  }, []);


  return (
    
  <>
  
<PlacesAutocomplete
    ref={inputRef}
    placeholder="Enter your addresdddds"
    value={address}
    onChange={handleChange}
    onSelect={handleSelect}
    // Optional props:
    types={['address']} 
    componentRestrictions={{ country: 'us' }} 
  />
  </>
  );
}
