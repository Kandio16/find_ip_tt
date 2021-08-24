import React, { useState } from 'react';
import { DetailsList } from '../DetailsList/DetailsList';
import { getIP } from '../api/apiIP';

import "./FindIP.css"

export const FindIP = () => {
  const [ip, setIp] = useState('');
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const errorMess = {
    error: true,
  }

  const findIp = (event) => {
    setLoading(true);
    event.preventDefault();

    getIP(ip)
    .then((details) => {
      setDetails(details);
      setLoading(false);
    })
    .catch((error) => {
      setDetails(errorMess)
      setLoading(false)
      throw error;
    })
    setIp('')
  }

  return (
    <>
       <form onSubmit={findIp}>
         
        <input
          className="searchInput" 
          type="text"
          name="ip"
          placeholder="8.8.8.8"
          value={ip}
          onChange={event => setIp(event.target.value)}
        />

        <button
          type="submit"
          className="searchButton"
        >
          Search
        </button>
      </form>

      {details
        ? loading 
          ? <p className="message">Loading ...</p>
          : <ul className="list"><DetailsList details={details} /></ul>
        : <p className="message">Enter IP and press “Search” to get geolocation data</p>
      }
    </>
  );
};
