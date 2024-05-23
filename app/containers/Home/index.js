import React, { useEffect, useState } from 'react';
import { PokemonCard } from 'Components';
import { getReq } from 'Helpers/ApiHandlers';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = () => {
      getReq('https://pokeapi.co/api/v2/pokemon?limit=150').then((res) => {
        if (res.status) {
          setPokemons(res.data.results);
        }
      });
    };

    fetchPokemons();
  }, []);

  return (
    <div className="container">
      <h1 className="text-4xl text-center my-5">Pokemon List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-5">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Home;
