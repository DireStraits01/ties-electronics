import React, { useState, useEffect } from 'react';

function FilterItemTable({ items, func }) {
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => {
    func(
      typeFilter === 'all'
        ? items
        : items.filter((item) => item.type === typeFilter)
    );
  }, [items, typeFilter]);

  return (
    <>
      <div className="tableFilter">
        <select
          value={typeFilter}
          onChange={async (e) => {
            setTypeFilter(e.target.value);
          }}
        >
          <option value="#">filter</option>
          <option value="all">All items</option>
          <option value="laptop">Laptops</option>
          <option value="cellphones">Cellphones</option>
          <option value="pads">Pads</option>
          <option value="watch">Watch</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>
    </>
  );
}

export default FilterItemTable;
