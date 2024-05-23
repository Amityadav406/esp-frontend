import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BerryCard = ({ berry }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <Link to={`/berry/${berry.name}`}>
        <h3 className="text-lg font-bold">{berry.name}</h3>
      </Link>
    </div>
  );
};

BerryCard.propTypes = {
  berry: PropTypes.object,
};

export default BerryCard;
