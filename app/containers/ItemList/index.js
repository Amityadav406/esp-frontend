import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getReq } from 'Helpers/ApiHandlers';
import PropTypes from 'prop-types';

const ItemList = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-5">
    {items.map((item) => (
      <Link
        to={`/item/${item.name}`}
        key={item.name}
        className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 text-transform: capitalize"
      >
        {item.name}
      </Link>
    ))}
  </div>
);

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const ItemPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = () => {
      try {
        getReq('https://pokeapi.co/api/v2/item?limit=50')
          .then((response) => {
            setItems(response.data.results);
          })
          .catch((error) => {
            console.error('Error fetching Item data:', error);
          });
      } catch (error) {
        alert('Invalid Item');
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <h1 className="text-4xl text-center my-5">Item List</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemPage;
