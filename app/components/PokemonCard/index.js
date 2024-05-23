import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PokemonCard = ({ pokemon }) => {
  return (
    <Link
      className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 text-transform: capitalize"
      to={`/pokemon/${pokemon.name}`}
    >
      {pokemon.name}
    </Link>
  );
};
PokemonCard.propTypes = {
  pokemon: PropTypes.object,
};
export default PokemonCard;
