import React, { useState, useEffect } from 'react';

function FilterItemTable({ items }) {
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => {
    setTypeFilter(items.filter((item) => item.type === typeFilter));
  }, [items, typeFilter]);
  return (
    <>
      <div className="tableFilter">
        <select
          value={typeFilter}
          onChange={(e) => {
            setTypeFilter(e.target.value);
          }}
        >
          <option value="laptops">Laptops</option>
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
