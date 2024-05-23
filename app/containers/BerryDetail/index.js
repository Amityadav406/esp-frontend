import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReq } from 'Helpers/ApiHandlers';

const BerryDetail = () => {
  const { name } = useParams();
  const [berry, setBerry] = useState(null);

  useEffect(() => {
    const fetchBerry = () => {
      try {
        getReq(`https://pokeapi.co/api/v2/berry/${name}`).then((res) => {
          if (res.data) {
            setBerry(res.data);
          }
        });
      } catch (error) {
        alert('Invalid Berry');
      }
    };

    fetchBerry();
  }, [name]);

  if (!berry) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center my-5 text-transform: uppercase">
        {berry.name}
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
            <td className="border px-4 py-2">{berry?.name}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Flavor</td>
            <td className="border px-4 py-2">
              {berry?.flavors.map((f) => f.flavor.name).join(', ')}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Firmness</td>
            <td className="border px-4 py-2">{berry?.firmness.name}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Natural Gift</td>
            <td className="border px-4 py-2">{berry?.natural_gift_power}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BerryDetail;
