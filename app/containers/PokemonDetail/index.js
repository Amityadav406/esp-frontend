import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReq } from 'Helpers/ApiHandlers';

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = () => {
      try {
        getReq(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
          if (res.data) {
            setPokemon(res.data);
          }
        });
      } catch (error) {
        alert('Invalid Pokémon');
      }
    };

    fetchPokemon();
  }, [name]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center my-5 text-transform: uppercase">
        {pokemon.name}
      </h1>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2">Attribute</th>
            <th className="py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Name</td>
            <td className="border px-4 py-2">{pokemon.name}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Abilities</td>
            <td className="border px-4 py-2">
              {pokemon.abilities.map((a) => a.ability.name).join(', ')}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Moves</td>
            <td className="border px-4 py-2">
              {pokemon.moves.map((m) => m.move.name).join(', ')}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Type</td>
            <td className="border px-4 py-2">
              {pokemon.types.map((t) => t.type.name).join(', ')}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Height</td>
            <td className="border px-4 py-2">{pokemon.height}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Weight</td>
            <td className="border px-4 py-2">{pokemon.weight}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PokemonDetail;
