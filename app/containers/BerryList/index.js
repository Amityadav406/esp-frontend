import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getReq } from 'Helpers/ApiHandlers';
import PropTypes from 'prop-types';

const BerryList = ({ berries }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-5">
    {berries.map((berry) => (
      <Link
        to={`/berry/${berry.name}`}
        key={berry.name}
        className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 text-transform: capitalize"
      >
        {berry.name}
      </Link>
    ))}
  </div>
);

BerryList.propTypes = {
  berries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const BerryPage = () => {
  const [berries, setBerries] = useState([]);

  useEffect(() => {
    const fetchBerry = () => {
      try {
        getReq('https://pokeapi.co/api/v2/berry?limit=50')
          .then((response) => {
            setBerries(response.data.results);
          })
          .catch((error) => {
            console.error('Error fetching Items data:', error);
          });
      } catch (error) {
        alert('Invalid Item');
      }
    };
    fetchBerry();
  }, []);

  return (
    <div className="container">
      <h1 className="text-4xl text-center my-5 ">Berry List</h1>
      <BerryList berries={berries} />
    </div>
  );
};

export default BerryPage;
