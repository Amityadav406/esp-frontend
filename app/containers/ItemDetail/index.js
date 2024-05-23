import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReq } from 'Helpers/ApiHandlers';

const ItemDetail = () => {
  const { name } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItemsDetails = () => {
      try {
        getReq(`https://pokeapi.co/api/v2/item/${name}`)
          .then((res) => {
            setItem(res.data);
          })
          .catch((error) => {
            console.error('Error fetching Item detail:', error);
            alert('Invalid Item');
          });
      } catch (error) {
        alert('Invalid Item');
      }
    };
    fetchItemsDetails();
  }, [name]);

  if (!item) return null;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center my-5 text-transform: uppercase">
        {item.name}
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
            <th className="px-6 py-4 text-left text-xs break-normal font-medium text-gray-500 uppercase tracking-wider">
              Effects
            </th>
            <td className="px-6 py-4 ">
              {item.effect_entries.map((effect) => effect.effect).join(', ')}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Short Effect
            </th>
            <td className="px-6 py-4  break-normal">
              {item.effect_entries
                .map((effect) => effect.short_effect)
                .join(', ')}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Generation
            </th>
            <td className="px-6 py-4 whitespace-nowrap">
              {item?.generation?.name || 'N/A'}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ItemDetail;
