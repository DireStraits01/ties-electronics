import React from 'react';
import ItemCard from './ItemCard';

function CellPhones({ items }) {
  const filteredItems = items.filter((item) => item.type === 'cellphones');
  return (
    <>
      <h1>CellPhone</h1>
      <div className="itemsWrapper">
        {filteredItems.map((item, index) => (
          <ItemCard item={item} key={index} />
        ))}
      </div>
    </>
  );
}

export default CellPhones;
