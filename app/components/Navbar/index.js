// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/pokemon/${search.trim().toLowerCase()}`);
    } else {
      alert('Invalid Pokémon');
    }
  };

  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-lg font-bold">
        Pokedex
      </Link>
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          className="px-2 py-1 rounded-l"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Pokémon"
        />
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-1 rounded-r"
        >
          Search
        </button>
      </form>
      <div>
        <Link to="/" className="text-white mx-2">
          Pokémon
        </Link>
        <Link to="/berries" className="text-white mx-2">
          Berries
        </Link>
        <Link to="/items" className="text-white mx-2">
          Items
        </Link>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};

export default Navbar;
